import Link from "next/link";
import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d8ccb7] bg-[#f4ecdf]">
      <Container>
        <div className="space-y-6 py-10 text-base text-[#4a4338]">
          <div className="space-y-1">
            <div className="text-lg font-semibold text-[#2d2924]">The Hale Law Firm</div>
            <div>417 W. Main Street</div>
            <div>Waxahachie, Texas 75165</div>
            <div>📞 (214) 446-5080</div>
            <div>Serving families throughout Texas.</div>
          </div>

          <div className="space-y-1">
            <div className="text-lg font-semibold text-[#2d2924]">Medicaid Pathways™</div>
            <div>An educational resource for families navigating long-term care and Medicaid planning.</div>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-2 bg-transparent pt-2 text-sm text-[#5a5144]">
            <span>© 2026 The Hale Law Firm</span>
            <span aria-hidden="true">|</span>
            <Link href="/sitemap/" className="hover:underline">Sitemap</Link>
            <span aria-hidden="true">|</span>
            <Link href="/about/" className="hover:underline">About The Hale Law Firm</Link>
            <span aria-hidden="true">|</span>
            <Link href="/disclaimer/" className="hover:underline">Disclaimer</Link>
            <span aria-hidden="true">|</span>
            <Link href="/privacy/" className="hover:underline">Privacy</Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms/" className="hover:underline">Terms of Use</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
