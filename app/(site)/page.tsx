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
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `url('${HOMEPAGE_HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 36%",
        }}
      >
        <div className="absolute inset-0 bg-[#f7f1e6]/[0.08]" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[85vh] w-full max-w-[1200px] flex-col px-5 py-14 sm:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-balance text-4xl font-semibold tracking-tight text-[#231f1b] [text-shadow:0_2px_12px_rgba(255,255,255,0.5)] md:text-6xl">
              {homepage.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#2a251f] [text-shadow:0_1px_10px_rgba(255,255,255,0.55)] md:text-xl">
              {homepage.heroLines[0]} {homepage.heroLines[1]} {homepage.startLine}
            </p>
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
