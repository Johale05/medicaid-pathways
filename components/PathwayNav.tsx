import Link from "next/link";
import { orderedPathways } from "@/lib/pathways";

export default function PathwayNav({ currentSlug }: { currentSlug: string }) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Explore Other Common Questions</h2>
      <ul className="mt-4 space-y-2">
        {orderedPathways.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/pathways/${p.slug}/`}
              className={`hover:underline ${p.slug === currentSlug ? "font-semibold" : ""}`}
              aria-current={p.slug === currentSlug ? "page" : undefined}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
