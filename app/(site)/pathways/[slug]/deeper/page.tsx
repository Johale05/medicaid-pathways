import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Link from "next/link";
import PosterSection from "@/components/PosterSection";
import { designTokens } from "@/lib/designTokens";
import { getPathway } from "@/lib/pathways";

type Props = { params: { slug: string } };

export const metadata = {
  robots: { index: false, follow: true },
};

const TOO_LATE_SCENARIOS = [
  {
    title: "We’re being asked to private pay now",
    paragraph:
      "This often comes up at admission or shortly after, when a facility is confirming who is responsible for payment.",
    bullets: [
      "Ask what rate is being quoted and when billing would begin.",
      "Clarify whether Medicaid is being discussed as a future payer and what steps the facility expects.",
      "Separate immediate care decisions from long-term financial decisions.",
    ],
  },
  {
    title: "Medicare rehab is ending",
    paragraph: "Families are often told coverage is stopping and the next step must be decided immediately.",
    bullets: [
      "Confirm the last covered day and whether an appeal window exists.",
      "Ask what level of care is recommended next and who is making that recommendation.",
      "If Medicaid may be needed, identify what information is required to evaluate eligibility.",
    ],
  },
  {
    title: "The facility says we don’t qualify for Medicaid",
    paragraph:
      "Staff may be speaking from experience, incomplete information, or a financial screening — not a legal determination.",
    bullets: [
      "Ask what assumption the statement is based on (income, assets, transfers, marital status).",
      "Confirm whether medical eligibility / level of care has been evaluated, not just finances.",
      "Treat it as a starting point for clarification, not a final answer.",
    ],
  },
  {
    title: "We’re being pushed to apply for Medicaid immediately",
    paragraph:
      "Applications move faster when the facts are clear, but rushed applications can create avoidable problems.",
    bullets: [
      "Confirm who has authority to apply and access records.",
      "Gather the core documents first (identification, income, bank statements, insurance, transfer history).",
      "Avoid guessing — eligibility depends on specifics.",
    ],
  },
  {
    title: "We’re worried past transfers made it ‘too late’",
    paragraph:
      "Transfers matter, but they don’t automatically eliminate every option. What matters is timing and context.",
    bullets: [
      "Identify what transfers occurred, when, and why.",
      "Do not make new gifts or transfers to ‘fix’ the issue without guidance.",
      "Focus on what decisions are still reversible and what can be documented.",
    ],
  },
  {
    title: "We’re not sure what we’re allowed to sign or decide",
    paragraph:
      "In crisis moments, families are often acting quickly without clear authority or a shared plan.",
    bullets: [
      "Confirm who has legal authority (POA, guardian, spouse) and what powers it includes.",
      "Make sure decisions match the person’s wishes where possible.",
      "When unsure, pause major financial commitments until authority and options are clear.",
    ],
  },
];

export default function DeeperPage({ params }: Props) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();

  const backHref = `/pathways/${pathway.slug}/`;

  return (
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="mx-auto space-y-10" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <header className="space-y-2">
            <h1 className="font-display text-4xl font-semibold tracking-tight leading-snug">{pathway.title}</h1>
            {pathway.slug === "too-late" ? (
              <>
                <p>
                  If you’re here, something has likely changed quickly — a health event, a facility admission, or a
                  coverage transition.
                </p>
                <p>
                  These are common moments when families feel pressure. The goal is not to do everything at once — it
                  is to understand what’s happening and what decisions truly matter first.
                </p>
              </>
            ) : (
              <>
                <p>This page offers a deeper explanation of why this question is often complicated.</p>
                <p>It is general educational information only.</p>
              </>
            )}
          </header>

          {pathway.slug === "too-late" ? (
            <div className="mx-auto space-y-6">
              <p
                className="mt-3 border-l-2 pl-3 font-semibold"
                style={{ borderColor: "rgba(45, 41, 36, 0.35)", color: "rgba(45, 41, 36, 0.8)" }}
              >
                Choose the situation below that sounds closest to what you’re hearing right now.
              </p>

              <div className="grid gap-10 md:grid-cols-2">
                {TOO_LATE_SCENARIOS.map((scenario) => (
                  <PosterSection key={scenario.title} title={scenario.title} className="pt-0">
                    <div className="space-y-4">
                      <p>{scenario.paragraph}</p>
                      <ul className="list-disc space-y-2 pl-6">
                        {scenario.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </PosterSection>
                ))}

                <div className="mt-6 md:col-span-2 space-y-10">
                  <PosterSection title="Before You Act, Consider This" className="pt-0">
                    <ul className="list-disc space-y-1.5 pl-6 leading-relaxed">
                      <li>Don’t move money without understanding how it will be categorized.</li>
                      <li>Don’t assume a statement from staff is the final word on eligibility.</li>
                      <li>Don’t treat time pressure as the same thing as a legal deadline.</li>
                      <li>Don’t assume one missed step eliminates all remaining options.</li>
                    </ul>
                  </PosterSection>

                  <PosterSection title="When Talking With Someone Helps" className="pt-0">
                    <div className="space-y-6 pt-2">
                      <p>
                        If you’re hearing any of the situations above and feeling pressure to decide quickly, a short
                        conversation can help clarify what is urgent, what is not, and what flexibility still exists.
                      </p>
                      <Link
                        href="/talk/"
                        className="inline-flex items-center justify-center rounded-xl border px-6 py-3 no-underline"
                        style={{
                          backgroundColor: designTokens.colors.warmPaper,
                          borderColor: designTokens.colors.subtleBorder,
                          color: designTokens.colors.ink,
                        }}
                      >
                        Talk With a Medicaid Planning Attorney
                      </Link>
                    </div>
                  </PosterSection>
                </div>
              </div>
            </div>
          ) : (
            <article className="space-y-5 leading-relaxed">
              {pathway.layer2Body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </article>
          )}

          <div className="pt-2">
            <Link href={backHref} className="text-sm hover:underline">
              Back to the main pathway page
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
