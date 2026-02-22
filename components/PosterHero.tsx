import Container from "@/components/Container";
import { designTokens } from "@/lib/designTokens";
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
        "--hero-image": `url('${backgroundImage}')`,
        "--hero-position-desktop": backgroundPositionDesktop,
        "--hero-position-mobile": backgroundPositionMobile,
        "--hero-size-desktop": backgroundSizeDesktop,
        "--hero-size-mobile": backgroundSizeMobile,
      }
    : {
        "--hero-image":
          "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.75), transparent 45%), linear-gradient(180deg, #f7f1e6 0%, #efe6d8 100%)",
      };

  return (
    <section className="poster-hero-bg w-full" style={backgroundStyle as CSSProperties}>
      <Container>
        <div
          className="relative z-10 mx-auto flex min-h-[56vh] max-w-3xl flex-col items-center justify-center py-20 text-center"
          style={{ color: designTokens.colors.ink }}
        >
          <div className="relative isolate">
            <div
              className="pointer-events-none absolute -inset-x-4 -inset-y-3 z-0 rounded-3xl md:-inset-x-6 md:-inset-y-4"
              style={{ backgroundColor: designTokens.colors.warmPaper, opacity: 0.55 }}
            />
            <div className="relative z-10">
              <h1 className="font-display text-balance text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "rgba(45, 41, 36, 0.88)" }}>
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
