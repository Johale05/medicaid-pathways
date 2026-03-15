import Link from "next/link";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import PosterSection from "@/components/PosterSection";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "Talk With a Medicaid Planning Attorney | Medicaid Pathways",
  description: "A calm first step toward clarity. Request a conversation when you’re ready.",
};

export default function TalkPage() {
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY;

  return (
    <div className="poster-page-bg pb-14">
      <section className="pt-14 md:pt-16">
        <Container>
          <header className="mx-auto space-y-4" style={{ maxWidth: designTokens.maxReadingWidth }}>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Talk With a Medicaid Planning Attorney
            </h1>
            <p className="text-xl text-slate-700">You don’t have to figure this out alone.</p>
            <div className="space-y-3 text-slate-700">
              <p>
                If you’re here, it likely means you’re facing a long-term care or Medicaid decision that feels
                overwhelming, urgent, or both.
              </p>
              <p>
                The purpose of this conversation is not to rush you or pressure you. It is to help you understand
                where things stand, what options may exist, and what next steps—if any—make sense for your family.
              </p>
            </div>
          </header>
        </Container>
      </section>

      <PosterSection title="What This Conversation Is (and Isn’t)" className="pt-8 md:pt-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: designTokens.colors.subtleBorder,
              backgroundColor: designTokens.colors.warmPaper,
              boxShadow: designTokens.shadows.softShadow,
            }}
          >
            <h3 className="font-display text-xl font-semibold tracking-tight">What it is</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>A chance to explain your situation in plain language</li>
              <li>A conversation with an attorney who focuses on Medicaid and long-term care planning</li>
              <li>An opportunity to get clarity before making decisions</li>
            </ul>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              borderColor: designTokens.colors.subtleBorder,
              backgroundColor: designTokens.colors.warmPaper,
              boxShadow: designTokens.shadows.softShadow,
            }}
          >
            <h3 className="font-display text-xl font-semibold tracking-tight">What it isn’t</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>A sales call</li>
              <li>A commitment to move forward</li>
              <li>A one-size-fits-all answer</li>
            </ul>
            <p className="mt-4">Every family’s situation is different. The goal is understanding, not assumptions.</p>
          </div>
        </div>
      </PosterSection>

      <PosterSection title="When It Makes Sense to Reach Out" className="pt-0">
        <div className="space-y-4">
          <p>Families often contact us when:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Medicare coverage is ending</li>
            <li>A nursing home stay has begun or is imminent</li>
            <li>Medicaid eligibility feels confusing or unclear</li>
            <li>Decisions feel rushed or overwhelming</li>
          </ul>
          <p>If that sounds familiar, it may help to talk with someone who does this every day.</p>
        </div>
      </PosterSection>

      <PosterSection title="What Happens Next" className="pt-0">
        <div className="space-y-4">
          <ul className="list-disc space-y-2 pl-6">
            <li>A member of our team will connect with you to understand the basics of your situation</li>
            <li>We’ll help determine whether a Medicaid planning conversation is appropriate</li>
            <li>If it is, we’ll schedule time with an attorney who can walk through your options</li>
          </ul>
          <p>If we’re not the right fit—or if timing matters—we’ll tell you that honestly.</p>
        </div>
      </PosterSection>

      <PosterSection title="Take the Next Step (When You’re Ready)" className="pt-0">
        <div className="space-y-5">
          <p>If your situation is urgent, please call our office at (214) 446-5080.</p>
          <p>Use the form below to begin the conversation.</p>
          <ContactForm turnstileSiteKey={turnstileSiteKey} />
          <div>
            <p className="text-sm text-[#5a5144]">Want to learn more about the firm behind Medicaid Pathways?</p>
            <Link href="/about/" className="mt-1 inline-block text-sm text-[#5a5144] underline-offset-2 hover:underline">
              Learn more about The Hale Law Firm
            </Link>
          </div>
        </div>
      </PosterSection>
    </div>
  );
}
