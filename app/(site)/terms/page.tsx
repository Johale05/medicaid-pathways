import Container from "@/components/Container";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "Terms of Use | Medicaid Pathways",
};

export default function TermsPage() {
  return (
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="space-y-6" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">TERMS OF USE</h1>
          <h2 className="text-xl font-semibold text-slate-900">Using This Website</h2>
          <p className="text-base leading-7 text-slate-700">
            Medicaid Pathways is provided by The Hale Law Firm as a public educational resource about Medicaid and
            long-term care planning. By using this website, you agree to these Terms of Use.
          </p>

          <div className="space-y-9 text-base leading-7 text-slate-700">
            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Informational Use Only</h3>
              <p>
                Content on this site is intended for general informational and educational use. It is not legal advice
                and should not be treated as a substitute for advice tailored to your specific facts.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">No Attorney-Client Relationship</h3>
              <p>
                Visiting this website, reading content, or sending a message through the site does not create an
                attorney-client relationship with The Hale Law Firm.
              </p>
              <p>
                An attorney-client relationship is formed only after a direct consultation and a signed written
                engagement agreement.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Accuracy and Availability</h3>
              <p>
                We work to keep information clear and useful, but Medicaid rules and long-term-care regulations can
                change quickly.
              </p>
              <p>We do not guarantee that all content is complete, current, or available at all times.</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Permitted and Prohibited Use</h3>
              <p>You may use this site for lawful personal and educational purposes. You may not:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Use the site in a way that violates any law or regulation.</li>
                <li>Attempt to disrupt, damage, or gain unauthorized access to site systems.</li>
                <li>Copy, republish, or distribute site content for commercial use without written permission.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Intellectual Property</h3>
              <p>
                Unless otherwise noted, text, graphics, and site materials are owned by The Hale Law Firm and are
                protected by applicable intellectual property laws.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Third-Party Links</h3>
              <p>
                This site may include links to third-party resources for convenience. The Hale Law Firm does not
                control those websites and is not responsible for their content, security, or privacy practices.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Updates to These Terms</h3>
              <p>
                We may update these Terms of Use from time to time. Changes take effect when posted to this page.
              </p>
              <p>Your continued use of the site means you accept the current terms.</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
              <p>
                If you have questions about these terms or need legal advice for your specific situation, please
                contact The Hale Law Firm directly.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
