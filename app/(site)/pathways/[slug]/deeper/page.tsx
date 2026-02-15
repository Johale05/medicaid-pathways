import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Link from "next/link";
import { designTokens } from "@/lib/designTokens";
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
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="mx-auto space-y-8" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <header className="space-y-3">
            <div className="text-sm" style={{ color: "rgba(45, 41, 36, 0.7)" }}>Deeper Explanation (Optional)</div>
            <h1 className="font-display text-4xl font-semibold tracking-tight">{pathway.title}</h1>
            <p>
              This page offers a deeper explanation of why this question is often complicated. It is general educational
              information only.
            </p>
            <Link href={backHref} className="text-sm hover:underline">
              Back to the short video page
            </Link>
          </header>

          <article className="space-y-5 leading-relaxed">
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
