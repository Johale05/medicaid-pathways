import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PosterHero from "@/components/PosterHero";
import PosterSection from "@/components/PosterSection";
import {
  HOMEPAGE_HERO_POSITION_MOBILE,
  HOMEPAGE_HERO_SIZE_DESKTOP,
  HOMEPAGE_HERO_SIZE_MOBILE,
} from "@/lib/heroImages";

export default function FacilityResourcesPage() {
  return (
    <div className="poster-page-bg pb-14">
      <PosterHero
        title="Facility Resources"
        subtitle="Supporting clearer conversations around Medicaid eligibility."
        backgroundImage="/assets/Facility_Resources_hero.png"
        backgroundPositionDesktop="center"
        backgroundPositionMobile={HOMEPAGE_HERO_POSITION_MOBILE}
        backgroundSizeDesktop={HOMEPAGE_HERO_SIZE_DESKTOP}
        backgroundSizeMobile={HOMEPAGE_HERO_SIZE_MOBILE}
      />

      <section className="pt-8">
        <Container>
          <div className="mx-auto" style={{ maxWidth: "52rem" }}>
            <p className="text-sm md:text-base">
              If you&apos;re a family member looking for guidance, start with{" "}
              <Link href="/pathways" className="hover:underline">
                Pathways
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <PosterSection title="Why This Exists" className="pt-8">
        <p>
          Families often ask Medicaid questions at moments when decisions already feel urgent. This site was created
          to explain common eligibility misunderstandings in a clear, structured way so conversations can begin with
          better information, fewer assumptions, and less confusion.
        </p>
      </PosterSection>

      <PosterSection title="How the Main Site Is Organized" className="pt-0">
        <p>
          The main site is organized around the Medicaid questions families ask most often, including whether assets
          must be spent down, whether income is too high, and whether medical eligibility is required. Each pathway is
          intended to provide orientation first, so families can better understand the issue in front of them before
          deciding what kind of help may be needed.
        </p>
      </PosterSection>

      <PosterSection title="How We Keep the Process Predictable" className="pt-0">
        <p>
          When families receive clear information early, decisions tend to become more orderly and less reactive. Our
          role is to help bring structure to situations that often feel uncertain at the outset.
        </p>
        <ul className="list-disc space-y-2 pl-6 pt-4">
          <li>Structured review to identify key facts and priorities first</li>
          <li>Support with retroactive coverage and appeals when appropriate</li>
          <li>Consent-based updates so communication remains clear and coordinated</li>
          <li>Coordinated internal workflow across legal, planning, and case support</li>
        </ul>
      </PosterSection>

      <PosterSection title="Pathway Reference Poster" className="pt-0">
        <div className="mx-auto max-w-xl pb-4">
          <Image
            src="/assets/Poster.png"
            alt="Pathway reference poster"
            width={1100}
            height={1400}
            className="mx-auto h-auto w-full max-w-md"
          />
        </div>
        <p>
          We provide a printed reference poster with QR codes linked to the main pathway questions on the site. It is
          intended to give families quick access to clear explanations when the same concerns arise repeatedly. We are
          also happy to provide and install a copy upon request.
        </p>
      </PosterSection>

      <PosterSection title="Current Eligibility Snapshot" className="pt-0">
        <p>Effective January 1, 2026</p>
        <p className="pt-2">
          For quick reference, 2025 and 2026 figures are shown side by side. Figures should be confirmed before action
          is taken.
        </p>

        <h3 className="pt-6 text-lg font-semibold">Medicaid</h3>
        <div className="pt-2 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="pb-2">Figure</th>
                <th className="pb-2">2025</th>
                <th className="pb-2">2026</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">Medicaid Single Income Cap</td>
                <td className="py-1">$2,901</td>
                <td className="py-1">$2,982</td>
              </tr>
              <tr>
                <td className="py-1">Medicaid Couple Income Cap (if both eligible)</td>
                <td className="py-1">$5,802</td>
                <td className="py-1">$5,964</td>
              </tr>
              <tr>
                <td className="py-1">Protected Resource Amount Minimum</td>
                <td className="py-1">$31,584</td>
                <td className="py-1">$32,532</td>
              </tr>
              <tr>
                <td className="py-1">Protected Resource Amount Maximum</td>
                <td className="py-1">$157,920</td>
                <td className="py-1">$162,660</td>
              </tr>
              <tr>
                <td className="py-1">Spousal Monthly Needs Allowance</td>
                <td className="py-1">$3,948</td>
                <td className="py-1">$4,066.50</td>
              </tr>
              <tr>
                <td className="py-1">Personal Needs Allowance</td>
                <td className="py-1">$75</td>
                <td className="py-1">$75</td>
              </tr>
              <tr>
                <td className="py-1">Transfer Penalty Divisor</td>
                <td className="py-1">$242.13/day</td>
                <td className="py-1">$262.37/day</td>
              </tr>
              <tr>
                <td className="py-1">Maximum Residence Value</td>
                <td className="py-1">$730,000</td>
                <td className="py-1">$752,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="pt-6 text-lg font-semibold">Medicare Quick Reference</h3>
        <div className="pt-2 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="pb-2">Figure</th>
                <th className="pb-2">2025</th>
                <th className="pb-2">2026</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">Part B Monthly Premium</td>
                <td className="py-1">$185</td>
                <td className="py-1">$202.90</td>
              </tr>
              <tr>
                <td className="py-1">Skilled Nursing Facility Copayment (per day)</td>
                <td className="py-1">$209.50</td>
                <td className="py-1">$217</td>
              </tr>
              <tr>
                <td className="py-1">Hospital Stay Deductible (first 60 days)</td>
                <td className="py-1">$1,676</td>
                <td className="py-1">$1,736</td>
              </tr>
              <tr>
                <td className="py-1">Hospital Copayment, Days 61–90 (per day)</td>
                <td className="py-1">$419</td>
                <td className="py-1">$434</td>
              </tr>
              <tr>
                <td className="py-1">Hospital Copayment, Days 91–150 (per day)</td>
                <td className="py-1">$838</td>
                <td className="py-1">$868</td>
              </tr>
              <tr>
                <td className="py-1">Part B Annual Deductible</td>
                <td className="py-1">$257</td>
                <td className="py-1">$283</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PosterSection>

      <PosterSection title="Educational Availability" className="pt-0">
        <p>
          We are available to provide brief educational sessions for staff on common Medicaid misconceptions, general
          eligibility updates, and related process questions.
        </p>
      </PosterSection>

      <PosterSection title="A Coordinated Team Approach" className="pt-0">
        <p>
          Medicaid planning often involves legal, financial, medical, and administrative questions at the same time.
          Our team works in a coordinated way to maintain clear documentation, consistent communication, and steady
          follow-through throughout the process.
        </p>
      </PosterSection>
    </div>
  );
}
