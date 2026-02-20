import Link from "next/link";
import homepage from "@/content/homepage.json";
import PlacardTile from "@/components/PlacardTile";
import PosterSection from "@/components/PosterSection";
import { designTokens } from "@/lib/designTokens";
import { HOMEPAGE_HERO_IMAGE } from "@/lib/heroImages";

export default function HomePage() {
  const tileOrder = [
    "medicare-ending",
    "qualify-medically",
    "spend-everything",
    "sell-the-house",
    "too-much-income",
    "too-late",
  ];

  const orderedTiles = tileOrder
    .map((slug) => homepage.tiles.find((tile) => tile.slug === slug))
    .filter((tile): tile is (typeof homepage.tiles)[number] => Boolean(tile));

  return (
    <div style={{ background: "#f1e9dc" }}>
      <section
        className="relative isolate bg-[center_24%] bg-cover md:overflow-hidden md:bg-[center_18%] lg:bg-[center_15%]"
        style={{
          backgroundImage: `url('${HOMEPAGE_HERO_IMAGE}')`,
        }}
      >
        <div className="absolute inset-0 bg-[#f7f1e6]/[0.08]" aria-hidden="true" />

        <div className="relative py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="w-full max-w-4xl pb-6 sm:pb-8 lg:pb-7">
              <div className="mt-2 flex w-full items-center gap-4 md:gap-6" aria-hidden="true">
                <span className="h-px flex-1 bg-[rgba(43,43,43,0.42)]" />
                <span className="h-px flex-1 bg-[rgba(43,43,43,0.42)]" />
              </div>
              <h1 className="mt-5 font-display text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#2b2b2b] [text-shadow:0_1px_10px_rgba(255,255,255,0.42)] sm:text-4xl md:text-5xl md:font-bold lg:text-6xl">
                <span className="inline-block">When Paying for Long-Term Care</span>
                <br />
                <span className="inline-block">Feels Unclear</span>
              </h1>
              <div className="mt-5 flex w-full items-center gap-4 md:gap-6" aria-hidden="true">
                <span className="h-px flex-1 bg-[rgba(43,43,43,0.42)]" />
                <span className="h-px flex-1 bg-[rgba(43,43,43,0.42)]" />
              </div>
              <p className="mt-7 max-w-2xl mx-auto font-display text-lg leading-relaxed text-[#4a4a4a] [text-shadow:0_1px_10px_rgba(255,255,255,0.48)] md:text-xl">
                {homepage.heroLines[0]} <em>{homepage.heroLines[1]}</em>
              </p>
              <p className="mt-8 font-display text-lg italic text-[#454545] md:text-[1.35rem]">{homepage.startLine}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" style={{ backgroundColor: designTokens.colors.warmPaper2 }}>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">
              Facing an urgent care situation?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4a4a4a] sm:text-lg">
              Many families discover Medicaid planning only after care has already begun. If you&apos;re navigating a discharge, placement, or sudden coverage change, there may still be options.
            </p>
            <div className="mt-7">
              <Link
                href="/pathways/too-late"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 no-underline"
                style={{
                  backgroundColor: designTokens.colors.warmPaper,
                  borderColor: designTokens.colors.subtleBorder,
                  color: designTokens.colors.ink,
                }}
              >
                See what matters right now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-6 sm:mt-8 lg:mt-5 w-full max-w-6xl">
            <div className="mb-8 text-center text-sm leading-relaxed text-[#4a4a4a] sm:mb-10 sm:text-[0.95rem]">
              Not sure where to begin? If care has already started, you may want to{" "}
              <Link href="/pathways/too-late" className="underline underline-offset-2">
                start here
              </Link>
              .
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:w-fit lg:gap-x-24 xl:gap-x-32 2xl:gap-x-40 items-stretch justify-center lg:mx-auto lg:justify-items-center">
              {orderedTiles.map((tile) => (
                <div
                  key={tile.slug}
                  className="w-full max-w-[420px] lg:max-w-[360px]"
                >
                  <PlacardTile
                    href={`/pathways/${tile.slug}/`}
                    title={tile.title}
                    subtitle={tile.subtitle}
                    className="h-full min-h-[150px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: "linear-gradient(180deg, #efe7da, #f7f1e6)" }}>
        <PosterSection title={homepage.whatIsTitle}>
          <p className="leading-relaxed">{homepage.whatIsBody}</p>
        </PosterSection>

        <PosterSection title={homepage.whoTitle} className="pt-0">
          <p className="leading-relaxed">{homepage.whoBody}</p>
        </PosterSection>

        <PosterSection title={homepage.readyTitle} className="pt-0 pb-16">
          <div className="space-y-6">
            <p className="leading-relaxed">{homepage.readyBody}</p>
            <Link
              href="/talk/"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 no-underline"
              style={{
                backgroundColor: designTokens.colors.warmPaper,
                borderColor: designTokens.colors.subtleBorder,
                color: designTokens.colors.ink,
              }}
            >
              {homepage.ctaText}
            </Link>
          </div>
        </PosterSection>
      </div>
    </div>
  );
}
