import Container from "@/components/Container";
import { designTokens } from "@/lib/designTokens";

type PosterSectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function PosterSection({ title, children, className = "" }: PosterSectionProps) {
  return (
    <section className={`py-14 md:py-16 ${className}`}>
      <Container>
        <div
          className="mx-auto rounded-[1.5rem] border p-7 md:p-10"
          style={{
            maxWidth: designTokens.maxReadingWidth,
            backgroundColor: designTokens.colors.warmPaper,
            borderColor: designTokens.colors.subtleBorder,
            boxShadow: designTokens.shadows.softShadow,
            color: designTokens.colors.ink,
          }}
        >
          {title ? <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2> : null}
          <div className={title ? "mt-5" : ""}>{children}</div>
        </div>
      </Container>
    </section>
  );
}
