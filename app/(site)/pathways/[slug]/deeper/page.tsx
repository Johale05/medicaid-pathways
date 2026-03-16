import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Link from "next/link";
import PosterSection from "@/components/PosterSection";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { designTokens } from "@/lib/designTokens";
import { getPathway } from "@/lib/pathways";

type Props = { params: { slug: string } };

export const metadata = {
  robots: { index: false, follow: true },
};

type TooLateScenario = {
  title: string;
  whatItUsuallyMeans: string;
  mattersFirst: string;
  notToAssume: string;
  whenConversationHelps: string;
};

const TOO_LATE_SCENARIO_GROUPS: { heading: string; scenarios: TooLateScenario[] }[] = [
  {
    heading: "Care is changing quickly",
    scenarios: [
      {
        title: "Medicare rehab is ending and we don’t know what happens next",
        whatItUsuallyMeans:
          "A coverage period is ending, but care needs continue. Families are often asked to decide quickly before they understand the full transition plan.",
        mattersFirst:
          "Confirm the last covered day, the recommended next care setting, and whether home care is realistic and safe right now.",
        notToAssume: "Do not assume a fast coverage change means every decision must be final today.",
        whenConversationHelps:
          "A short conversation can help separate immediate care-transition decisions from financial decisions that may allow more time.",
      },
      {
        title: "They say rehab is ending, but he cannot come home",
        whatItUsuallyMeans:
          "Discharge pressure is real, but the immediate issue is often safe placement and care delivery, not just abstract Medicaid eligibility.",
        mattersFirst:
          "Clarify the next appropriate setting, what clinical clearance and records are needed, and how admissions and payor questions are being handled.",
        notToAssume:
          "Do not assume one discharge conversation resolves the larger placement, coverage, and payment problem.",
        whenConversationHelps:
          "A coordinated review can help families move through placement, records, admissions, and Medicaid planning in the right sequence.",
      },
      {
        title: "We need placement soon and do not know where to start",
        whatItUsuallyMeans:
          "The family is trying to coordinate care level, admissions expectations, and payment planning at the same time.",
        mattersFirst:
          "Confirm the care level being recommended, what facilities are considering for admission, and what documentation is needed now.",
        notToAssume: "Do not assume placement is only a legal or only a medical question — it is usually both.",
        whenConversationHelps:
          "Guidance can help organize the first steps so clinical, admissions, and financial decisions support each other.",
      },
    ],
  },
  {
    heading: "Payment pressure is building",
    scenarios: [
      {
        title: "We are being asked to private pay now",
        whatItUsuallyMeans:
          "A facility is trying to secure payment while eligibility and long-term planning questions are still unresolved.",
        mattersFirst:
          "Clarify what amount is being requested, when it starts, and what is being discussed about Medicaid-pending or Medicaid bed availability.",
        notToAssume: "Do not assume payment pressure is the same as a final legal answer on Medicaid options.",
        whenConversationHelps:
          "A quick review can help families avoid commitments that reduce flexibility before facts are organized.",
      },
      {
        title: "We are being pushed to sign papers before we understand the situation",
        whatItUsuallyMeans:
          "Families are being asked to sign admissions or financial documents during a stressful transition with limited context.",
        mattersFirst:
          "Confirm who is signing, in what capacity, and which items require immediate action versus later follow-up.",
        notToAssume: "Do not assume every document placed in front of you must be signed immediately.",
        whenConversationHelps:
          "A short conversation can help identify what needs attention now and what should be reviewed first.",
      },
    ],
  },
  {
    heading: "You are being told Medicaid may not work",
    scenarios: [
      {
        title: "The facility says we do not qualify for Medicaid",
        whatItUsuallyMeans:
          "Someone is sharing a preliminary view based on limited financial information, not necessarily a complete legal evaluation.",
        mattersFirst:
          "Clarify what assumption is driving that statement and whether care-level and payor facts have all been verified.",
        notToAssume: "Do not assume one staff statement is the final word on eligibility.",
        whenConversationHelps:
          "Counsel can help test the assumptions and identify whether lawful options still exist.",
      },
      {
        title: "We are being pushed to apply for Medicaid immediately",
        whatItUsuallyMeans:
          "The process may need to move quickly, but rushed applications without complete facts can create avoidable problems.",
        mattersFirst:
          "Confirm authority to apply, identify missing records, and gather core financial and coverage information before filing.",
        notToAssume: "Do not assume faster is always better if the application is incomplete or inaccurate.",
        whenConversationHelps:
          "A focused conversation can help sequence document gathering, authority issues, and filing timing.",
      },
      {
        title: "We are worried past gifts or transfers made it too late",
        whatItUsuallyMeans:
          "Prior transfers do matter, but outcomes depend on timing, context, documentation, and the rest of the case facts.",
        mattersFirst:
          "List what was transferred, when, and why, then evaluate it within the full care and financial timeline.",
        notToAssume: "Do not assume a transfer issue means all remaining options are gone.",
        whenConversationHelps:
          "Early legal analysis can clarify which risks are real and which steps may still improve the situation.",
      },
    ],
  },
  {
    heading: "Family or legal complications are in the background",
    scenarios: [
      {
        title: "We do not know who can sign or make decisions",
        whatItUsuallyMeans:
          "Authority questions are overlapping with care and payment pressure, making routine tasks harder than they appear.",
        mattersFirst:
          "Identify who has legal authority now, what powers are available, and what records each person can access.",
        notToAssume: "Do not assume family agreement automatically creates legal authority.",
        whenConversationHelps:
          "Guidance can help families align authority, records, and care decisions before avoidable delays develop.",
      },
    ],
  },
];

