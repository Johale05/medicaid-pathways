import Container from "@/components/Container";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "Privacy Policy | Medicaid Pathways",
};

export default function PrivacyPage() {
  return (
    <div className="py-14" style={{ backgroundColor: "#fffdfa" }}>
      <Container>
        <div className="space-y-6" style={{ maxWidth: designTokens.maxReadingWidth }}>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">PRIVACY POLICY</h1>
          <h2 className="text-xl font-semibold text-slate-900">How Information Is Handled</h2>
          <p className="text-base leading-7 text-slate-700">
            The Hale Law Firm respects your privacy. This page explains the basic types of information Medicaid
            Pathways may receive and how that information is used.
          </p>

          <div className="space-y-9 text-base leading-7 text-slate-700">
            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Information You Choose to Provide</h3>
              <p>
                If you submit a form, request a consultation, or contact the firm through this website, we may receive
                the information you provide, such as your name, contact details, and the contents of your message.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Technical and Usage Information</h3>
              <p>
                Like most websites, Medicaid Pathways may collect limited technical data, such as browser type, device
                type, referring pages, and general usage patterns.
              </p>
              <p>
                This information helps us maintain site performance and improve educational content.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">How Information May Be Used</h3>
              <p>Information may be used to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Respond to inquiries and consultation requests.</li>
                <li>Communicate about potential legal services.</li>
                <li>Improve website functionality and content clarity.</li>
                <li>Comply with legal and professional obligations.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Sharing of Information</h3>
              <p>
                We do not sell personal information. We may share information only in limited circumstances, such as
                with trusted service providers who help operate the website or communications systems, or when
                disclosure is required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Cookies and Similar Technologies</h3>
              <p>
                This site may use cookies or similar tools for basic functionality and analytics. You can adjust
                browser settings to limit cookies, though some site features may not function as expected.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Third-Party Services</h3>
              <p>
                If this site uses third-party tools for hosting, form delivery, analytics, or communication, those
                providers may process information on our behalf subject to their own privacy and security practices.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Data Security and Limits</h3>
              <p>
                We use reasonable administrative and technical measures to protect information, but no method of
                internet transmission or storage is completely secure.
              </p>
              <p>For that reason, we cannot guarantee absolute security.</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Policy Updates</h3>
              <p>
                This Privacy Policy may be updated from time to time. Any changes are effective when posted on this
                page.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
              <p>
                For privacy questions, please contact The Hale Law Firm through the contact information provided on this
                website.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
