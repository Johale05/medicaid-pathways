"use client";

import { useState } from "react";
import TurnstileWidget from "@/components/TurnstileWidget";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ turnstileSiteKey }: { turnstileSiteKey?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const canSubmit = state !== "submitting";

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const payload = {
        fullName: String(formData.get("fullName") || ""),
        phone: String(formData.get("phone") || ""),
        email: String(formData.get("email") || ""),
        description: String(formData.get("description") || ""),
        honey: String(formData.get("company") || ""), // honeypot
        turnstileToken: token,
      };

      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await resp.json()) as { ok: boolean; message: string };

      if (!resp.ok || !data.ok) {
        setState("error");
        setMessage(data.message || "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      setMessage(data.message || "Thanks — we received your message.");
      form.reset();
      setToken("");
    } catch (err) {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-slate-900">Request a Conversation</h3>
      <p className="mt-2 text-slate-700">
        We’ll respond promptly to understand your situation and help determine next steps.
      </p>

      <form className="mt-6 space-y-4" onSubmit={submit}>
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="off" tabIndex={-1} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="fullName">
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-2"
              type="text"
              autoComplete="name"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="phone">
              Phone Number <span aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-2"
              type="tel"
              autoComplete="tel"
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-2"
              type="email"
              autoComplete="email"
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-sm font-medium" htmlFor="description">
              Briefly describe what’s happening (if you’d like).
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 min-h-[120px]"
            />
          </div>
        </div>

        {turnstileSiteKey ? (
          <div className="text-sm text-slate-600">
            For security purposes, this form is protected against spam.
            <TurnstileWidget siteKey={turnstileSiteKey} onToken={setToken} />
          </div>
        ) : (
          <div className="text-sm text-slate-600">
            For security purposes, this form is protected against spam.
          </div>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full md:w-auto rounded-2xl border border-slate-300 px-6 py-3 hover:bg-slate-50 disabled:opacity-60"
        >
          Contact Us to Schedule a Conversation
        </button>

        <p className="text-sm text-slate-600">
          Submitting this form does not create an attorney-client relationship. We’ll simply begin a conversation.
        </p>

        {message ? (
          <div
            className={`text-sm ${state === "success" ? "text-slate-800" : "text-red-700"}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </div>
        ) : null}
      </form>
    </div>
  );
}
