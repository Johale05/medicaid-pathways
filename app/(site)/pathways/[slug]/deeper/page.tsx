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
  "spend-everything": "",
  "too-much-income": "",
  "qualify-medically": "",
  home: "",
};

export default function DeeperPage({ params }: Props) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();

  const backHref = `/pathways/${pathway.slug}/`;
  const isMedicareEnding = pathway.slug === "medicare-ending";
  const isQualifyMedically = pathway.slug === "qualify-medically";
  const isTooMuchIncome = pathway.slug === "too-much-income";
  const isSpendEverything = pathway.slug === "spend-everything";
  const isHome = pathway.slug === "home";
  const pageTitle = isSpendEverything
    ? "What “Spend Down” Really Means"
    : isHome
      ? "What Counts as the Home — and What Still Matters Next"
      : pathway.title;

  return (
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="mx-auto space-y-10" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <header className="space-y-2">
            <h1 className="font-display text-4xl font-semibold tracking-tight leading-snug">{pageTitle}</h1>
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
            ) : isQualifyMedically ? (
              <>
                <p>
                  Families often reach this question after hearing a loved one may not qualify medically, even when
                  the day-to-day care need feels obvious.
                </p>
                <p>
                  It may arise around dementia, medication-management concerns, safety risks, functional decline, or
                  records that are too thin to show the full picture. This page helps you sort whether the central
                  issue is medical necessity, documentation, financial sequencing, or some combination.
                </p>
              </>
            ) : isHome ? (
              <>
                <p>Families often hear that the home is treated differently under Medicaid rules and feel some immediate relief.</p>
                <p>But that is usually only the beginning of the real analysis.</p>
                <p>The first question is not just whether there is a house. The first question is whether the property is actually being treated as the home for Medicaid purposes. The next question is what still needs to be decided even if it is.</p>
                <p>That is why families can get into trouble when they hear one true sentence about the home and assume every property question has already been answered.</p>
              </>
            ) : isSpendEverything ? (
              <>
                <p>“Spend down” is a phrase families hear all the time, but it often leaves out the part that matters most.</p>
                <p>When a family hears “you have to spend everything,” they may assume there is no point asking questions, no point planning, and no real way to protect what matters. That is often where avoidable mistakes begin.</p>
                <p>The better question is not simply whether assets must be spent. The better question is what assets exist, how they are owned, who is involved, what timing issues exist, and what planning options may still be available.</p>
              </>
            ) : isTooMuchIncome ? (
              <>
                <p>Families ask this question when someone says the monthly income is over the limit, a trust is mentioned, the real concern is how much must be paid to the facility each month, or there is a spouse at home and no one is sure whose income is being counted.</p>
                <p>This page helps you separate eligibility, Qualified Income Trust questions, spouse income allocation or diversion, and monthly Medicaid copayment before you assume the answer is no.</p>
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
                title={pageTitle}
                placeholderText={
                  pathway.slug === "medicare-ending"
                    ? "A short overview for this pathway will be added here. It will explain common Medicare-ending conversations and what families may want to clarify first."
                    : pathway.slug === "qualify-medically"
                      ? "A short pathway overview is coming soon. It will walk through how families can separate medical-necessity concerns, documentation gaps, and financial timing questions before major decisions are made."
                      : pathway.slug === "too-much-income"
                        ? "A short pathway overview is coming soon. It will explain what to clarify first when the issue may involve gross income, a Qualified Income Trust, spouse income allocation, or monthly Medicaid copayment."
                      : isHome
                        ? "A short pathway overview is coming soon. It will explain what a real home analysis is reviewing, what still matters even if a property is treated as the home, and why title, transfer, occupancy, and record issues should be handled carefully."
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
          ) : isHome ? (
            <div className="mx-auto space-y-8">
              <PosterSection title="What a real home analysis is actually looking at" className="pt-0">
                <div className="space-y-5">
                  <p>When a family asks what happens to the house, the answer usually depends on more than the property itself.</p>
                  <div className="space-y-4">
                    <p>A real home analysis may look at questions like:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Is this property actually the applicant’s home for Medicaid purposes?</li>
                      <li>If there is more than one property, which one is being treated as the home?</li>
                      <li>Who owns it?</li>
                      <li>How is title held?</li>
                      <li>Is the property owned by a trust?</li>
                      <li>Is a spouse still living there?</li>
                      <li>Is return-home intent part of the position being taken?</li>
                      <li>Does the record support that position?</li>
                      <li>Is there a mortgage or reverse mortgage?</li>
                      <li>Is the property vacant?</li>
                      <li>In some cases, does the value of the property create another issue?</li>
                      <li>Has anyone already sold, leased, deeded, or transferred something?</li>
                    </ul>
                  </div>
                  <p>That is why two families can both say “this is the house” and still have very different Medicaid-planning issues.</p>
                </div>
              </PosterSection>

              <PosterSection title="Why “the home may be excluded” is only part of the story" className="pt-0">
                <div className="space-y-5">
                  <p>Even when a property is treated favorably for Medicaid eligibility purposes, the analysis does not stop there.</p>
                  <div className="space-y-4">
                    <p>Families may still need to think about:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Medicaid Estate Recovery Program issues after death</li>
                      <li>whether the property should be sold</li>
                      <li>whether it can or should be leased</li>
                      <li>how it will be maintained while the owner is in care</li>
                      <li>whether probate or non-probate transfer planning matters</li>
                      <li>whether trust ownership, loan terms, or vacancy creates another layer of risk</li>
                    </ul>
                  </div>
                  <p>That is why hearing that “the home may be excluded” is helpful, but not enough by itself.</p>
                </div>
              </PosterSection>

              <PosterSection title="Why one property move can solve one problem and create another" className="pt-0">
                <div className="space-y-5">
                  <p>This is where families often get tripped up.</p>
                  <div className="space-y-3">
                    <p>A sale may solve one concern and create another.</p>
                    <p>A transfer may feel protective and still create a penalty issue.</p>
                    <p>A lease may seem practical and still affect the larger Medicaid picture.</p>
                    <p>A trust or title change may help in one respect and complicate another.</p>
                  </div>
                  <p>That does not mean families have no good options. It means property decisions should be made as part of the larger Medicaid analysis, not as isolated moves.</p>
                </div>
              </PosterSection>

              <PosterSection title="Why the facts and the record matter" className="pt-0">
                <div className="space-y-5">
                  <p>When a family is taking the position that a property is the applicant’s home, the facts and the record presented to HHSC need to support that position.</p>
                  <div className="space-y-4">
                    <p>That can involve:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>whether the person lived there while owning it</li>
                      <li>whether a spouse is still there</li>
                      <li>whether return-home intent is part of the case</li>
                      <li>how the property is described in the record</li>
                      <li>whether earlier statements or actions point in a different direction</li>
                    </ul>
                  </div>
                  <p>Families sometimes create avoidable problems when the record suggests one story but the legal position depends on another.</p>
                  <p>That is one reason the home issue should be handled carefully from the beginning.</p>
                </div>
              </PosterSection>

              <PosterSection title="Talk With a Medicaid Planning Attorney" className="pt-0 mt-6">
                <div className="space-y-6 pt-2">
                  <p>Before you sell, transfer, lease, retitle, or make major decisions about a house or other property, it helps to get a clear answer based on the actual facts.</p>
                  <p>The Hale Law Firm helps families evaluate home, title, transfer, and Medicaid-planning issues so they can avoid unnecessary mistakes and make informed decisions at the right time.</p>
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
          ) : isSpendEverything ? (
            <div className="mx-auto space-y-8">
              <PosterSection title="What a Medicaid planning conversation is actually looking at" className="pt-0">
                <div className="space-y-5">
                  <p>When a family asks whether they have to spend everything, the answer usually depends on more than the total amount of money or property involved.</p>
                  <div className="space-y-4">
                    <p>A real planning conversation may look at questions like:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>What assets are involved?</li>
                      <li>How are those assets owned?</li>
                      <li>Is the person married?</li>
                      <li>Is a spouse still living at home?</li>
                      <li>Have any assets already been transferred, gifted, or sold?</li>
                      <li>Is the issue only assets, or income too?</li>
                      <li>Has the person already entered a facility?</li>
                      <li>How urgent is the situation?</li>
                      <li>Are legal documents already in place?</li>
                    </ul>
                  </div>
                  <p>That is why two families can seem similar from the outside and still have very different planning options.</p>
                </div>
              </PosterSection>

              <PosterSection title="Why some families have more options than they think" className="pt-0">
                <div className="space-y-5">
                  <p>Families often reach this page after already hearing that Medicaid planning may not be worth exploring because the asset picture looks too large at first glance.</p>
                  <p>That is often not the right takeaway.</p>
                  <p>What matters here is spotting the facts that change the analysis: how assets are owned, whether a spouse is involved, whether income is part of the problem too, and whether earlier transfers or sales are already part of the picture.</p>
                  <p>That is why a deeper review starts with the fact pattern, not with a blanket assumption that there are no options.</p>
                </div>
              </PosterSection>

              <PosterSection title="Why the details change the answer" className="pt-0">
                <div className="space-y-5">
                  <p>This is one reason the phrase “spend down” can be so misleading.</p>
                  <p>It makes the situation sound like every family faces the same simple choice: spend assets until they are gone, then apply.</p>
                  <p>In reality, the answer may change depending on the type of asset, the family structure, what has already been done, and how soon care is needed. Even when two families have similar amounts, the legal and practical options may look very different.</p>
                  <p>For example, if someone has excess cash but still needs an irrevocable prepaid funeral plan, using funds for that purpose does not simply mean the money was wasted or lost. It may mean the asset was shifted into a different form that serves a real need and may be treated differently under the rules.</p>
                  <p>That does not mean families should start making decisions on their own. It means the right answer usually depends on facts, not assumptions.</p>
                </div>
              </PosterSection>

              <PosterSection title="Why the wrong move can shrink options" className="pt-0">
                <div className="space-y-5">
                  <p>Families often get into trouble when they act before the facts are reviewed carefully.</p>
                  <div className="space-y-4">
                    <p>That may include:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>giving money away too early</li>
                      <li>retitling assets without advice</li>
                      <li>selling or cashing out property too quickly</li>
                      <li>assuming all assets are treated the same way</li>
                      <li>relying on a solution that helped someone else in a different situation</li>
                    </ul>
                  </div>
                  <p>A step that seems sensible in one case may create problems in another. That is why families should be careful about making major financial moves before they understand how the rules apply to them.</p>
                </div>
              </PosterSection>

              <PosterSection title="How to get a clearer answer for your family" className="pt-0">
                <div className="space-y-5">
                  <p>The most helpful next step is usually not guessing. It is getting a fact-based answer.</p>
                  <p>That means looking at the actual assets, how they are owned, whether a spouse is involved, whether care has already started, whether income is part of the problem, and what decisions have already been made.</p>
                  <p>A family does not need to understand every rule before reaching out. They need to understand enough to avoid unnecessary mistakes and get clear guidance before options narrow.</p>
                </div>
              </PosterSection>

              <PosterSection title="Talk With a Medicaid Planning Attorney" className="pt-0 mt-6">
                <div className="space-y-6 pt-2">
                  <p>Before giving money away, transferring property, selling assets, or making major financial decisions, it helps to get a clear picture of what options may still be available.</p>
                  <p>The Hale Law Firm helps families understand Medicaid planning options based on the real facts of their case, so they can avoid unnecessary loss and make informed decisions at the right time.</p>
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
          ) : isTooMuchIncome ? (
            <div className="mx-auto space-y-8">
              <PosterSection title="What to Clarify First" className="pt-0">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Is the concern about eligibility, monthly copayment, or both?</li>
                  <li>What income sources are actually being counted?</li>
                  <li>Is the number being discussed gross income or net income?</li>
                  <li>Is the issue being confused with an asset problem?</li>
                  <li>Has anyone said a Qualified Income Trust is needed?</li>
                  <li>Is there a spouse at home?</li>
                  <li>Is one spouse applying, or are both spouses applying?</li>
                  <li>Is the facility talking about monthly copayment or about eligibility itself?</li>
                  <li>Are the current Texas 2026 figures being used accurately?</li>
                </ul>
              </PosterSection>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 1: Understanding the income issue</h2>
                <PosterSection title="What does “too much income” usually mean?" className="pt-0">
                  <div className="space-y-3">
                    <p>It usually means someone believes the monthly income is over an applicable Medicaid income limit or is worried that the monthly payment toward care will be too high.</p>
                    <p>Income limits matter, but “over income” is not always the end of the story. Sometimes the issue needs more careful review, including whether a Qualified Income Trust may be part of the answer.</p>
                  </div>
                </PosterSection>
                <PosterSection title="Is income different from assets for Medicaid?" className="pt-0">
                  <div className="space-y-3">
                    <p>Yes. Income and assets are separate Medicaid questions, even though families often blend them together.</p>
                    <p>A monthly income issue is different from an asset-limit problem, a spend-down issue, or a transfer question.</p>
                  </div>
                </PosterSection>
                <PosterSection title="Is Medicaid based on gross income or net income?" className="pt-0">
                  <p>For this analysis, the focus is gross income, not the take-home number after deductions.</p>
                </PosterSection>
                <PosterSection title="What counts as income and what does not?" className="pt-0">
                  <div className="space-y-3">
                    <p>Not every money-related item is treated the same way, which is one reason families should be careful before relying on a quick verbal answer.</p>
                    <p>Required minimum distributions can count as income. Rent can count as income. Interest and dividend income are treated differently, so the source and character of the money still matter.</p>
                  </div>
                </PosterSection>
                <PosterSection title="What is the 2026 income limit?" className="pt-0">
                  <div className="space-y-3">
                    <p>For Texas in 2026, the gross monthly income limit is <span className="font-medium">$2,982 for one applicant</span> and <span className="font-medium">$5,964 combined if both spouses are applying</span>.</p>
                    <p>These figures can change over time, and being over the number does not always end the case.</p>
                  </div>
                </PosterSection>
                <PosterSection title="What is a Qualified Income Trust?" className="pt-0">
                  <div className="space-y-3">
                    <p>A Qualified Income Trust is often the legal response to an over-income problem when the person is otherwise a Medicaid candidate.</p>
                    <p>It becomes relevant when the issue is that counted gross income is above the cap. It does not solve every other Medicaid issue by itself, and it should not be treated casually.</p>
                  </div>
                </PosterSection>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 2: Practical family questions</h2>
                <PosterSection title="If we are over income, does that automatically mean Medicaid is impossible?" className="pt-0">
                  <p>No, not automatically. Sometimes the issue points to a Qualified Income Trust problem or to another income-analysis question that still needs to be clarified.</p>
                </PosterSection>
                <PosterSection title="How much income can the Medicaid recipient keep?" className="pt-0">
                  <div className="space-y-3">
                    <p>The Medicaid recipient does not usually keep all income. The monthly copayment analysis often allows a personal-needs allowance and other permitted deductions.</p>
                    <p>For Texas in 2026, the personal-needs allowance is <span className="font-medium">$75 per month</span>.</p>
                  </div>
                </PosterSection>
                <PosterSection title="If there is a spouse at home, whose income is counted?" className="pt-0">
                  <div className="space-y-3">
                    <p>Medicaid generally follows the name-on-the-check rule in deciding whose income it is.</p>
                    <p>Families often assume all spousal income is automatically pooled for this part of the analysis, but that is not how it usually works.</p>
                  </div>
                </PosterSection>
                <PosterSection title="Can income be diverted to the spouse at home?" className="pt-0">
                  <div className="space-y-3">
                    <p>Yes, in some cases. If the community spouse does not already have enough gross income to reach the monthly needs allowance, some of the institutionalized spouse’s income may be diverted to her.</p>
                    <p>For Texas in 2026, that spousal monthly needs allowance is <span className="font-medium">$4,066.50 per month</span>, and diversion can reduce the Medicaid copayment dollar-for-dollar.</p>
                  </div>
                </PosterSection>
                <PosterSection title="What is the Medicaid copayment / applied income?" className="pt-0">
                  <p>It is the amount generally paid toward care each month after permitted deductions and allowances are applied. That question is separate from whether the person qualifies in the first place.</p>
                </PosterSection>
                <PosterSection title="How is the Medicaid copayment calculated?" className="pt-0">
                  <p>At a high level, the analysis starts with counted gross income, applies allowable deductions and retained amounts, and what remains is generally owed toward care.</p>
                </PosterSection>
                <PosterSection title="Can the Medicaid copayment be reduced?" className="pt-0">
                  <p>In some cases, yes. Health-insurance premiums, the personal-needs allowance, and diversion to a spouse at home may affect the result.</p>
                </PosterSection>
                <PosterSection title="Can the Medicaid copayment increase?" className="pt-0">
                  <p>Yes. It can increase if income changes or if deductions and allowances change.</p>
                </PosterSection>
                <PosterSection title="If the facility says the income is too high, is that final?" className="pt-0">
                  <div className="space-y-3">
                    <p>A facility comment may be practical and experience-based, but it is not always the final legal answer.</p>
                    <p>The issue may still require review of income type, Qualified Income Trust needs, income allocation between spouses, and monthly copayment questions.</p>
                  </div>
                </PosterSection>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 3: Process and next steps</h2>
                <PosterSection title="Do we need the Qualified Income Trust before applying?" className="pt-0">
                  <div className="space-y-3">
                    <p>Timing matters. If a Qualified Income Trust is needed, that issue should be clarified early rather than treated as an afterthought.</p>
                    <p>Families should not treat trust setup casually, because the details matter.</p>
                  </div>
                </PosterSection>
                <PosterSection title="What income problem should we clarify first?" className="pt-0">
                  <p>First separate eligibility from monthly copayment. Then separate income from assets. Then identify whether a Qualified Income Trust, income diversion, or confusion about counted income is really driving the concern.</p>
                </PosterSection>
                <PosterSection title="When does income diversion to the spouse at home matter most?" className="pt-0">
                  <p>It matters most when the institutionalized spouse’s income and the spouse’s needs at home both affect the picture. In those cases, diversion can change both the monthly copayment and the broader planning analysis.</p>
                </PosterSection>
              </div>

              <PosterSection title="Guardrails" className="pt-0">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Do not assume “over income” means no options exist.</li>
                  <li>Do not confuse income and asset issues.</li>
                  <li>Do not assume net income is the right number.</li>
                  <li>Do not assume eligibility and monthly copayment are the same question.</li>
                  <li>Do not ignore income-diversion issues if a spouse is still living at home.</li>
                </ul>
              </PosterSection>

              <PosterSection title="Closing synthesis" className="pt-0">
                <div className="space-y-3">
                  <p>Families are often dealing with income limits, trust questions, support for a spouse at home, and monthly copayment concerns all at once.</p>
                  <p>Not every rule has to be solved in one moment. Usually the real progress comes from separating the issue into the right questions before anyone concludes the family is out of options.</p>
                </div>
              </PosterSection>

              <PosterSection title="When Talking With Someone Helps" className="pt-0 mt-6">
                <div className="space-y-6 pt-2">
                  <p>A conversation can help clarify what counts as income, whether the issue is eligibility or monthly copayment, whether a Qualified Income Trust may be needed, and whether income can be diverted to support a spouse at home and reduce the copayment.</p>
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
          ) : isQualifyMedically ? (
            <div className="mx-auto space-y-8">
              <PosterSection title="What to Clarify First" className="pt-0">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Is the concern financial eligibility, medical necessity, or both?</li>
                  <li>Has anyone actually said the person does not qualify medically?</li>
                  <li>Is this a facility concern, an early assessment issue, or a formal determination?</li>
                  <li>What diagnoses and limitations are already documented?</li>
                  <li>Do the records clearly show cognitive, medication, nursing, or safety-related needs?</li>
                  <li>Has a recent physician, specialist, or facility evaluation been done?</li>
                  <li>Is another eligibility problem being mixed into this question?</li>
                  <li>Has there already been a denial or medical-necessity finding?</li>
                  <li>Are financial strategies being considered before the medical side is clear?</li>
                </ul>
              </PosterSection>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 1: Understanding the standard</h2>
                <PosterSection title="What does “qualify medically” usually mean?" className="pt-0">
                  <p>
                    It usually means whether current records and evaluations show that the person meets a formal care
                    standard for the setting being discussed.
                  </p>
                </PosterSection>
                <PosterSection title="Why is needing help not always enough?" className="pt-0">
                  <p>
                    Family burden and daily care strain are real. But formal standards usually focus on documented
                    functional limits, clinical risk, and care needs tied to specific criteria.
                  </p>
                </PosterSection>
                <PosterSection
                  title="Is this really a medical-necessity issue, or is a different eligibility problem being confused with it?"
                  className="pt-0"
                >
                  <p>
                    Sometimes the issue is medical necessity. Sometimes it is primarily financial eligibility,
                    admissions policy, or timing. Sorting that distinction early helps families avoid expensive
                    decisions in the wrong order.
                  </p>
                </PosterSection>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 2: Common practical situations</h2>
                <PosterSection title="They say he does not qualify medically" className="pt-0">
                  <p>
                    Start by clarifying who said it, in what context, and whether it was an informal screening comment
                    or a formal finding. Those are not the same thing.
                  </p>
                </PosterSection>
                <PosterSection title="He clearly needs help, so why is that not enough?" className="pt-0">
                  <p>
                    The problem is often how the need is documented, not whether the need exists. Records may need to
                    connect daily realities to the formal criteria being applied.
                  </p>
                </PosterSection>
                <PosterSection title="What if dementia is part of the issue?" className="pt-0">
                  <p>
                    Dementia can drive real supervision and safety needs, but records should clearly describe how
                    cognition affects day-to-day functioning and risk.
                  </p>
                </PosterSection>
                <PosterSection title="What if medication management is part of the issue?" className="pt-0">
                  <p>
                    Medication concerns matter most when records show ongoing risk, complexity, or nursing-related
                    needs that cannot be managed safely without support.
                  </p>
                </PosterSection>
                <PosterSection title="What if the records do not show enough?" className="pt-0">
                  <p>
                    Thin documentation can make serious needs look less clear than they are. Updated evaluations,
                    clearer daily examples, and better-organized records can change how the situation is understood.
                  </p>
                </PosterSection>
                <PosterSection title="Who is saying we do not qualify medically?" className="pt-0">
                  <p>
                    A facility screener, treating clinician, case manager, or formal reviewer may each be answering a
                    different question. The role, setting, and process stage all matter.
                  </p>
                </PosterSection>
                <PosterSection title="Should we start financial planning before medical necessity is clear?" className="pt-0">
                  <p>
                    In most cases, families benefit from clarifying the medical side first so financial planning can be
                    timed and sequenced with fewer avoidable mistakes.
                  </p>
                </PosterSection>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Group 3: Process and next steps</h2>
                <PosterSection title="Who decides whether the person qualifies medically?" className="pt-0">
                  <p>
                    Depending on the care setting and payor pathway, decision-making may involve facility assessment,
                    treating providers, managed-care review, and state-level criteria. It is often a sequence, not a
                    single yes-or-no moment.
                  </p>
                </PosterSection>
                <PosterSection title="What happens if medical necessity is denied?" className="pt-0">
                  <p>
                    A denial usually means the family should clarify the exact reason, identify what documentation may
                    be missing, and map practical next options before making major commitments.
                  </p>
                </PosterSection>
              </div>

              <PosterSection title="Guardrails" className="pt-0">
                <ul className="list-disc space-y-2 pl-6">
                  <li>Do not assume financial planning should begin before the medical side is clear.</li>
                  <li>Do not treat one informal statement as a final determination.</li>
                  <li>Do not assume current records tell the full story without careful review.</li>
                  <li>Do not assume obvious family burden automatically satisfies a formal standard.</li>
                </ul>
              </PosterSection>

              <PosterSection title="Sorting a Difficult Medical-Eligibility Conversation" className="pt-0">
                <p>
                  Many families are balancing real care burden, unclear standards, incomplete documentation, and
                  anxiety about Medicaid planning all at once.
                </p>
                <p>
                  In that setting, calm sequencing matters: clarify what standard applies, strengthen the record where
                  needed, and then make major decisions with better footing.
                </p>
              </PosterSection>

              <PosterSection title="When Talking With Someone Helps" className="pt-0 mt-6">
                <div className="space-y-6 pt-2">
                  <p>
                    A conversation can help your family clarify whether the issue is medical necessity,
                    documentation, financial sequencing, or some combination — and what to address first.
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
