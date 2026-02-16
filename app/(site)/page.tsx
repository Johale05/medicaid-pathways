import Link from "next/link";
import type { CSSProperties } from "react";
import homepage from "@/content/homepage.json";
import PlacardTile from "@/components/PlacardTile";
import PosterSection from "@/components/PosterSection";
import { designTokens } from "@/lib/designTokens";
import {
  HOMEPAGE_HERO_IMAGE,
  HOMEPAGE_HERO_POSITION_DESKTOP,
  HOMEPAGE_HERO_POSITION_MOBILE,
  HOMEPAGE_HERO_SIZE_DESKTOP,
  HOMEPAGE_HERO_SIZE_MOBILE,
} from "@/lib/heroImages";

export default function HomePage() {
  return (
    <div className="poster-page-bg">
      <section
        className="poster-hero-bg relative w-full overflow-hidden"
        style={
          {
            backgroundImage: `${designTokens.overlays.heroOverlayLight}, url('${HOMEPAGE_HERO_IMAGE}')`,
            "--hero-position-desktop": HOMEPAGE_HERO_POSITION_DESKTOP,
            "--hero-position-mobile": HOMEPAGE_HERO_POSITION_MOBILE,
            "--hero-size-desktop": HOMEPAGE_HERO_SIZE_DESKTOP,
            "--hero-size-mobile": HOMEPAGE_HERO_SIZE_MOBILE,
          } as CSSProperties
        }
      >
        <div className="mx-auto flex min-h-[82vh] w-full max-w-[1200px] flex-col px-5 py-14 sm:px-8 md:py-20" style={{ color: designTokens.colors.ink }}>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-balance text-4xl font-semibold tracking-tight md:text-6xl">{homepage.heroTitle}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "rgba(45, 41, 36, 0.88)" }}>
              {homepage.heroLines[0]} {homepage.heroLines[1]} {homepage.startLine}
            </p>
          </div>

          <div className="mt-12 hidden flex-1 items-start md:flex">
            <div className="grid w-full grid-cols-3 gap-6 px-4">
              {homepage.tiles.map((tile) => (
                <div key={tile.slug}>
                  <PlacardTile href={`/pathways/${tile.slug}/`} title={tile.title} subtitle={tile.subtitle} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:hidden">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight" style={{ color: designTokens.colors.ink }}>
            Start with a question
          </h2>
          <div className="mt-6 grid gap-4">
            {homepage.tiles.map((tile) => (
              <PlacardTile key={tile.slug} href={`/pathways/${tile.slug}/`} title={tile.title} subtitle={tile.subtitle} />
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: `linear-gradient(180deg, ${designTokens.colors.warmPaper}, ${designTokens.colors.warmPaper2})` }}>
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
