import Link from "next/link";
import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="py-10 text-sm text-slate-700 space-y-6">
          <div className="space-y-1">
            <div className="font-semibold text-slate-900">The Hale Law Firm</div>
            <div>417 W. Main Street</div>
            <div>Waxahachie, Texas 75165</div>
            <div>📞 (214) 446-5080</div>
            <div>Serving families throughout Texas.</div>
          </div>

          <div className="space-y-1">
            <div className="font-semibold text-slate-900">Medicaid Pathways™</div>
            <div>An educational resource for families navigating long-term care and Medicaid planning.</div>
          </div>

          <div className="pt-2 text-xs bg-white text-slate-600 flex flex-wrap gap-x-3 gap-y-2">
            <span>© 2026 The Hale Law Firm</span>
            <span aria-hidden="true">|</span>
            <Link href="/sitemap/" className="hover:underline">Sitemap</Link>
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
