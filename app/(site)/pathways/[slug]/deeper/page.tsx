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
          "The facility is addressing payment before the full Medicaid picture is clear.",
        mattersFirst:
          "Confirm the amount, start date, and whether this is temporary while Medicaid-pending status or Medicaid bed availability is reviewed.",
        notToAssume:
          "Do not assume a private-pay request decides your family’s long-term commitment.",
        whenConversationHelps:
          "A quick review can sort what is being requested now, what can wait, and how to preserve flexibility.",
      },
    ],
  },
  {
    heading: "You are being told Medicaid may not work",
    scenarios: [
      {
        title: "The facility says we do not qualify for Medicaid",
        whatItUsuallyMeans:
          "This is often a preliminary screening view, not a full legal eligibility analysis.",
        mattersFirst:
          "Ask what assumption is driving that conclusion and confirm care-level, income, asset, and payor facts were all reviewed.",
        notToAssume: "Do not assume one screening statement is the final eligibility answer.",
        whenConversationHelps:
          "Counsel can quickly test the assumptions and identify whether lawful options remain.",
      },
      {
        title: "We are being pushed to apply for Medicaid immediately",
        whatItUsuallyMeans:
          "Timing may matter, but filing before authority and records are ready can create avoidable delays.",
        mattersFirst:
          "Confirm who can apply, what records are missing, and which care and coverage facts should be verified before filing.",
        notToAssume: "Do not assume filing sooner helps if the application is incomplete or inaccurate.",
        whenConversationHelps:
          "A focused conversation can sequence authority, records, and timing so the first submission is stronger.",
      },
      {
        title: "We are worried past gifts or transfers made it too late",
        whatItUsuallyMeans:
          "Transfers matter, but outcomes depend on timing, documentation, and the full care and financial timeline.",
        mattersFirst:
          "List what was transferred, when, to whom, and why, then evaluate those facts against current care and coverage needs.",
        notToAssume: "Do not assume one transfer issue means every option is gone.",
        whenConversationHelps:
          "Early legal analysis can identify the real risks and practical steps that may still improve the path forward.",
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
  "medicare-ending": "",
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
  const isMedicareEnding = pathway.slug === "medicare-ending";

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
            ) : isMedicareEnding ? (
              <>
                <p>Families ask “what happens when Medicare ends?” at different points: before coverage changes, when a last covered day is mentioned, when discharge is being discussed, or when phrases like plateaued, not participating, or no longer skilled are used.</p>
                <p>This page helps you sort what those conversations usually mean and what to clarify first.</p>
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
              <YouTubeEmbed
                videoId={VIDEO_IDS[pathway.slug]}
                title={pathway.title}
                placeholderText={
                  pathway.slug === "medicare-ending"
                    ? "A short overview for this pathway will be added here. It will explain common Medicare-ending conversations and what families may want to clarify first."
                    : undefined
                }
              />
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
                  <li>Who has legal authority to sign or decide, and in what role?</li>
                  <li>What exactly is your family being asked to sign or commit to right now?</li>
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
          ) : isMedicareEnding ? (
            <div className="mx-auto space-y-8">
              <PosterSection title="What to Clarify First" className="pt-0">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Is Medicare rehab coverage still active right now?</li>
                  <li>Has a last covered day been given?</li>
                  <li>Is discharge being discussed?</li>
                  <li>Is home being presented as the next setting?</li>
                  <li>Is long-term nursing care being discussed instead?</li>
                  <li>Is private pay being discussed next?</li>
                  <li>Is an appeal being mentioned?</li>
                  <li>Is plan type or coverage structure part of the conversation?</li>
                </ul>
              </PosterSection>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 1: Understanding the coverage change</h2>
                <PosterSection title="How long does Medicare usually pay for rehab?" className="pt-0">
                  <div className="space-y-3">
                    <p>Medicare rehab coverage is a limited skilled-care benefit. Families often hear day ranges like days 1–20 and days 21–100, but those ranges are only part of the story.</p>
                    <p>Coverage can end before day 100 if Medicare says skilled criteria are no longer met. That can happen even when your family member still needs substantial daily help.</p>
                    <p>So the key issue is not only how many days are left, but what coverage decision is being made now and what care plan is being recommended next.</p>
                  </div>
                </PosterSection>
                <PosterSection title="What is the difference between rehab coverage and long-term care?" className="pt-0">
                  <div className="space-y-3">
                    <p>Short-term skilled rehab coverage and ongoing custodial long-term care are different conversations. Medicare rehab coverage is tied to skilled treatment criteria, while long-term care planning focuses on ongoing daily support needs.</p>
                    <p>Families often hear "coverage is ending" and understandably worry that means "care is ending." Usually it means the payor category is changing, not that care needs have disappeared.</p>
                  </div>
                </PosterSection>
                <PosterSection title="Does Medicare ending automatically mean Medicaid is next?" className="pt-0">
                  <div className="space-y-3">
                    <p>Not automatically. Medicare ending is a coverage transition, but it does not by itself decide where care will happen next or which payment source is best.</p>
                    <p>Medicaid may become important when ongoing nursing care is now the issue, but some families still need to clarify discharge planning, home feasibility, plan details, or short-term payment timing first.</p>
                  </div>
                </PosterSection>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 2: Common next-step situations</h2>
                <PosterSection title="Medicare rehab is ending and we do not know what happens next" className="pt-0">
                  <div className="space-y-3">
                    <p><span className="font-medium">What this usually means:</span> Coverage, discharge timing, next care setting, and payment may all now be in play at once.</p>
                    <p><span className="font-medium">What to clarify first:</span> Start by separating those questions so your family is not reacting to all of them at once.</p>
                  </div>
                </PosterSection>
                <PosterSection title="They are saying the patient is not improving, has plateaued, is not participating, or is no longer skilled" className="pt-0">
                  <div className="space-y-3">
                    <p>These phrases usually relate to Medicare skilled-coverage criteria, not necessarily to whether the person still needs care.</p>
                    <p>Families often hear this language as abandonment or forced discharge. It helps to slow down and clarify what decision is actually being made.</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Has a last covered day been given?</li>
                      <li>Is discharge being discussed?</li>
                      <li>What setting is being proposed next?</li>
                      <li>Is appeal being mentioned?</li>
                      <li>Is long-term care now the real issue?</li>
                    </ul>
                  </div>
                </PosterSection>
                <PosterSection title="They say discharge is being discussed, but the person cannot come home" className="pt-0">
                  <p>Coverage changing does not answer whether home is realistic. The immediate issue may be safe placement and the next care setting.</p>
                </PosterSection>
                <PosterSection title="We are being told private pay starts next" className="pt-0">
                  <div className="space-y-3">
                    <p>This often comes up when rehab coverage is ending while care needs continue. Families may hear this before they feel clear on the full transition plan.</p>
                    <p>It helps to confirm the amount, start date, and whether this is being framed as temporary while broader options are reviewed. A private-pay request can be important without being the entire long-term answer.</p>
                  </div>
                </PosterSection>
                <PosterSection title="We need to understand whether long-term care is now the issue" className="pt-0">
                  <div className="space-y-3">
                    <p>Sometimes the real transition is from short-term rehab into ongoing custodial care. That shift can be hard emotionally, especially when families were still hoping rehab coverage would continue longer.</p>
                    <p>When this is the issue, it helps to separate care-setting decisions from payment-path decisions so both conversations can move with less confusion.</p>
                  </div>
                </PosterSection>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 3: Adjacent but important questions</h2>
                <PosterSection title="We want to know whether appeal is possible" className="pt-0">
                  <div className="space-y-3">
                    <p>Appeal may be possible, and timing may matter. Families often ask about appeal because they need to understand whether coverage can continue while next steps are sorted.</p>
                    <p>Even when appeal is on the table, it helps to plan care-setting and payment contingencies in parallel so the family is not relying on only one path.</p>
                  </div>
                </PosterSection>
                <PosterSection title="We are being told to switch plans and do not know whether that matters" className="pt-0">
                  <div className="space-y-3">
                    <p>Plan type can affect authorizations, networks, and how coverage questions come up. So the advice to switch plans may matter, but it should be understood in context.</p>
                    <p>Before making a plan change, families usually benefit from clarifying what problem the switch is intended to solve, what timing applies, and how it fits with the broader care transition.</p>
                  </div>
                </PosterSection>
              </div>

              <PosterSection title="Guardrails" className="pt-0">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Do not assume Medicare ending means there is no next step.</li>
                  <li>Do not assume one phrase like plateaued or no longer skilled explains the whole situation.</li>
                  <li>Do not confuse the coverage issue with the full care plan.</li>
                  <li>Do not wait so long to clarify care setting or payor questions that confusion becomes crisis.</li>
                </ul>
              </PosterSection>

              <PosterSection title="Sorting the Transition Clearly" className="pt-0">
                <p>Families are often hearing coverage language, discharge language, care-setting questions, and payment concerns at the same time. Not every question has the same answer or timing, so the situation usually needs to be sorted in sequence.</p>
              </PosterSection>

              <PosterSection title="When Talking With Someone Helps" className="pt-0 mt-6">
                <div className="space-y-6 pt-2">
                  <p>A conversation can help clarify whether the immediate issue is coverage, discharge, long-term care, payment, or some combination.</p>
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
