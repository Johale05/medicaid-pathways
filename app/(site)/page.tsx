import Link from "next/link";
import homepage from "@/content/homepage.json";
import PosterHero from "@/components/PosterHero";
import PlacardTile from "@/components/PlacardTile";
import PosterSection from "@/components/PosterSection";

export default function HomePage() {
  return (
    <div className="bg-stone-100">
      <PosterHero title={homepage.heroTitle} subtitle={`${homepage.heroLines[0]} ${homepage.heroLines[1]} ${homepage.startLine}`} />

      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Start with a question</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 no-underline hover:bg-slate-50"
          >
            {homepage.ctaText}
          </Link>
        </div>
      </PosterSection>
    </div>
  );
}
