import Container from "@/components/Container";

type PosterHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundPosition?: string;
};

export default function PosterHero({ title, subtitle, backgroundImage, backgroundPosition = "center" }: PosterHeroProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.58), rgba(15, 23, 42, 0.68)), url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition,
      }
    : {
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(226, 232, 240, 0.4), transparent 45%), linear-gradient(180deg, #0f172a 0%, #1e293b 42%, #334155 100%)",
      };

  return (
    <section className="w-full text-white" style={backgroundStyle}>
      <Container>
        <div className="mx-auto flex min-h-[56vh] max-w-3xl flex-col items-center justify-center py-20 text-center">
          <h1 className="font-display text-balance text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
}
