import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Talk With a Medicaid Planning Attorney | Medicaid Pathways",
  description: "A calm first step toward clarity. Request a conversation when you’re ready.",
};

export default function TalkPage() {
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY;

  return (
    <div className="py-12">
      <Container>
        <div className="max-w-3xl space-y-10">
          <header className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Talk With a Medicaid Planning Attorney</h1>
            <p className="text-xl text-slate-700">You don’t have to figure this out alone.</p>
            <div className="space-y-3 text-slate-700">
              <p>
                If you’re here, it likely means you’re facing a long-term care or Medicaid decision that feels
                overwhelming—or time-sensitive.
              </p>
              <p>
                The purpose of this conversation is not to rush you or pressure you. It’s to help you understand where
                things stand, what options may exist, and what steps—if any—make sense next.
              </p>
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">What This Conversation Is (and Isn’t)</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="font-semibold text-slate-900">What it is</h3>
                <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
                  <li>A chance to explain your situation in plain language</li>
                  <li>A conversation with an attorney who focuses on Medicaid and long-term care planning</li>
                  <li>An opportunity to get clarity before making decisions</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="font-semibold text-slate-900">What it isn’t</h3>
                <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-2">
                  <li>A sales call</li>
                  <li>A commitment to move forward</li>
                  <li>A one-size-fits-all answer</li>
                </ul>
                <p className="mt-4 text-slate-700">Every family’s situation is different. The goal is understanding, not assumptions.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Who We Are</h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft text-slate-700">
              <p className="mb-3">Embedded video goes here (no autoplay).</p>
              <p>
                Our attorneys focus on Medicaid and long-term care planning. We work with families who are often making
                decisions during stressful moments and need clear explanations before taking action.
              </p>
              <p className="mt-3">
                Our role is to help you understand your situation—not to push you toward a particular outcome.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">What Happens Next</h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>A member of our team will connect with you to understand the basics of your situation</li>
              <li>We’ll help determine whether a Medicaid planning conversation is appropriate</li>
              <li>If it is, we’ll schedule time with an attorney who can walk through your options</li>
            </ul>
            <p className="text-slate-700">If we’re not the right fit—or if timing matters—we’ll tell you that honestly.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">When It Makes Sense to Reach Out</h2>
            <p className="text-slate-700">Families often contact us when:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Medicare coverage is ending</li>
              <li>A nursing home stay has begun or is imminent</li>
              <li>Medicaid eligibility feels confusing or unclear</li>
              <li>Decisions feel rushed or overwhelming</li>
            </ul>
            <p className="text-slate-700">
              If that sounds familiar, it may help to talk with someone who does this every day.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Take the Next Step (When You’re Ready)</h2>
            <p className="text-slate-700">If your situation is urgent, please call our office at (214) 446-5080.</p>
            <ContactForm turnstileSiteKey={turnstileSiteKey} />
          </section>
        </div>
      </Container>
    </div>
  );
}
