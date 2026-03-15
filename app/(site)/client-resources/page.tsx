import Link from "next/link";
import Container from "@/components/Container";
import PosterSection from "@/components/PosterSection";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "Client Resources and Next Steps | Medicaid Pathways",
  description:
    "A public orientation page explaining what often begins after first contact and how families can prepare for next steps.",
};

const processSteps = [
  {
    title: "Initial Contact and Intake",
    copy: "We begin by understanding the family’s situation, timing, and immediate concerns.",
  },
  {
    title: "Early Coordination and Preparation",
    copy: "Families may begin gathering documents, receiving guidance from the team, and using available time productively before the attorney meeting.",
  },
  {
    title: "Attorney Meeting and Planning",
    copy: "Once the key facts are in place, the legal and practical issues can be reviewed more fully and next steps can be determined.",
  },
  {
    title: "Application Preparation and Filing",
    copy: "When appropriate, the Medicaid application and supporting materials are prepared and submitted.",
  },
  {
    title: "HHSC Requests and Follow-Through",
    copy: "If additional information is requested, the case continues through organized response and follow-through.",
  },
  {
    title: "Approval, Coordination, and Ongoing Planning",
    copy: "After approval, attention may turn to coordination issues, continued planning, and related next steps.",
  },
  {
    title: "Annual Recertifications and Related Planning",
    copy: "Where needed, families may continue working through recertifications and planning as circumstances change.",
  },
];

