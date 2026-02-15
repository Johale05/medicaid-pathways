import Container from "@/components/Container";
import legal from "@/content/legal.json";

export const metadata = {
  title: "Privacy Policy | Medicaid Pathways",
};

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{legal.privacyTitle}</h1>
          <h2 className="text-xl font-semibold text-slate-900">{legal.privacySubtitle}</h2>
          <div className="prose prose-slate max-w-none">
            {legal.privacyBody.split("\n").map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
