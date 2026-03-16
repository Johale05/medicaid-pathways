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
  "medicare-ending": "dQw4w9WgXcQ",
  "spend-everything": "dQw4w9WgXcQ",
  "too-much-income": "dQw4w9WgXcQ",
  "qualify-medically": "dQw4w9WgXcQ",
  "sell-the-house": "dQw4w9WgXcQ",
  "too-late": "dQw4w9WgXcQ",
};

export default function PathwayPage({ params }: Props) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();
  const talkHelp = pathway;

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
      <PosterSection
        title={pathway.slug === "too-late" ? "What “Too Late” Usually Means" : "Core Concept"}
        className="pt-0"
      >
        <div className="space-y-3">
          {pathway.core.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </PosterSection>

      {pathway.slug !== "too-late" && (
        <PosterSection>
          <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
        </PosterSection>
      )}

      <PosterSection
        title={pathway.slug === "medicare-ending" ? "Why This Is Often Confusing" : "Why This Is Often Misunderstood"}
        className="pt-0"
      >
        <ul className="list-disc space-y-2 pl-6">
          {pathway.why.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </PosterSection>

      <PosterSection
        title="What This Means for Your Family"
        className={pathway.slug === "too-late" ? "pt-4 md:pt-6" : "pt-0"}
      >
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
        ) : (
          <div className="space-y-3">
            {pathway.means.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
      </PosterSection>

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
          <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
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
                  ? "Before Medicare Coverage Ends"
                : pathway.slug === "qualify-medically"
                  ? "Before You Move Forward Financially"
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
                      See the common crisis situations behind “too late”
                    </Link>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground md:text-base">{pathway.supportingLine}</div>
                </div>
              ) : (
                <Layer2LinkBlock href={`/pathways/${pathway.slug}/deeper/`} supportingLine={pathway.supportingLine} />
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
                      ? "As rehabilitation days run out, families often face quick decisions about next steps. Reviewing options in advance can help you plan thoughtfully rather than react under pressure."
                    : pathway.slug === "qualify-medically"
                      ? "Medical necessity is not automatic. Financial planning and medical eligibility must be aligned to avoid unintended consequences. A brief review can help ensure both sides of the process are coordinated properly."
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
            <Layer2LinkBlock href={`/pathways/${pathway.slug}/deeper/`} supportingLine={pathway.supportingLine} />
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
