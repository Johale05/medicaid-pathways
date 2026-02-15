import Link from "next/link";
import { allPathways } from "@/lib/pathways";

export default function PathwayNav({ currentSlug }: { currentSlug: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-slate-900">Explore Other Common Questions</h2>
      <ul className="mt-4 space-y-2">
        {allPathways.map((p) => (
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
