import Container from "@/components/Container";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "Privacy Policy | Medicaid Pathways",
};

export default function PrivacyPage() {
  return (
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="space-y-4" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">PRIVACY POLICY</h1>
          <h2 className="text-xl font-semibold text-slate-900">How Information Is Handled</h2>
          <div className="prose prose-slate max-w-none">
            <p>
              The Hale Law Firm respects your privacy. This page explains the basic types of information Medicaid
              Pathways may receive and how that information is used.
            </p>

            <h3>Information You Choose to Provide</h3>
            <p>
              If you submit a form, request a consultation, or contact the firm through this website, we may receive the
              information you provide, such as your name, contact details, and the contents of your message.
            </p>

            <h3>Technical and Usage Information</h3>
            <p>
              Like most websites, Medicaid Pathways may collect limited technical data, such as browser type, device
              type, referring pages, and general usage patterns. This information helps us maintain site performance and
              improve educational content.
            </p>

            <h3>How Information May Be Used</h3>
            <p>Information may be used to:</p>
            <ul>
              <li>Respond to inquiries and consultation requests.</li>
              <li>Communicate about potential legal services.</li>
              <li>Improve website functionality and content clarity.</li>
              <li>Comply with legal and professional obligations.</li>
            </ul>

            <h3>Sharing of Information</h3>
            <p>
              We do not sell personal information. We may share information only in limited circumstances, such as with
              trusted service providers who help operate the website or communications systems, or when disclosure is
              required by law.
            </p>

            <h3>Cookies and Similar Technologies</h3>
            <p>
              This site may use cookies or similar tools for basic functionality and analytics. You can adjust browser
              settings to limit cookies, though some site features may not function as expected.
            </p>

            <h3>Third-Party Services</h3>
            <p>
              If this site uses third-party tools for hosting, form delivery, analytics, or communication, those
              providers may process information on our behalf subject to their own privacy and security practices.
            </p>

            <h3>Data Security and Limits</h3>
            <p>
              We use reasonable administrative and technical measures to protect information, but no method of internet
              transmission or storage is completely secure. For that reason, we cannot guarantee absolute security.
            </p>

            <h3>Policy Updates</h3>
            <p>
              This Privacy Policy may be updated from time to time. Any changes are effective when posted on this page.
            </p>

            <h3>Contact</h3>
            <p>
              For privacy questions, please contact The Hale Law Firm through the contact information provided on this
              website.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
