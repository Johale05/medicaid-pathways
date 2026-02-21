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

      {pathway.slug !== "too-late" && (
        <PosterSection>
          <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
        </PosterSection>
      )}

      <PosterSection title="Core Concept" className="pt-0">
        <div className="space-y-3">
          {pathway.core.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </PosterSection>

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
        {pathway.slug === "too-late" ? (
          <div
            className="mx-auto rounded-[1.5rem] border p-7 md:p-10"
            style={{
              maxWidth: designTokens.maxReadingWidth,
              borderColor: designTokens.colors.subtleBorder,
              backgroundColor: designTokens.colors.warmPaper,
              boxShadow: designTokens.shadows.softShadow,
            }}
          >
            <div className="space-y-8">
              {pathway.means.map((p, i) => (
                <div key={i} className="space-y-3">
                  <h3>Step {i + 1}</h3>
                  <p>{p}</p>
                </div>
              ))}
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

      {pathway.slug === "too-late" && (
        <PosterSection>
          <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
        </PosterSection>
      )}

      <PosterSection title="When It Helps to Talk With Someone" className={pathway.slug === "too-late" ? "pt-6 md:pt-8" : "pt-0"}>
        <div className="space-y-5">
          <p>{pathway.when}</p>
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
