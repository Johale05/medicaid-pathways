import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { allPathways } from "@/lib/pathways";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="no-underline hover:underline" aria-label="Medicaid Pathways home">
            <div className="flex items-center gap-3">
              <Image src="/assets/logo.png" alt="Medicaid Pathways" width={180} height={60} priority />
              <div className="text-sm text-slate-700">
                <div className="font-semibold">Medicaid Pathways™</div>
                <div>by The Hale Law Firm</div>
              </div>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <div className="relative group">
              <span className="cursor-default">Pathways</span>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute z-10 mt-2 w-72 rounded-2xl border border-slate-200 bg-white shadow-soft p-2">
                {allPathways.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/pathways/${p.slug}/`}
                    className="block rounded-xl px-3 py-2 hover:bg-slate-50 no-underline"
                  >
                    <div className="font-medium text-slate-900">{p.title}</div>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/talk/"
              className="no-underline rounded-2xl border border-slate-300 px-4 py-2 hover:bg-slate-50"
            >
              Talk With a Medicaid Planning Attorney
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
