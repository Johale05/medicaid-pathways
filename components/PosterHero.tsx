import Container from "@/components/Container";
import type { CSSProperties } from "react";

type PosterHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundPositionDesktop?: string;
  backgroundPositionMobile?: string;
  backgroundSizeDesktop?: string;
  backgroundSizeMobile?: string;
};

export default function PosterHero({
  title,
  subtitle,
  backgroundImage,
  backgroundPositionDesktop = "center",
  backgroundPositionMobile = "center",
  backgroundSizeDesktop = "cover",
  backgroundSizeMobile = "cover",
}: PosterHeroProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.16), rgba(15, 23, 42, 0.24)), url('${backgroundImage}')`,
        "--hero-position-desktop": backgroundPositionDesktop,
        "--hero-position-mobile": backgroundPositionMobile,
        "--hero-size-desktop": backgroundSizeDesktop,
        "--hero-size-mobile": backgroundSizeMobile,
      }
    : {
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(226, 232, 240, 0.4), transparent 45%), linear-gradient(180deg, #0f172a 0%, #1e293b 42%, #334155 100%)",
      };

  return (
    <section className="poster-hero-bg w-full text-white" style={backgroundStyle as CSSProperties}>
      <Container>
        <div className="mx-auto flex min-h-[56vh] max-w-3xl flex-col items-center justify-center py-20 text-center">
          <h1 className="font-display text-balance text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
}
