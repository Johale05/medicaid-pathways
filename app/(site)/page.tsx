import Link from "next/link";
import type { CSSProperties } from "react";
import homepage from "@/content/homepage.json";
import PlacardTile from "@/components/PlacardTile";
import PosterSection from "@/components/PosterSection";
import {
  HOMEPAGE_HERO_IMAGE,
  HOMEPAGE_HERO_POSITION_DESKTOP,
  HOMEPAGE_HERO_POSITION_MOBILE,
  HOMEPAGE_HERO_SIZE_DESKTOP,
  HOMEPAGE_HERO_SIZE_MOBILE,
} from "@/lib/heroImages";

export default function HomePage() {
  const leftTiles = homepage.tiles.slice(0, 3);
  const rightTiles = homepage.tiles.slice(3);

  return (
    <div className="poster-page-bg">
      <section
        className="poster-hero-bg relative w-full overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.24)), url('${HOMEPAGE_HERO_IMAGE}')`,
          "--hero-position-desktop": HOMEPAGE_HERO_POSITION_DESKTOP,
          "--hero-position-mobile": HOMEPAGE_HERO_POSITION_MOBILE,
          "--hero-size-desktop": HOMEPAGE_HERO_SIZE_DESKTOP,
          "--hero-size-mobile": HOMEPAGE_HERO_SIZE_MOBILE,
        } as CSSProperties}
      >
        <div className="mx-auto flex min-h-[72vh] w-full max-w-[1200px] flex-col px-5 py-14 sm:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-balance text-4xl font-semibold tracking-tight md:text-6xl">{homepage.heroTitle}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-100 md:text-xl">
              {homepage.heroLines[0]} {homepage.heroLines[1]} {homepage.startLine}
            </p>
          </div>

          <div className="mt-10 hidden flex-1 items-center md:flex">
            <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(220px,0.75fr)_minmax(0,1fr)] gap-6">
              <div className="grid gap-4">
                {leftTiles.map((tile) => (
                  <PlacardTile key={tile.slug} href={`/pathways/${tile.slug}/`} title={tile.title} subtitle={tile.subtitle} />
                ))}
              </div>
              <div aria-hidden="true" />
              <div className="grid gap-4">
                {rightTiles.map((tile) => (
                  <PlacardTile key={tile.slug} href={`/pathways/${tile.slug}/`} title={tile.title} subtitle={tile.subtitle} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:hidden">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <h2 className="font-display text-center text-2xl font-semibold tracking-tight text-slate-900">Start with a question</h2>
          <div className="mt-6 grid gap-4">
            {homepage.tiles.map((tile) => (
              <PlacardTile key={tile.slug} href={`/pathways/${tile.slug}/`} title={tile.title} subtitle={tile.subtitle} />
            ))}
          </div>
        </div>
      </section>

      <PosterSection title={homepage.whatIsTitle}>
        <p className="text-slate-700 leading-relaxed">{homepage.whatIsBody}</p>
      </PosterSection>

      <PosterSection title={homepage.whoTitle} className="pt-0">
        <p className="text-slate-700 leading-relaxed">{homepage.whoBody}</p>
      </PosterSection>

      <PosterSection title={homepage.readyTitle} className="pt-0 pb-16">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">{homepage.readyBody}</p>
          <Link
            href="/talk/"
            className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-[#f8f3e8] px-6 py-3 no-underline hover:bg-[#f2ead8]"
          >
            {homepage.ctaText}
          </Link>
        </div>
      </PosterSection>
    </div>
  );
}
