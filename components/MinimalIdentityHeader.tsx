import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function MinimalIdentityHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="py-6 flex items-center gap-4">
          <Link href="/" aria-label="Medicaid Pathways home" className="no-underline hover:underline">
            <div className="flex items-center gap-3">
              <Image src="/assets/Medicaid Pathways Logo -- Transparent2.png" alt="Medicaid Pathways" width={180} height={60} priority />
              <div className="text-sm text-slate-700">
                <div className="font-semibold">Medicaid Pathways™</div>
                <div>by The Hale Law Firm</div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </header>
  );
}
