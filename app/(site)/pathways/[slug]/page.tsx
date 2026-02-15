import { notFound } from "next/navigation";
import Link from "next/link";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import PathwayNav from "@/components/PathwayNav";
import Layer2LinkBlock from "@/components/Layer2LinkBlock";
import PosterHero from "@/components/PosterHero";
import PosterSection from "@/components/PosterSection";
import { getPathway } from "@/lib/pathways";

type Props = { params: { slug: string } };

const VIDEO_IDS: Record<string, string> = {
  // TODO: Replace placeholder IDs with your real YouTube video IDs for each pathway.
  "medicare-ending": "dQw4w9WgXcQ",
  "spend-everything": "dQw4w9WgXcQ",
  "too-much-income": "dQw4w9WgXcQ",
  "qualify-medically": "dQw4w9WgXcQ",
  "sell-the-house": "dQw4w9WgXcQ",
  "too-late": "dQw4w9WgXcQ",
};

const TEMP_HERO_IMAGE = "/assets/Pathway%20Page%20Mock-Up%20(visual%20example).png";

export default function PathwayPage({ params }: Props) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();

  return (
    <div className="bg-stone-100 pb-14">
      <PosterHero title={pathway.title} subtitle={pathway.subheadline} backgroundImage={TEMP_HERO_IMAGE} />

      <PosterSection>
        <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
      </PosterSection>

      <PosterSection title="Core Concept" className="pt-0">
        <div className="space-y-3 text-slate-700">
          {pathway.core.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </PosterSection>

      <PosterSection
        title={pathway.slug === "medicare-ending" ? "Why This Is Often Confusing" : "Why This Is Often Misunderstood"}
        className="pt-0"
      >
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          {pathway.why.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </PosterSection>

      <PosterSection title="What This Means for Your Family" className="pt-0">
        <div className="space-y-3 text-slate-700">
          {pathway.means.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </PosterSection>

      <PosterSection title="When It Helps to Talk With Someone" className="pt-0">
        <div className="space-y-5">
          <p className="text-slate-700">{pathway.when}</p>
          <Link
            href="/talk/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 no-underline hover:bg-slate-50"
          >
            Talk With a Medicaid Planning Attorney
          </Link>
          <Layer2LinkBlock href={`/pathways/${pathway.slug}/deeper/`} supportingLine={pathway.supportingLine} />
        </div>
      </PosterSection>

      <section className="pt-0">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl border border-stone-200/80 bg-white/90 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.09)] md:p-10">
            <PathwayNav currentSlug={pathway.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
