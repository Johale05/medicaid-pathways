import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { allPathways } from "@/lib/pathways";

export default function SiteHeader() {
  return (
    <header className="border-b border-[#d8ccb7] bg-[#f5ede0]">
      <Container>
        <div className="flex flex-col gap-5 py-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="inline-flex no-underline" aria-label="Medicaid Pathways home">
            <Image
              src="/assets/logo.png"
              alt="Medicaid Pathways"
              width={420}
              height={140}
              priority
              className="h-auto w-[290px] sm:w-[360px]"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-5 text-lg text-[#2d2924] md:text-xl">
            <div className="relative group">
              <span className="cursor-default">Pathways</span>
              <div className="invisible absolute right-0 z-10 mt-2 w-72 rounded-2xl border border-[#d8ccb7] bg-[#fdf8f1] p-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
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
            <Link href="/talk/" className="rounded-2xl border border-[#d8ccb7] px-4 py-2 no-underline hover:bg-[#efe2ce]">
              Talk With a Medicaid Planning Attorney
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
