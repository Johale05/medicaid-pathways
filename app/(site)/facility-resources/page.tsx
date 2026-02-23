import Link from "next/link";
import Container from "@/components/Container";
import PosterHero from "@/components/PosterHero";
import PosterSection from "@/components/PosterSection";
import {
  HOMEPAGE_HERO_IMAGE,
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
        backgroundImage={HOMEPAGE_HERO_IMAGE}
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
          Clear, consistent information helps reduce confusion for families and facilities alike, especially when
          decisions must be made quickly around care and coverage.
        </p>
      </PosterSection>

      <PosterSection title="How the Main Site Is Organized" className="pt-0">
        <p>
          Pathways are organized around the most common questions families ask, so conversations can begin with the
          situation in front of them rather than legal jargon.
        </p>
      </PosterSection>

      <PosterSection title="How We Keep the Process Predictable" className="pt-0">
        <ul className="list-disc space-y-2 pl-6">
          <li>Structured review to identify the key facts and priorities first</li>
          <li>Support for retroactive coverage and appeals where appropriate</li>
          <li>Consent-based updates so communication remains clear and coordinated</li>
          <li>Coordinated team workflow across legal, planning, and facility communication</li>
        </ul>
      </PosterSection>

      <PosterSection title="Pathway Reference Poster" className="pt-0">
        <p>
          We can provide a reference poster with QR codes linked to the main pathways so families can access the right
          educational page quickly. We can also coordinate installation upon request.
        </p>
      </PosterSection>

      <PosterSection title="Current Eligibility Snapshot" className="pt-0">
        <ul className="space-y-2">
          <li>Income Cap: TBD</li>
          <li>Resource Limit (Individual): TBD</li>
          <li>Resource Limit (Couple): TBD</li>
          <li>Updated: TBD</li>
        </ul>
      </PosterSection>

      <PosterSection title="Educational Availability" className="pt-0">
        <p>
          We offer brief educational sessions for staff on common Medicaid misconceptions and general process updates.
        </p>
      </PosterSection>

      <PosterSection title="A Coordinated Team Approach" className="pt-0">
        <p>
          Our role is to support a coordinated process among families, facility teams, and legal planning so everyone
          has clearer expectations, fewer surprises, and a shared understanding of what happens next.
        </p>
      </PosterSection>
    </div>
  );
}
