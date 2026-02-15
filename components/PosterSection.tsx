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
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#ddd3bf] bg-[#fbf7ef]/92 p-7 shadow-[0_14px_36px_rgba(48,34,14,0.08)] md:p-10">
          {title ? <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">{title}</h2> : null}
          <div className={title ? "mt-5" : ""}>{children}</div>
        </div>
      </Container>
    </section>
  );
}
