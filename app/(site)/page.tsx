import Link from "next/link";
import homepage from "@/content/homepage.json";
import PlacardTile from "@/components/PlacardTile";
import PosterSection from "@/components/PosterSection";
import { designTokens } from "@/lib/designTokens";
import { HOMEPAGE_HERO_IMAGE } from "@/lib/heroImages";

export default function HomePage() {
  return (
    <div style={{ background: "#f1e9dc" }}>
      <section
        className="relative isolate overflow-hidden bg-[center_24%] bg-cover md:bg-[center_18%] lg:bg-[center_15%]"
        style={{
          backgroundImage: `url('${HOMEPAGE_HERO_IMAGE}')`,
        }}
      >
        <div className="absolute inset-0 bg-[#f7f1e6]/[0.08]" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-[1200px] flex-col px-5 py-14 sm:px-8 md:min-h-[96vh] md:py-20">
          <div className="mx-auto mt-2 w-full max-w-4xl pt-2 text-center -translate-y-6 md:-translate-y-10 lg:-translate-y-14">
            <div className="mx-auto flex max-w-3xl items-center gap-4 md:gap-6" aria-hidden="true">
              <span className="h-px flex-1 bg-[rgba(43,43,43,0.42)]" />
              <span className="h-px flex-1 bg-[rgba(43,43,43,0.42)]" />
            </div>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-[#2b2b2b] [text-shadow:0_1px_10px_rgba(255,255,255,0.42)] md:text-6xl md:font-bold">
              <span className="whitespace-nowrap">{homepage.heroTitleLines[0]}</span>
              <br />
              <span>{homepage.heroTitleLines[1]}</span>
            </h1>
            <div className="mx-auto mt-5 flex max-w-3xl items-center gap-4 md:gap-6" aria-hidden="true">
              <span className="h-px flex-1 bg-[rgba(43,43,43,0.42)]" />
              <span className="h-px flex-1 bg-[rgba(43,43,43,0.42)]" />
            </div>
            <p className="mx-auto mt-7 max-w-2xl font-display text-lg leading-relaxed text-[#4a4a4a] [text-shadow:0_1px_10px_rgba(255,255,255,0.48)] md:text-xl">
              {homepage.heroLines[0]} <em>{homepage.heroLines[1]}</em>
            </p>
            <p className="mt-8 font-display text-lg italic text-[#454545] md:text-[1.35rem]">{homepage.startLine}</p>
          </div>

          <div className="mx-auto mt-10 w-full max-w-6xl md:mt-14">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {homepage.tiles.map((tile) => (
                <PlacardTile key={tile.slug} href={`/pathways/${tile.slug}/`} title={tile.title} subtitle={tile.subtitle} />
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
