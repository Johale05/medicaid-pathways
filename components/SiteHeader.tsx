"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { allPathways } from "@/lib/pathways";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="relative z-30 border-b border-[#d8ccb7] bg-[#f5ede0]">
      <Container>
        <div className="flex items-center justify-between gap-5 py-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="inline-flex no-underline" aria-label="Medicaid Pathways home">
            <Image
              src="/assets/Medicaid Pathways Logo -- Transparent2.png"
              alt="Medicaid Pathways"
              width={420}
              height={140}
              priority
              className="h-[44px] w-auto md:h-[60px]"
            />
          </Link>

          <button
            type="button"
            className="inline-flex items-center rounded-xl border border-[#d8ccb7] px-4 py-2 text-base text-[#2d2924] md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-pathways-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <nav className="hidden flex-wrap items-center gap-5 text-lg text-[#2d2924] md:flex md:text-xl">
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

      {mobileMenuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-label="Close pathways menu"
          onClick={closeMobileMenu}
        />
      ) : null}

      <nav
        id="mobile-pathways-menu"
        className={`fixed left-0 top-0 z-50 h-[100vh] w-[80vw] max-w-sm border-r border-[#d8ccb7] bg-[#fdf8f1] p-5 transition-transform duration-200 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-[#2d2924]">Pathways</div>
          <button
            type="button"
            className="rounded-lg border border-[#d8ccb7] px-3 py-1 text-sm text-[#2d2924]"
            onClick={closeMobileMenu}
          >
            Close
          </button>
        </div>
        <div className="mt-5 space-y-2">
          {allPathways.map((p) => (
            <Link
              key={p.slug}
              href={`/pathways/${p.slug}/`}
              className="block rounded-xl px-3 py-2 no-underline hover:bg-[#f7f1e6]"
              onClick={closeMobileMenu}
            >
              <div className="font-medium text-[#2d2924]">{p.title}</div>
            </Link>
          ))}
        </div>
        <Link
          href="/talk/"
          className="mt-6 inline-flex rounded-2xl border border-[#d8ccb7] px-4 py-2 no-underline hover:bg-[#efe2ce]"
          onClick={closeMobileMenu}
        >
          Talk With a Medicaid Planning Attorney
        </Link>
      </nav>
    </header>
  );
}
