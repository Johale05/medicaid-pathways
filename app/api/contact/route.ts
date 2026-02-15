import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { requireEnv } from "@/lib/env";
import { verifyTurnstile } from "@/lib/turnstile";
import { checkRateLimit } from "@/lib/rateLimit";

type Payload = {
  fullName: string;
  phone: string;
  email: string;
  description?: string;
  honey?: string;
  turnstileToken?: string;
};

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    const limit = Number(process.env.RATE_LIMIT_PER_HOUR || "5");
    const rl = checkRateLimit(`contact:${ip}`, limit, 60 * 60 * 1000);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, message: "Please wait a bit and try again." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Payload;

    // Honeypot
    if (body.honey && body.honey.trim().length > 0) {
      return NextResponse.json({ ok: false, message: "Unable to submit." }, { status: 400 });
    }

    const fullName = (body.fullName || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const description = (body.description || "").trim();

    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { ok: false, message: "Please complete the required fields and try again." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Turnstile (mandatory when configured)
    const secretConfigured = !!process.env.TURNSTILE_SECRET_KEY;
    if (secretConfigured) {
      const token = (body.turnstileToken || "").trim();
      if (!token) {
        return NextResponse.json(
          { ok: false, message: "For security, please try again." },
          { status: 400 }
        );
      }
      const verification = await verifyTurnstile(token, ip);
      if (!verification.ok) {
        return NextResponse.json(
          { ok: false, message: "For security, please try again." },
          { status: 400 }
        );
      }
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return NextResponse.json(
        { ok: false, message: "Form is not configured yet. Please call the office instead." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const to = process.env.CONTACT_TO_EMAIL || "relations@thehalelawfirm.com";
    const from = requireEnv("CONTACT_FROM_EMAIL");

    const submittedAt = new Date().toISOString();

    const emailBody = [
      `New Medicaid Pathways Inquiry`,
      ``,
      `Full Name: ${fullName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Brief Description: ${description || "(not provided)"}`,
      ``,
      `Submitted At: ${submittedAt}`,
      `Origin IP: ${ip}`,
    ].join("\n");

    await resend.emails.send({
      to,
      from,
      subject: `New Medicaid Pathways Inquiry – ${fullName}`,
      text: emailBody,
    });

    return NextResponse.json({
      ok: true,
      message: "Thank you. We received your message and will be in touch.",
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
