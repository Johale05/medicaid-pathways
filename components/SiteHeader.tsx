import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { allPathways } from "@/lib/pathways";

export default function SiteHeader() {
  return (
    <header className="border-b border-[#d8ccb7] bg-[#f7f1e6]">
      <Container>
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="no-underline hover:underline" aria-label="Medicaid Pathways home">
            <Image src="/assets/logo.png" alt="Medicaid Pathways" width={315} height={105} priority className="h-auto w-[240px] sm:w-[315px]" />
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-base text-[#2d2924] md:text-lg">
            <Link href="/" className="hover:underline">Home</Link>
            <div className="relative group">
              <span className="cursor-default">Pathways</span>
              <div className="invisible absolute z-10 mt-2 w-72 rounded-2xl border border-[#d8ccb7] bg-[#fdf8f1] p-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                {allPathways.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/pathways/${p.slug}/`}
                    className="block rounded-xl px-3 py-2 no-underline hover:bg-[#f7f1e6]"
                  >
                    <div className="font-medium text-[#2d2924]">{p.title}</div>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/talk/"
              className="rounded-2xl border border-[#d8ccb7] px-4 py-2 no-underline hover:bg-[#f1e7d7]"
            >
              Talk With a Medicaid Planning Attorney
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