export default function ClientResourcesPage() {
  return (
    <div className="poster-page-bg pb-14">
      <section className="pt-16 md:pt-20">
        <Container>
          <header className="mx-auto space-y-6 md:space-y-7" style={{ maxWidth: designTokens.maxReadingWidth }}>
            <h1 className="max-w-[20ch] font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Client Resources and Next Steps
            </h1>
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              A clearer way to understand what often begins after first contact.
            </p>
            <div className="space-y-4 text-[1.02rem] leading-relaxed text-slate-700 md:space-y-5">
              <p>
                This page is designed to help families understand what often begins after first contact, what the
                process may look like over time, and how this site may continue to support both public orientation and
                future client-only resources.
              </p>
              <p>Some guidance here is public. Deeper client-specific tools and materials may come later.</p>
            </div>
          </header>
        </Container>
      </section>

      <PosterSection title="What This Page Is For" className="pt-6 md:pt-8">
        <div className="space-y-4 text-[1.02rem] leading-relaxed md:space-y-5">
          <p>
            This page is meant to give families a clearer sense of what often begins before and after an attorney
            meeting. It is not case-specific legal advice, but it can help you understand the general path ahead.
          </p>
          <p>
            Some information here is public and meant to help families orient themselves. Over time, this part of the
            site may also connect to client-only resources that support deeper guidance, case-specific materials, and
            secure tools.
          </p>
        </div>
      </PosterSection>

      <PosterSection title="What Usually Begins Right Away" className="pt-0">
        <div className="space-y-6 text-[1.02rem] leading-relaxed">
          <p>
            In many situations, the process begins helping families before the attorney meeting itself. Early intake
            and coordination can help clarify urgency, reduce delay, and make better use of time while the next steps
            are being scheduled.
          </p>

          <div className="space-y-2.5">
            <h3 className="font-display text-xl font-semibold tracking-tight">Initial intake may begin gathering:</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>contact information</li>
              <li>medical situation</li>
              <li>current payor status for care</li>
              <li>location</li>
              <li>marital status</li>
              <li>family situation and decision makers</li>
              <li>basic income and asset information</li>
              <li>whether legal documents already exist</li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="font-display text-xl font-semibold tracking-tight">Early preparation may also begin:</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>document collection</li>
              <li>review of timely public educational materials</li>
              <li>coordination with an elder care coordinator when appropriate</li>
              <li>
                early orientation about medical necessity, payor status, facility considerations, and next steps
              </li>
            </ul>
          </div>

          <p>When a situation is urgent, attorney scheduling and related next steps may be expedited.</p>
        </div>
      </PosterSection>

      <PosterSection title="What the Process Usually Looks Like" className="pt-0">
        <div className="space-y-6 text-[1.02rem] leading-relaxed">
          <p>
            Every family’s situation is different, but many matters move through a recognizable set of stages. The
            process is structured, but not rigid, and some planning may begin early and continue alongside the case.
          </p>

          <ol className="list-decimal space-y-5 pl-6">
            {processSteps.map((step) => (
              <li key={step.title}>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1.5">{step.copy}</p>
              </li>
            ))}
          </ol>

          <p>
            The goal is not only to move the case forward, but to do so in a way that protects options, avoids
            unnecessary problems, and supports the family’s broader circumstances.
          </p>
        </div>
      </PosterSection>

      <PosterSection title="What Families Are Often Asked to Gather" className="pt-0">
        <div className="space-y-4 text-[1.02rem] leading-relaxed md:space-y-5">
          <p>
            Families are often asked to gather documents and information that help the full picture come into focus.
            Most people do not have everything immediately, and that is normal.
          </p>
          <p>This may include:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>identification and household information</li>
            <li>income and benefit records</li>
            <li>bank, investment, and asset information</li>
            <li>insurance, Medicare, and health coverage records</li>
            <li>facility or care-related information where relevant</li>
            <li>existing legal documents</li>
          </ul>
          <p>
            The goal is not paperwork for its own sake. It is to understand the situation clearly, prepare the case
            carefully, and gather the records HHSC will often require to verify the information in an application.
          </p>
        </div>
      </PosterSection>

      <PosterSection title="Optional Preparation Before the Attorney Meeting" className="pt-0">
        <div className="space-y-4 text-[1.02rem] leading-relaxed md:space-y-5">
          <p>
            Some families may choose to organize information in advance through a short online preparation tool or
            similar intake resource. Others may simply speak with the team by phone.
          </p>
          <p>
            Either approach can work. The goal is the same: to understand the situation clearly, use time well, and
            help the attorney meeting begin from a more informed place.
          </p>
        </div>
      </PosterSection>

      <PosterSection title="Where Planning Often Continues Alongside the Case" className="pt-0">
        <div className="space-y-6 text-[1.02rem] leading-relaxed">
          <p>
            In many matters, planning continues before, during, and after the application process. The work is often
            about more than filing. It may involve protecting important assets, avoiding preventable mistakes, and
            preparing for outcomes that are not always obvious at the beginning.
          </p>

          <div className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-display text-xl font-semibold tracking-tight">Protecting Important Assets Where Appropriate</h3>
              <p>
                This can include the home, retirement accounts, family businesses, working farms or ranches, and other
                assets that may require careful planning rather than rushed decisions.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl font-semibold tracking-tight">Addressing Difficult or Prior Transactions</h3>
              <p>
                Some situations involve gifting issues, transfer penalties, reversals, or problem assets that do not
                fit neatly into a simple application process.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl font-semibold tracking-tight">Guidance About What Not to Do</h3>
              <p>
                Families often need clear direction not only about what steps may help, but also about what actions
                could create unnecessary problems or reduce future options.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl font-semibold tracking-tight">Planning for What May Change</h3>
              <p>
                Good planning also looks ahead, including possible HHSC responses, changing care needs, and changes in
                family circumstances such as the death of a spouse remaining at home.
              </p>
            </div>
          </div>

          <p>
            The goal is to help clients find the best lawful option available under their circumstances, not force
            every family into the same path.
          </p>
        </div>
      </PosterSection>

      <PosterSection title="Public Resources Now, Secure Resources Later" className="pt-0">
        <div className="space-y-6 text-[1.02rem] leading-relaxed">
          <p>
            Some guidance on this site is meant to be public and broadly helpful. Other materials will make more sense
            as client-only resources over time.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div
              className="space-y-2 rounded-xl border p-4 md:p-5"
              style={{ borderColor: designTokens.colors.subtleBorder, backgroundColor: "rgba(255, 255, 255, 0.44)" }}
            >
              <h3 className="font-display text-xl font-semibold tracking-tight">Public resources now</h3>
              <ul className="list-disc space-y-1.5 pl-6">
                <li>Pathways and general orientation materials</li>
                <li>process overviews</li>
                <li>public planning explanations</li>
                <li>timely educational guidance</li>
                <li>possible free sample education modules</li>
              </ul>
            </div>

            <div
              className="space-y-2 rounded-xl border p-4 md:p-5"
              style={{ borderColor: designTokens.colors.subtleBorder, backgroundColor: "rgba(255, 255, 255, 0.44)" }}
            >
              <h3 className="font-display text-xl font-semibold tracking-tight">Secure resources later</h3>
              <ul className="list-disc space-y-1.5 pl-6">
                <li>client login</li>
                <li>case-specific guidance</li>
                <li>secure document tools</li>
                <li>client education modules</li>
                <li>workflow-specific materials</li>
              </ul>
            </div>
          </div>

          <p>This page is meant to help make that distinction clearer as the site continues to grow.</p>
        </div>
      </PosterSection>

      <PosterSection title="For Current Clients and Families Still Deciding" className="pt-0">
        <div className="space-y-5 text-[1.02rem] leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-display text-xl font-semibold tracking-tight">For current clients</h3>
            <p>
              Over time, this part of the site may become a more useful home for secure tools, deeper educational
              materials, and case-specific support.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl font-semibold tracking-tight">For families still deciding</h3>
            <p>
              If you are still trying to understand the issue itself, Medicaid Pathways, the{" "}
              <Link href="/about/" className="hover:underline">
                About page
              </Link>
              , and the{" "}
              <Link href="/talk/" className="hover:underline">
                Talk page
              </Link>{" "}
              may be the best places to continue.
            </p>
          </div>
        </div>
      </PosterSection>

      <PosterSection title="When You’re Ready for the Next Step" className="pt-0">
        <div className="space-y-6 text-[1.02rem] leading-relaxed">
          <p>
            This site is meant to support families before, during, and after important Medicaid-related decisions. When
            the time comes for legal guidance, coordinated planning, or a clearer next step, The Hale Law Firm is here
            to help.
          </p>

          <div className="space-y-3">
            <Link
              href="/talk/"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 no-underline"
              style={{
                backgroundColor: designTokens.colors.warmPaper,
                borderColor: designTokens.colors.subtleBorder,
                color: designTokens.colors.ink,
              }}
            >
              Talk With a Medicaid Planning Attorney
            </Link>
            <div>
              <Link href="/" className="text-sm text-[#5a5144] underline-offset-2 hover:underline">
                Explore Medicaid Pathways
              </Link>
            </div>
          </div>
        </div>
      </PosterSection>
    </div>
  );
}
