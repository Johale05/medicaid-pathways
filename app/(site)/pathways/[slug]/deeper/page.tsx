import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Link from "next/link";
import { getPathway } from "@/lib/pathways";

type Props = { params: { slug: string } };

export const metadata = {
  robots: { index: false, follow: true },
};

export default function DeeperPage({ params }: Props) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();

  const backHref = `/pathways/${pathway.slug}/`;

  return (
    <div className="py-12">
      <Container>
        <div className="max-w-3xl space-y-8">
          <header className="space-y-2">
            <div className="text-sm text-slate-600">Deeper Explanation (Optional)</div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{pathway.title}</h1>
            <p className="text-slate-700">
              This page offers a deeper explanation of why this question is often complicated. It is general educational
              information only.
            </p>
            <Link href={backHref} className="text-sm hover:underline">
              Back to the short video page
            </Link>
          </header>

          <article className="space-y-4 text-slate-700">
            {pathway.layer2Body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>

          <Link href={backHref} className="text-sm hover:underline">
            Back to the short video page
          </Link>
        </div>
      </Container>
    </div>
  );
}
