import Container from "@/components/Container";
import legal from "@/content/legal.json";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "Disclaimer | Medicaid Pathways",
};

export default function DisclaimerPage() {
  return (
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="space-y-4" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{legal.disclaimerTitle}</h1>
          <h2 className="text-xl font-semibold text-slate-900">{legal.disclaimerSubtitle}</h2>
          <div className="prose prose-slate max-w-none">
            {legal.disclaimerBody.split("\n").map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
