import { notFound } from "next/navigation";
import Container from "@/components/Container";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import PathwayNav from "@/components/PathwayNav";
import Layer2LinkBlock from "@/components/Layer2LinkBlock";
import Link from "next/link";
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

export default function PathwayPage({ params }: Props) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();

  return (
    <div className="py-12">
      <Container>
        <div className="max-w-3xl space-y-10">
          <header className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{pathway.title}</h1>
            <p className="text-lg text-slate-700">{pathway.subheadline}</p>
          </header>

          <section className="space-y-4">
            <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Core Concept</h2>
            <div className="space-y-3 text-slate-700">
              {pathway.core.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              {pathway.slug === "medicare-ending" ? "Why This Is Often Confusing" : "Why This Is Often Misunderstood"}
            </h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              {pathway.why.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">What This Means for Your Family</h2>
            <div className="space-y-3 text-slate-700">
              {pathway.means.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">When It Helps to Talk With Someone</h2>
            <p className="text-slate-700">{pathway.when}</p>
            <Link
              href="/talk/"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 no-underline hover:bg-slate-50"
            >
              Talk With a Medicaid Planning Attorney
            </Link>

            <Layer2LinkBlock href={`/pathways/${pathway.slug}/deeper/`} supportingLine={pathway.supportingLine} />
          </section>

          <PathwayNav currentSlug={pathway.slug} />
        </div>
      </Container>
    </div>
  );
}
