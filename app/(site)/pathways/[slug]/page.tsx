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
  "too-much-income": "dQw4w9WgXcQ",
  "qualify-medically": "",
  "sell-the-house": "dQw4w9WgXcQ",
};

export default function PathwayPage({ params }: Props) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();
  const talkHelp = pathway;
  const isMedicareEnding = pathway.slug === "medicare-ending";
  const isQualifyMedically = pathway.slug === "qualify-medically";

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
      {!isQualifyMedically && (
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

      {pathway.slug !== "too-late" && !isQualifyMedically && (
        <PosterSection>
          <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
        </PosterSection>
      )}

      {!isQualifyMedically && (
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

      {!isQualifyMedically && (
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
                Families are often looking at very real day-to-day needs: help with routines, medication support,
                supervision, and safety monitoring.
              </p>
              <p>
                That lived caregiving reality is important, but it does not always line up cleanly at first with how
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
                This is usually a separate question from financial eligibility. A family can be addressing asset and
                income planning while medical qualification remains unclear.
              </p>
              <p>
                In most cases, the issue is whether documented condition and care needs support a nursing-facility
                level of care under the applicable standard.
              </p>
              <p>Custodial need alone is not always enough if the required medical-necessity showing is not yet clear.</p>
            </div>
          </PosterSection>

          <PosterSection title="Why Needing Help Is Not Always the Same as Medical Necessity" className="pt-0">
            <div className="space-y-3">
              <p>
                The burden on families can be very real. Needing substantial help does not mean the concern is minor.
              </p>
              <p>
                At the same time, the formal standard may be asking a narrower question than families expect, based on
                specific clinical and functional criteria.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why the Records May Matter More Than Families Expect" className="pt-0">
            <div className="space-y-3">
              <p>
                Records do not always reflect the full picture families are living with at home or in a facility.
              </p>
              <p>
                Because of that, record review often matters more than families expect when this issue is raised.
              </p>
              <p>
                Updated evaluations, specialist input, diagnosis detail, treatment planning, and facility documentation
                may all affect how the case is viewed.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why It Matters Who Is Saying There Is a Problem" className="pt-0">
            <div className="space-y-3">
              <p>
                There is a difference between an early concern raised in conversation and a more formal determination
                made through a structured review.
              </p>
              <p>
                Identifying who raised the concern, at what stage, and on what record basis can help families respond
                more effectively.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why Sequencing Matters Before Financial Planning" className="pt-0">
            <div className="space-y-3">
              <p>Both medical and financial qualification matter.</p>
              <p>
                Major financial strategy decisions may be premature when medical necessity is still unclear.
              </p>
              <p>
                In many situations, record review and medical clarification should come first so planning decisions are
                made on firmer ground.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="What This Means for Your Family" className="pt-0">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3>Step 1: Clarify what concern is actually being raised</h3>
                <p>Confirm whether the issue is an informal concern, an active review, or a formal determination.</p>
              </div>
              <div className="space-y-3">
                <h3>Step 2: Review what the records currently show</h3>
                <p>Look at how current records describe condition, function, safety risks, and care needs.</p>
              </div>
              <div className="space-y-3">
                <h3>Step 3: Identify what still needs to be clarified before moving ahead</h3>
                <p>
                  Pinpoint missing documentation or evaluations so next decisions are based on what is known rather
                  than assumptions.
                </p>
              </div>
            </div>
          </PosterSection>

          <PosterSection title="Common Questions About Medical Qualification" className="pt-0">
            <ul className="list-disc space-y-2 pl-6">
              <li>What does qualify medically actually mean?</li>
              <li>Why is needing help not always enough?</li>
              <li>They say he does not qualify medically — what does that mean?</li>
              <li>What if dementia is part of the issue?</li>
              <li>What if medication management is part of the issue?</li>
              <li>What if the records do not show enough?</li>
              <li>Who is saying there is no medical necessity?</li>
              <li>Should we start financial planning before this is clear?</li>
              <li>What happens if medical necessity is denied?</li>
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

      {pathway.slug === "spend-everything" && (
        <PosterSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              You don’t have to spend everything.
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Medicaid planning is rarely as simple as it sounds online. The right strategy depends on timing, assets,
              income, and family goals.
            </p>
          </div>
        </PosterSection>
      )}

      <PosterSection
        title={
          pathway.slug === "spend-everything"
            ? "Before You Make a Financial Decision"
            : pathway.slug === "sell-the-house"
              ? "Before You Sell or Transfer the House"
              : pathway.slug === "too-much-income"
                ? "Before You Assume You Don’t Qualify"
                  : pathway.slug === "medicare-ending"
                    ? "When You Need Help Sorting What Changes Next"
                : pathway.slug === "qualify-medically"
                  ? "When a Conversation Helps Clarify the Next Step"
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
                      : undefined
                  }
                />
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <p>
              {pathway.slug === "spend-everything"
                ? "Decisions about spending down assets can have long-term consequences. A brief conversation can clarify your options and help you avoid steps that limit flexibility later."
                : pathway.slug === "sell-the-house"
                  ? "Selling or transferring property can permanently affect Medicaid eligibility and family finances. A short conversation can help you understand your options before taking steps that may limit flexibility later."
                  : pathway.slug === "too-much-income"
                    ? "Income limits are often misunderstood. In many situations, there are lawful strategies that allow families to move forward even when income appears too high at first glance."
                    : pathway.slug === "medicare-ending"
                      ? "A short conversation can help your family sort whether the immediate issue is coverage, discharge, long-term care, payment, or some combination — and what to clarify first before decisions feel rushed."
                    : pathway.slug === "qualify-medically"
                      ? "A short conversation can help your family sort whether the issue is medical necessity, documentation, financial sequencing, or some combination — and what to clarify first."
                  : pathway.when}
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
            <Layer2LinkBlock
              href={`/pathways/${pathway.slug}/deeper/`}
              supportingLine={pathway.supportingLine}
              linkText={
                pathway.slug === "medicare-ending"
                  ? "Choose the question that sounds closest to what your family is hearing now"
                  : pathway.slug === "qualify-medically"
                    ? "Read the deeper breakdown of these medical-qualification questions before making final planning decisions"
                  : undefined
              }
            />
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
