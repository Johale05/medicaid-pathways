import Container from "@/components/Container";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "Terms of Use | Medicaid Pathways",
};

export default function TermsPage() {
  return (
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="space-y-4" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">TERMS OF USE</h1>
          <h2 className="text-xl font-semibold text-slate-900">Using This Website</h2>
          <div className="prose prose-slate max-w-none">
            <p>
              Medicaid Pathways is provided by The Hale Law Firm as a public educational resource about Medicaid and
              long-term care planning. By using this website, you agree to these Terms of Use.
            </p>

            <h3>Informational Use Only</h3>
            <p>
              Content on this site is intended for general informational and educational use. It is not legal advice and
              should not be treated as a substitute for advice tailored to your specific facts.
            </p>

            <h3>No Attorney-Client Relationship</h3>
            <p>
              Visiting this website, reading content, or sending a message through the site does not create an
              attorney-client relationship with The Hale Law Firm. An attorney-client relationship is formed only after
              a direct consultation and a signed written engagement agreement.
            </p>

            <h3>Accuracy and Availability</h3>
            <p>
              We work to keep information clear and useful, but Medicaid rules and long-term-care regulations can change
              quickly. We do not guarantee that all content is complete, current, or available at all times.
            </p>

            <h3>Permitted and Prohibited Use</h3>
            <p>You may use this site for lawful personal and educational purposes. You may not:</p>
            <ul>
              <li>Use the site in a way that violates any law or regulation.</li>
              <li>Attempt to disrupt, damage, or gain unauthorized access to site systems.</li>
              <li>Copy, republish, or distribute site content for commercial use without written permission.</li>
            </ul>

            <h3>Intellectual Property</h3>
            <p>
              Unless otherwise noted, text, graphics, and site materials are owned by The Hale Law Firm and are
              protected by applicable intellectual property laws.
            </p>

            <h3>Third-Party Links</h3>
            <p>
              This site may include links to third-party resources for convenience. The Hale Law Firm does not control
              those websites and is not responsible for their content, security, or privacy practices.
            </p>

            <h3>Updates to These Terms</h3>
            <p>
              We may update these Terms of Use from time to time. Changes take effect when posted to this page. Your
              continued use of the site means you accept the current terms.
            </p>

            <h3>Contact</h3>
            <p>
              If you have questions about these terms or need legal advice for your specific situation, please contact
              The Hale Law Firm directly.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