const VIDEO_IDS: Record<string, string> = {
  "medicare-ending": "dQw4w9WgXcQ",
  "spend-everything": "dQw4w9WgXcQ",
  "too-much-income": "dQw4w9WgXcQ",
  "qualify-medically": "dQw4w9WgXcQ",
  "sell-the-house": "dQw4w9WgXcQ",
  "too-late": "dQw4w9WgXcQ",
};

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
                  If you’re here, something likely changed quickly — care setting, discharge timing, coverage, or
                  payment expectations.
                </p>
                <p>
                  Families often feel everything must be decided immediately. The goal is not to solve everything at
                  once. The goal is to identify what needs attention first.
                </p>
              </>
            ) : (
              <>
                <p>This page offers a deeper explanation of why this question is often complicated.</p>
                <p>It is general educational information only.</p>
              </>
            )}
          </header>

          {pathway.slug !== "too-late" && (
            <PosterSection>
              <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
            </PosterSection>
          )}

          {pathway.slug === "too-late" ? (
            <div className="mx-auto space-y-8">
              <PosterSection title="What to Clarify First" className="pt-0">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Where is your family member right now?</li>
                  <li>What level of care is being discussed next?</li>
                  <li>Is discharge or transfer actually happening, and when?</li>
                  <li>What is the current payor source, and when may it change?</li>
                  <li>Is a nursing facility, Medicaid bed, or Medicaid-pending placement being discussed?</li>
                  <li>Who has legal authority to sign or decide?</li>
                  <li>Has a Medicaid application already started?</li>
                  <li>Has any money or property already been moved?</li>
                </ul>
              </PosterSection>

              <p className="font-medium text-xl" style={{ color: "rgba(45, 41, 36, 0.8)" }}>
                Choose the scenario that sounds most like what your family is hearing right now.
              </p>

              <div className="space-y-8">
                {TOO_LATE_SCENARIO_GROUPS.map((group) => (
                  <div key={group.heading} className="space-y-4">
                    <h2 className="font-display text-2xl font-semibold tracking-tight">{group.heading}</h2>
                    <div className="space-y-5">
                      {group.scenarios.map((scenario) => (
                        <PosterSection key={scenario.title} title={scenario.title} className="pt-0">
                          <div className="space-y-3">
                            <p>
                              <span className="font-medium">What this usually means:</span> {scenario.whatItUsuallyMeans}
                            </p>
                            <p>
                              <span className="font-medium">What matters first:</span> {scenario.mattersFirst}
                            </p>
                            <p>
                              <span className="font-medium">What not to assume:</span> {scenario.notToAssume}
                            </p>
                            <p>
                              <span className="font-medium">When a conversation helps:</span> {scenario.whenConversationHelps}
                            </p>
                          </div>
                        </PosterSection>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <PosterSection title="Guardrails During Fast-Moving Decisions" className="pt-0">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Don’t move money without understanding how it affects eligibility and timing.</li>
                  <li>Don’t assume staff statements are the final legal word.</li>
                  <li>Don’t treat time pressure as identical to a legal deadline.</li>
                  <li>Don’t assume one missed step means every option is gone.</li>
                </ul>
              </PosterSection>

              <PosterSection title="When “Too Late” Feels True" className="pt-0">
                <p>
                  In many families, “too late” describes the moment when care needs, coverage changes, payment
                  questions, and decision-making authority all collide at once.
                </p>
                <p>
                  That moment usually needs structure quickly — not panic. With the right sequence, families can often
                  stabilize the situation and move forward more clearly.
                </p>
              </PosterSection>

              <PosterSection title="When Talking With Someone Helps" className="pt-0 mt-6">
                <div className="space-y-6 pt-2">
                  <p>
                    If you’re hearing any of the situations above, a short conversation can help sort what is urgent,
                    what is not, and what coordinated next steps make sense.
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
