import Container from "@/components/Container";

type PosterSectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function PosterSection({ title, children, className = "" }: PosterSectionProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-stone-200/80 bg-white/90 p-7 shadow-[0_12px_38px_rgba(15,23,42,0.09)] md:p-10">
          {title ? <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2> : null}
          <div className={title ? "mt-5" : ""}>{children}</div>
        </div>
      </Container>
    </section>
  );
}
