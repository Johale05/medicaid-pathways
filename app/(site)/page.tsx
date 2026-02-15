import homepage from "@/content/homepage.json";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="py-14 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                {homepage.heroTitle}
              </h1>
              <div className="text-lg text-slate-700 space-y-2">
                <p>{homepage.heroLines[0]}</p>
                <p className="italic">{homepage.heroLines[1]}</p>
              </div>
              <p className="text-base text-slate-700">{homepage.startLine}</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-soft bg-white">
              <Image
                src="/assets/Digital_Poster_Mock-Up_Revised_Draft.png"
                alt="Medicaid Pathways visual: a calm crossroads"
                width={900}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="text-2xl font-semibold text-slate-900">Start with a question</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homepage.tiles.map((t) => (
              <Link
                key={t.slug}
                href={`/pathways/${t.slug}/`}
                className="no-underline rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:bg-slate-50 focus-visible:outline-none"
              >
                <div className="text-lg font-semibold text-slate-900">{t.title}</div>
                <div className="mt-2 text-sm text-slate-700">{t.subtitle}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">{homepage.whatIsTitle}</h2>
              <p className="text-slate-700">{homepage.whatIsBody}</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">{homepage.whoTitle}</h2>
              <p className="text-slate-700">{homepage.whoBody}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">{homepage.readyTitle}</h2>
              <p className="text-slate-700">{homepage.readyBody}</p>
              <Link
                href="/talk/"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 no-underline hover:bg-slate-50"
              >
                {homepage.ctaText}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
