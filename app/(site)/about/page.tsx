import Image from "next/image";
import Link from "next/link";
import PosterHero from "@/components/PosterHero";
import PosterSection from "@/components/PosterSection";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { designTokens } from "@/lib/designTokens";

export const metadata = {
  title: "About The Hale Law Firm | Medicaid Pathways",
  description:
    "Learn about The Hale Law Firm and the team behind Medicaid Pathways, supporting families through Medicaid and long-term care decisions.",
};

const ABOUT_HERO_IMAGE = "/assets/about-hero-hale-law-office.png";
const ABOUT_STORY_VIDEO_ID = "TRn02aQc3rw";

const proofItems = [
  "Opened in 2006",
  "Helped thousands of families with Medicaid",
  "Three attorneys",
  "Two elder care coordinators",
  "Medicaid case developers supporting implementation",
  "Best of Ellis County — Best Law Firm for several years",
];

const serviceBlocks = [
  {
    title: "Medicaid Planning and Eligibility Guidance",
    copy: "We help families understand how Medicaid rules apply to their circumstances and what lawful planning options may be available. In many cases, the most important step is not rushing into a financial decision before the full picture is clear.",
  },
  {
    title: "Applications, Requests, and Appeals",
    copy: "We assist with Medicaid applications, help families respond to requests for information from HHSC, and handle appeals when a case requires additional legal follow-through. Our role is to help families move through the process with more clarity and less avoidable confusion.",
  },
  {
    title: "Income Eligibility and Copayment Planning",
    copy: "Some families appear ineligible for Medicaid because income is too high, even when their resources are limited and care needs are real. We help families address these barriers through tools such as Qualified Income Trusts and, when appropriate, court orders that can help protect more income for a spouse remaining at home and reduce Medicaid copayment obligations when the law allows.",
  },
  {
    title: "Long-Term Care Crisis Coordination",
    copy: "Some families come to us before a crisis. Others come when a loved one is already in a facility or private funds are nearly exhausted. In those moments, families often need coordinated legal and planning guidance quickly, but without panic or pressure.",
  },
  {
    title: "Estate Planning and Probate Avoidance",
    copy: "We also help families plan ahead in ways that preserve their wishes while avoiding unnecessary probate when appropriate. That may include trusts, Lady Bird deeds, transfer-on-death deeds, and related planning intended to protect the family, simplify transitions, and reduce later complications.",
  },
];

const processSteps = [
  {
    title: "Initial Conversation",
    copy: "We begin by understanding the family’s situation, timing, and immediate concerns.",
  },
  {
    title: "Intake and Document Gathering",
    copy: "We help identify and collect the information needed to understand the case clearly and accurately.",
  },
  {
    title: "Attorney Review and Planning",
    copy: "Once the facts are in place, we evaluate the legal and practical issues, identify planning opportunities, and determine the best next steps.",
  },
  {
    title: "Application Preparation and Filing",
    copy: "When appropriate, we prepare and submit the Medicaid application and supporting materials.",
  },
  {
    title: "HHSC Requests and Follow-Through",
    copy: "If additional information is requested, we help families respond in an organized and timely way.",
  },
  {
    title: "Approval, Coordination, and Ongoing Planning",
    copy: "After approval, we help families understand what comes next, including facility and payment coordination, recertifications when needed, and related planning that supports the family’s longer-term goals.",
  },
];

const teamMembers = [
  { name: "John D. Hale", title: "Attorney / Founder", image: "/assets/john-d-hale.png" },
  { name: "Jacob A. Hale", title: "Attorney", image: "/assets/jacob-a-hale.png" },
  { name: "Lindsey Cantu-Hughes", title: "Attorney", image: "/assets/lindsey-cantu-hughes.png" },
  {
    name: "Debbie Jones",
    title: "Elder Care Coordinator / Licensed Social Worker",
    image: "/assets/debbie-jones.png",
  },
  { name: "Tammie Dooley", title: "Elder Care Coordinator", image: "/assets/tammie-dooley.png" },
];

