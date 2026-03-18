import { notFound } from "next/navigation";
import Link from "next/link";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import PathwayNav from "@/components/PathwayNav";
import Layer2LinkBlock from "@/components/Layer2LinkBlock";
import PosterHero from "@/components/PosterHero";
import PosterSection from "@/components/PosterSection";
import { designTokens } from "@/lib/designTokens";
import { getPathway } from "@/lib/pathways";
import {
  HOMEPAGE_HERO_POSITION_MOBILE,
  HOMEPAGE_HERO_SIZE_DESKTOP,
  HOMEPAGE_HERO_SIZE_MOBILE,
  PATHWAY_HERO_IMAGE_BY_SLUG,
  PATHWAY_HERO_POSITION_BY_SLUG,
} from "@/lib/heroImages";

type Props = { params: { slug: string } };

const VIDEO_IDS: Record<string, string> = {
  "medicare-ending": "",
  "spend-everything": "dQw4w9WgXcQ",
  "too-much-income": "",
  "qualify-medically": "",
  "sell-the-house": "dQw4w9WgXcQ",
};

export default function PathwayPage({ params }: Props) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();
  const talkHelp = pathway;
  const isMedicareEnding = pathway.slug === "medicare-ending";
  const isQualifyMedically = pathway.slug === "qualify-medically";
  const isTooMuchIncome = pathway.slug === "too-much-income";
  const isSpendEverything = pathway.slug === "spend-everything";

  const backgroundImage = PATHWAY_HERO_IMAGE_BY_SLUG[pathway.slug];
  const backgroundPositionDesktop = PATHWAY_HERO_POSITION_BY_SLUG[pathway.slug] ?? "center";

  return (
    <div className="poster-page-bg pb-14">
      <PosterHero
        title={pathway.title}
        subtitle={pathway.subheadline}
        backgroundImage={backgroundImage}
        backgroundPositionDesktop={backgroundPositionDesktop}
        backgroundPositionMobile={HOMEPAGE_HERO_POSITION_MOBILE}
        backgroundSizeDesktop={HOMEPAGE_HERO_SIZE_DESKTOP}
        backgroundSizeMobile={HOMEPAGE_HERO_SIZE_MOBILE}
      />
      {isSpendEverything && (
        <>
          <PosterSection className="pt-0">
            <div className="space-y-3">
              <p>Having substantial assets does not automatically put Medicaid planning out of reach. Families are often surprised by how much may still be protected when planning starts early and decisions are made carefully.</p>
              <p>The real question is not whether everything must be lost. The better question is whether assets can be protected, repositioned, or converted lawfully with the right planning and timing.</p>
              <p>Before you give money away, sell property, move funds, or rule yourself out too early, it helps to understand what options may actually be available.</p>
            </div>
          </PosterSection>

          <PosterSection>
            <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
          </PosterSection>
        </>
      )}

      {!isQualifyMedically && !isTooMuchIncome && !isSpendEverything && (
        <PosterSection
          title={
            pathway.slug === "too-late"
              ? "What “Too Late” Usually Means"
              : isMedicareEnding
                ? "Why Families Are Often Caught Off Guard"
                : "Core Concept"
          }
          className="pt-0"
        >
          <div className="space-y-3">
            {pathway.core.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </PosterSection>
      )}

      {pathway.slug !== "too-late" && !isQualifyMedically && !isTooMuchIncome && !isSpendEverything && (
        <PosterSection>
          <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
        </PosterSection>
      )}

      {!isQualifyMedically && !isTooMuchIncome && !isSpendEverything && (
        <PosterSection
          title={isMedicareEnding ? "What Medicare Rehab Coverage Usually Means" : "Why This Is Often Misunderstood"}
          className="pt-0"
        >
          <ul className="list-disc space-y-2 pl-6">
            {pathway.why.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </PosterSection>
      )}

      {!isQualifyMedically && !isTooMuchIncome && !isSpendEverything && (
        <PosterSection title={isMedicareEnding ? "What Changes When Medicare Ends" : "What This Means for Your Family"} className={pathway.slug === "too-late" ? "pt-4 md:pt-6" : "pt-0"}>
        {pathway.slug === "too-late" && pathway.steps ? (
          <div className="space-y-10">
            {pathway.means.length > 0 && (
              <div className="space-y-3">
                {pathway.means.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {pathway.steps.map((step, i) => (
              <div key={i} className="space-y-3">
                <h3>{step.label}</h3>
                <ul className="list-disc space-y-2 pl-6">
                  {step.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : isMedicareEnding ? (
          <div className="space-y-3">
            {pathway.means.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="space-y-2 pt-2">
              <p className="font-medium">As coverage shifts, families often move from:</p>
              <p>“Is rehab still covered?”</p>
              <p className="font-medium">to questions like:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>What care setting comes next?</li>
                <li>Can the person safely go home?</li>
                <li>Is long-term care now the issue?</li>
                <li>What payment source may matter next?</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {pathway.means.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        </PosterSection>
      )}

      {isQualifyMedically && (
        <>
          <PosterSection title="Why Families Are Often Confused by This Question" className="pt-0">
            <div className="space-y-3">
              <p>
                Families are often dealing with obvious day-to-day realities: help with routines, medication support,
                supervision, and ongoing safety concerns.
              </p>
              <p>
                Those concerns are real and urgent at home, but they do not always line up neatly at first with how
                medical qualification is formally evaluated.
              </p>
            </div>
          </PosterSection>

          <PosterSection>
            <YouTubeEmbed
              videoId={VIDEO_IDS[pathway.slug]}
              title={pathway.title}
              placeholderText="Short overview of how medical necessity questions are usually evaluated and why clarifying them early can prevent rushed financial decisions."
            />
          </PosterSection>

          <PosterSection title="What “Qualify Medically” Usually Means" className="pt-0">
            <div className="space-y-3">
              <p>
                This is usually separate from financial eligibility. A family can be working through assets and income
                while medical qualification is still unclear.
              </p>
              <p>
                In plain terms, the question is often whether documented condition and care needs support a
                nursing-facility level of care under the applicable standard.
              </p>
              <p>Custodial need by itself is not always enough if the medical-necessity showing is still incomplete.</p>
            </div>
          </PosterSection>

          <PosterSection title="Why Needing Help Is Not Always the Same as Medical Necessity" className="pt-0">
            <div className="space-y-3">
              <p>
                The burden on families can be very real. Needing substantial help never means the situation is minor.
              </p>
              <p>
                At the same time, the formal standard may be asking a narrower question than families expect, based on
                specific clinical and functional criteria.
              </p>
              <p>That gap is often where confusion starts, especially when daily care needs already feel overwhelming.</p>
            </div>
          </PosterSection>

          <PosterSection title="Why the Records May Matter More Than Families Expect" className="pt-0">
            <div className="space-y-3">
              <p>
                Records do not always reflect the full picture families are living with at home or in a facility.
              </p>
              <p>
                That is why record review often matters more than families expect when this issue is raised.
              </p>
              <p>
                Updated evaluations, specialist input, diagnosis detail, treatment planning, and facility
                documentation can materially affect how the case is viewed.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why It Matters Who Is Saying There Is a Problem" className="pt-0">
            <div className="space-y-3">
              <p>
                There is a meaningful difference between an early concern raised in conversation, a records-based
                concern raised during review, and a formal determination.
              </p>
              <p>
                Identifying who raised the issue, at what stage, and on what record basis helps families respond more
                effectively and avoid unnecessary missteps.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why Sequencing Matters Before Financial Planning" className="pt-0">
            <div className="space-y-3">
              <p>Both medical and financial qualification matter, and both deserve deliberate handling.</p>
              <p>
                Major financial strategy decisions are often premature when medical necessity is still unclear.
              </p>
              <p>
                In many situations, clarifying the records and medical position first leads to better financial
                decisions and fewer avoidable reversals.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="What This Means for Your Family" className="pt-0">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3>Step 1: Clarify what concern is actually being raised</h3>
                <p>Confirm whether the issue is an early concern, an active review point, or a formal determination.</p>
              </div>
              <div className="space-y-3">
                <h3>Step 2: Review what the records currently show</h3>
                <p>Review how the records currently describe condition, function, safety risks, and care needs.</p>
              </div>
              <div className="space-y-3">
                <h3>Step 3: Identify what still needs to be clarified before moving ahead</h3>
                <p>
                  Pinpoint missing documentation or evaluations so next decisions are based on clear facts rather than
                  assumptions.
                </p>
              </div>
            </div>
          </PosterSection>

          <PosterSection title="Common Questions About Medical Qualification" className="pt-0">
            <ul className="list-disc space-y-2 pl-6">
              <li>What does “qualify medically” usually mean in practice?</li>
              <li>Why is needing help not always enough?</li>
              <li>They say he does not qualify medically — what does that actually mean?</li>
              <li>What if dementia is part of the concern?</li>
              <li>What if medication management is part of the concern?</li>
              <li>What if the records do not show enough yet?</li>
              <li>Who is saying there is no medical necessity?</li>
              <li>Should we start financial planning before this is clear?</li>
              <li>What happens if medical necessity is denied?</li>
            </ul>
          </PosterSection>
        </>
      )}


      {isTooMuchIncome && (
        <>
          <PosterSection title="Why Families Panic When They Hear “Too Much Income”" className="pt-0">
            <div className="space-y-3">
              <p>One comment about income often sounds final, especially when a family is already under pressure to sort out care and payment decisions.</p>
              <p>Facilities may raise practical screening concerns based on experience, but families often hear those comments as permanent legal conclusions.</p>
              <p>The real issue may involve gross income, a Qualified Income Trust, spouse-at-home income allocation or diversion, monthly copayment, or some combination of those questions.</p>
            </div>
          </PosterSection>

          <PosterSection>
            <YouTubeEmbed
              videoId={VIDEO_IDS[pathway.slug]}
              title={pathway.title}
              placeholderText="A short pathway overview is coming soon. It will explain why over-income conversations often need calmer review of gross income, Qualified Income Trusts, spouse income allocation, and monthly Medicaid copayment."
            />
          </PosterSection>

          <PosterSection title="Income Is Not the Same as Assets" className="pt-0">
            <div className="space-y-3">
              <p>Income and assets are different Medicaid questions, even though families understandably blend them together.</p>
              <p>A monthly income issue is different from an asset-limit issue or a spend-down question, and the solution is not always the same.</p>
            </div>
          </PosterSection>

          <PosterSection title="What “Too Much Income” Usually Means" className="pt-0">
            <div className="space-y-3">
              <p>Income limits are real, and Medicaid looks at gross income rather than net income.</p>
              <p>For Texas in 2026, the gross monthly income limit is <span className="font-medium">$2,982 for one applicant</span> and <span className="font-medium">$5,964 combined if both spouses are applying</span>.</p>
              <p>Being over those numbers does not always end the conversation. In some situations, a Qualified Income Trust becomes part of the answer.</p>
            </div>
          </PosterSection>

          <PosterSection title="Why the Copayment Question Is Separate" className="pt-0">
            <div className="space-y-3">
              <p>Eligibility is one question. Monthly applied income, sometimes called the Medicaid copayment, is another.</p>
              <p>A person may qualify and still owe most of their income toward care after permitted deductions and allowances are applied.</p>
            </div>
          </PosterSection>

          <PosterSection title="When a Spouse at Home Changes the Income Picture" className="pt-0">
            <div className="space-y-3">
              <p>Medicaid generally follows the name-on-the-check rule to determine whose income is being counted.</p>
              <p>If the spouse at home does not already have enough gross income to reach the Texas 2026 spousal monthly needs allowance of <span className="font-medium">$4,066.50 per month</span>, some of the institutionalized spouse’s income may be diverted to her.</p>
              <p>That diversion can reduce the Medicaid copayment dollar-for-dollar, which is why the spouse-at-home question is often about both support and monthly payment.</p>
            </div>
          </PosterSection>

          <PosterSection title="What This Means for Your Family" className="pt-0">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3>Step 1: Clarify what income issue is actually being raised</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Is the concern about eligibility, monthly copayment, or both?</li>
                  <li>What income sources are being counted?</li>
                  <li>Is one spouse applying, or are both spouses applying?</li>
                  <li>Is the issue being confused with an asset problem?</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3>Step 2: Separate the income-limit question from the monthly-payment question</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Is the family actually over the income limit?</li>
                  <li>Is a Qualified Income Trust relevant?</li>
                  <li>Is the real concern the monthly copayment?</li>
                  <li>If there is a spouse at home, does income diversion matter?</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3>Step 3: Avoid assuming one income figure settles the whole case</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>One gross number does not always tell the whole story.</li>
                  <li>Qualified Income Trusts, monthly copayment, and income diversion may all matter.</li>
                  <li>Families should not panic based on one statement.</li>
                </ul>
              </div>
            </div>
          </PosterSection>

          <PosterSection title="Common Questions About Income and Medicaid" className="pt-0">
            <ul className="list-disc space-y-2 pl-6">
              <li>What counts as income and what does not?</li>
              <li>Is Medicaid based on gross income or net income?</li>
              <li>What is the 2026 income limit?</li>
              <li>What is a Qualified Income Trust?</li>
              <li>If we are over income, does that mean Medicaid is impossible?</li>
              <li>How much income can the Medicaid recipient keep?</li>
              <li>If there is a spouse at home, whose income is counted?</li>
              <li>Can income be diverted to the spouse at home?</li>
              <li>How is the Medicaid copayment calculated?</li>
              <li>Can the copayment be reduced?</li>
              <li>Can it increase?</li>
              <li>If the facility says income is too high, is that final?</li>
            </ul>
          </PosterSection>
        </>
      )}

      {isMedicareEnding && pathway.steps && (
        <PosterSection title="What This Means for Your Family" className="pt-0">
          <div className="space-y-8">
            {pathway.steps.map((step, i) => (
              <div key={i} className="space-y-3">
                <h3>{step.label}</h3>
                <ul className="list-disc space-y-2 pl-6">
                  {step.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PosterSection>
      )}

      {isMedicareEnding && (
        <PosterSection title="Common Questions When Coverage Is Changing" className="pt-0">
          <ul className="list-disc space-y-2 pl-6">
            <li>How long does Medicare usually pay for rehab?</li>
            <li>What does “not improving,” “plateaued,” “not participating,” or “no longer skilled” usually mean?</li>
            <li>What if discharge is being discussed but the person cannot come home?</li>
            <li>Does Medicare ending automatically mean Medicaid is next?</li>
            <li>Is appeal possible when coverage is ending?</li>
            <li>Does plan type matter in how this conversation unfolds?</li>
          </ul>
        </PosterSection>
      )}

      {pathway.slug === "too-late" && talkHelp.whatNotToDo && (
        <PosterSection title="What Not to Do" className="pt-0">
          <ul className="list-disc space-y-2 pl-6">
            {talkHelp.whatNotToDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PosterSection>
      )}

      {pathway.slug === "too-late" && (
        <PosterSection>
          <YouTubeEmbed
            videoId={VIDEO_IDS[pathway.slug]}
            title={pathway.title}
            placeholderText="Short overview of this situation. This video will walk through how to steady immediate care and payment decisions without panic."
          />
        </PosterSection>
      )}

      {isSpendEverything && (
        <>
          <PosterSection title="Why “spend everything” is often the wrong framework" className="pt-0">
            <div className="space-y-3">
              <p>Families often hear phrases like “you have to spend everything down” or “they will not qualify until it is all gone.”</p>
              <p>That is too simplistic.</p>
              <p>The issue is often not whether all value must disappear. The issue is whether an asset is being viewed in its current form, whether it is counted the same way as other assets, and whether lawful planning may improve the situation before applying.</p>
              <p>That is why families who assume they must simply drain accounts, sell assets, or start giving things away can make costly mistakes.</p>
            </div>
          </PosterSection>

          <PosterSection title="Families should not rule themselves out too early" className="pt-0">
            <div className="space-y-3">
              <p>Many families assume that meaningful savings, land, investment accounts, or other substantial assets automatically make Medicaid planning impossible.</p>
              <p>That is often not true.</p>
              <p>Good planning is often about understanding what can be preserved, what may need to be repositioned, and what steps may help avoid unnecessary loss. Some assets may already be treated more favorably than a family expects. In other situations, the way an asset is held, used, or prioritized may matter a great deal.</p>
              <p>The earlier a family gets clear advice, the more likely it is that avoidable loss can be prevented.</p>
            </div>
          </PosterSection>

          <PosterSection title="Preserving value is not always the same as losing value" className="pt-0">
            <div className="space-y-3">
              <p>One reason families get confused is that they hear the phrase “spend down” and assume that means money must simply vanish.</p>
              <p>That is not always what happens.</p>
              <p>Sometimes a resource may need to be changed in form rather than lost altogether. For example, if someone has excess cash but still needs an irrevocable prepaid funeral plan, using funds for that purpose does not simply mean the value disappeared. It may mean the asset was redirected into something the person legitimately needed and the rules may treat differently.</p>
              <p>That does not mean a family should start making moves without advice. It does mean that “losing everything” is often not an accurate way to think about the process.</p>
            </div>
          </PosterSection>

          <PosterSection title="Where families can accidentally lose options" className="pt-0">
            <div className="space-y-5">
              <p>Families often get into trouble when they act too quickly or rely on incomplete advice.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>giving money away without understanding the consequences</li>
                <li>moving assets based on informal advice</li>
                <li>selling or cashing out assets too quickly</li>
                <li>assuming all assets are treated the same way</li>
                <li>waiting until after avoidable decisions have already been made</li>
              </ul>
              <p>By the time a family realizes the rules are more complicated than they thought, some of their best options may already have narrowed.</p>
            </div>
          </PosterSection>

          <PosterSection title="Timing matters before financial moves are made" className="pt-0">
            <div className="space-y-5">
              <p>Earlier planning often creates more room to protect what matters and avoid unnecessary mistakes.</p>
              <p>That is especially true before a family starts:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>giving assets away</li>
                <li>retitling property</li>
                <li>cashing out accounts</li>
                <li>making major financial decisions based on assumptions instead of guidance</li>
              </ul>
              <p>Even when things feel urgent, it is usually better to pause before making financial moves and get clear advice first.</p>
            </div>
          </PosterSection>

          <PosterSection title="See how this works in real situations" className="pt-0">
            <div className="space-y-5">
              <p>Many families do not need a long legal explanation first. They need help understanding why the phrase “spend everything” is often misleading and what the process may actually look like.</p>
              <p>Our next page explains what “spend down” often means in practical terms, why losing value is not always the same as repositioning value, and why timing matters so much.</p>
              <Layer2LinkBlock
                href={`/pathways/${pathway.slug}/deeper/`}
                supportingLine={pathway.supportingLine}
                linkText="Read: What “Spend Down” Really Means"
              />
            </div>
          </PosterSection>
        </>
      )}

      <PosterSection
        title={
          isSpendEverything
            ? "Talk With a Medicaid Planning Attorney"
            : pathway.slug === "sell-the-house"
              ? "Before You Sell or Transfer the House"
              : pathway.slug === "too-much-income"
                ? "Before You Assume You Don’t Qualify"
                  : pathway.slug === "medicare-ending"
                    ? "When You Need Help Sorting What Changes Next"
                : pathway.slug === "qualify-medically"
                  ? "When a Conversation Can Help You Sort the Next Step"
                  : pathway.slug === "too-late"
                    ? "Even Urgent Situations Can Be Managed"
                  : "When It Helps to Talk With Someone"
        }
        className={pathway.slug === "too-late" ? "pt-6 md:pt-8" : "pt-0"}
      >
        {pathway.slug === "too-late" && talkHelp.talkHelpBullets ? (
          <div className="space-y-6">
            <p className="text-sm font-medium">{talkHelp.talkHelpLead}</p>
            <ul className="list-disc space-y-2 pl-6 leading-relaxed">
              {talkHelp.talkHelpBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <p>
              A quick conversation can help sort what is urgent and what is not, then coordinate practical next steps
              around care, coverage, and planning — without pressure.
            </p>
            <div className="space-y-4 pt-2">
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
              {pathway.slug === "too-late" ? (
                <div className="mt-10">
                  <div>
                    <Link href={`/pathways/${pathway.slug}/deeper/`} className="text-base font-medium hover:underline md:text-lg">
                      Choose the scenario that sounds closest to your situation
                    </Link>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground md:text-base">{pathway.supportingLine}</div>
                </div>
              ) : (
                <Layer2LinkBlock
                  href={`/pathways/${pathway.slug}/deeper/`}
                  supportingLine={pathway.supportingLine}
                  linkText={
                    pathway.slug === "medicare-ending"
                      ? "Choose the question that sounds closest to what your family is hearing now"
                      : pathway.slug === "too-much-income"
                        ? "Choose the question that sounds closest to what you are hearing now"
                        : undefined
                  }
                />
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <p>
              {isSpendEverything
                ? "Before giving assets away, moving money, selling property, or making major financial decisions, it helps to understand what options may be available under the law."
                : pathway.slug === "sell-the-house"
                  ? "Selling or transferring property can permanently affect Medicaid eligibility and family finances. A short conversation can help you understand your options before taking steps that may limit flexibility later."
                  : pathway.slug === "too-much-income"
                    ? "A conversation can help clarify what counts as income, whether the issue is eligibility or monthly copayment, whether a Qualified Income Trust may be needed, and whether income can be diverted to support a spouse at home and reduce the copayment."
                    : pathway.slug === "medicare-ending"
                      ? "A short conversation can help your family sort whether the immediate issue is coverage, discharge, long-term care, payment, or some combination — and what to clarify first before decisions feel rushed."
                    : pathway.slug === "qualify-medically"
                      ? "A short conversation can help your family sort whether the issue is medical necessity, documentation, financial sequencing, or a combination — and what to clarify first."
                  : pathway.when}
            </p>
            {isSpendEverything && (
              <p>The Hale Law Firm helps families evaluate Medicaid planning options based on their actual facts, timing, and family situation.</p>
            )}
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
            {!isSpendEverything && (
              <Layer2LinkBlock
                href={`/pathways/${pathway.slug}/deeper/`}
                supportingLine={pathway.supportingLine}
                linkText={
                  pathway.slug === "medicare-ending"
                    ? "Choose the question that sounds closest to what your family is hearing now"
                    : pathway.slug === "qualify-medically"
                      ? "Choose the question that sounds closest to what your family is hearing now, then review the deeper guidance"
                      : pathway.slug === "too-much-income"
                        ? "Choose the question that sounds closest to what you are hearing now"
                        : undefined
                }
              />
            )}
          </div>
        )}
      </PosterSection>

      <section className="pt-0">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <div
            className="mx-auto rounded-[1.5rem] border p-7 md:p-10"
            style={{
              maxWidth: designTokens.maxReadingWidth,
              borderColor: designTokens.colors.subtleBorder,
              backgroundColor: designTokens.colors.warmPaper,
              boxShadow: designTokens.shadows.softShadow,
            }}
          >
            <PathwayNav currentSlug={pathway.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
