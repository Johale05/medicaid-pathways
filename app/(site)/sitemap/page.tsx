import Container from "@/components/Container";
import Link from "next/link";
import { allPathways } from "@/lib/pathways";

export const metadata = { title: "Sitemap | Medicaid Pathways" };

export default function SitemapPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Sitemap</h1>

          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/talk/" className="hover:underline">Talk With a Medicaid Planning Attorney</Link></li>
            <li>
              <span className="font-semibold">Pathways</span>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                {allPathways.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/pathways/${p.slug}/`} className="hover:underline">{p.title}</Link>{" "}
                    <span className="text-slate-600">(Deeper: <Link href={`/pathways/${p.slug}/deeper/`} className="hover:underline">optional</Link>)</span>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link href="/disclaimer/" className="hover:underline">Disclaimer</Link></li>
            <li><Link href="/privacy/" className="hover:underline">Privacy</Link></li>
            <li><Link href="/terms/" className="hover:underline">Terms of Use</Link></li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