export default function AboutPage() {
  return (
    <div className="poster-page-bg pb-14">
      <PosterHero
        title="About The Hale Law Firm"
        subtitle="Medicaid Pathways was created by The Hale Law Firm to help families understand long-term care and Medicaid decisions more clearly. It is an educational resource, but it is also part of a real law practice built to help families when a situation moves from confusion to action."
        backgroundImage={ABOUT_HERO_IMAGE}
        backgroundPositionDesktop="50% 35%"
        backgroundPositionMobile="50% 30%"
      />

      <PosterSection title="Why This Work Matters" className="pt-0">
        <div className="space-y-4">
          <p>
            Families usually encounter Medicaid planning at difficult moments. A parent may need nursing home care.
            Medicare coverage may be ending. Private funds may be running low. Decisions that once felt distant
            suddenly become immediate, and the consequences can affect care, finances, property, and a family’s sense
            of stability.
          </p>
          <p>
            That is why we built Medicaid Pathways. Families need a place to begin that is calm, understandable, and
            responsive to the real questions they are asking. They also need to know that, when general orientation is
            no longer enough, experienced legal help is already close at hand.
          </p>
          <p>
            At The Hale Law Firm, this work has never been just about forms, deadlines, or technical eligibility
            rules. It is about helping families understand what is happening, what options may exist, and how to move
            forward thoughtfully in situations that often feel personal and urgent.
          </p>
          {ABOUT_STORY_VIDEO_ID ? (
            <div className="pt-2">
              <YouTubeEmbed videoId={ABOUT_STORY_VIDEO_ID} title="Our Story" />
            </div>
          ) : (
            // Placeholder: drop in an "Our Story" video ID when available.
            <div className="rounded-2xl border border-[#d8ccb7] bg-white/65 p-4 text-sm text-[#5a5144]">
              Our Story video placeholder.
            </div>
          )}
        </div>
      </PosterSection>

      <PosterSection title="Experience Families Can Rely On" className="pt-0">
        <div className="space-y-5">
          <p>
            The Hale Law Firm opened in 2006 and has helped thousands of families with Medicaid matters. Our team
            includes four attorneys, two elder care coordinators, and Medicaid case developers who support families
            through both the legal and practical sides of the process.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {proofItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border px-4 py-3 text-sm md:text-base"
                style={{
                  borderColor: designTokens.colors.subtleBorder,
                  backgroundColor: "rgba(255, 255, 255, 0.56)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <p>
            Over the years, our firm has been honored for several years in Best of Ellis County as Best Law Firm. We
            are grateful for that recognition, but what matters most to us is the trust families place in us when they
            are facing decisions that feel high-stakes and deeply personal.
          </p>
          <p>
            Medicaid planning often affects more than eligibility alone. It can touch a family’s finances, timing,
            caregiving decisions, property concerns, and long-term planning. Experience matters in those moments
            because families need guidance that is steady, clear, and practical.
          </p>
        </div>
      </PosterSection>

      <PosterSection title="How We Help" className="pt-0">
        <div className="space-y-5">
          <p>
            The Hale Law Firm is not only the firm behind this educational resource. We also help families with the
            legal work that often follows once a long-term care situation becomes real.
          </p>
          <div className="space-y-5">
            {serviceBlocks.map((service) => (
              <div key={service.title} className="space-y-2">
                <h3 className="font-display text-xl font-semibold tracking-tight">{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </PosterSection>

      <PosterSection title="What the Process Usually Looks Like" className="pt-0">
        <div className="space-y-5">
          <p>
            Every family’s situation is different, but many Medicaid matters move through a recognizable process. Some
            planning steps begin early and continue alongside the case, especially when the family also needs help
            protecting the home, preserving assets, or avoiding unnecessary probate later on.
          </p>
          <ol className="list-decimal space-y-4 pl-6">
            {processSteps.map((step) => (
              <li key={step.title}>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1">{step.copy}</p>
              </li>
            ))}
          </ol>
          <p>
            Our role is not just to complete a filing. It is to help families move through a process that can otherwise
            feel fragmented, rushed, and difficult to interpret.
          </p>
        </div>
      </PosterSection>

      <PosterSection title="Meet the Team" className="pt-0">
        <div className="space-y-5">
          <p>
            The Hale Law Firm’s Medicaid and long-term care practice is supported by attorneys, elder care
            coordinators, and Medicaid case developers who help families through both the legal and practical sides of
            the process.
          </p>
          <p>
            Our elder care coordinators work with families and facilities to assist with care coordination, payor
            arrangements, and medical necessity verification. Our Medicaid case developers help clients with document
            gathering and with carrying out the planning steps developed by the attorneys.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-2xl border"
                style={{
                  borderColor: designTokens.colors.subtleBorder,
                  backgroundColor: designTokens.colors.warmPaper,
                  boxShadow: designTokens.shadows.softShadow,
                }}
              >
                <div className="relative aspect-[4/5] w-full bg-[#efe6d8]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 95vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 p-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{member.name}</h3>
                  <p className="text-sm text-[#5a5144]">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PosterSection>

      <PosterSection title="When You Need More Than Orientation" className="pt-0">
        <div className="space-y-5">
          <p>
            Medicaid Pathways is meant to help families begin with better understanding. When the time comes for legal
            guidance, application help, or coordinated planning, The Hale Law Firm is here to help you take the next
            step thoughtfully.
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
              <Link
                href="https://www.thehalelawfirm.com/"
                className="text-sm text-[#5a5144] underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Visit The Hale Law Firm website
              </Link>
            </div>
          </div>
        </div>
      </PosterSection>
    </div>
  );
}
