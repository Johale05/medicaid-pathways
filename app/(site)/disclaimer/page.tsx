import Container from "@/components/Container";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "Disclaimer | Medicaid Pathways",
};

export default function DisclaimerPage() {
  return (
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="space-y-4" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">DISCLAIMER</h1>
          <h2 className="text-xl font-semibold text-slate-900">Educational Information, Not Legal Advice</h2>
          <div className="prose prose-slate max-w-none">
            <p>
              Medicaid Pathways is a public educational resource created by The Hale Law Firm. Its purpose is to help
              individuals and families better understand Medicaid and long-term care planning concepts.
            </p>

            <h3>Not Legal Advice</h3>
            <p>
              Information on this website is general in nature and is not legal advice. It does not account for the full
              details of any person&apos;s circumstances, and it should not be relied on as a substitute for individualized
              legal counsel.
            </p>

            <h3>No Attorney-Client Relationship</h3>
            <p>
              Reviewing this website, downloading materials, or communicating through the site does not by itself create
              an attorney-client relationship with The Hale Law Firm. Legal representation begins only after direct
              consultation and a written engagement agreement.
            </p>

            <h3>Results Depend on Facts and Law</h3>
            <p>
              Every case is different. Outcomes depend on specific facts, documentation, timing, and applicable state and
              federal law.
            </p>

            <h3>Rules Can Change</h3>
            <p>
              Medicaid and long-term care rules, policies, and agency practices change over time. Content on this site
              may not always reflect the most recent developments.
            </p>

            <h3>Seek Advice for Your Situation</h3>
            <p>
              If you need guidance for a current planning issue or application, you should seek direct advice from a
              qualified attorney who can evaluate your specific circumstances.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
