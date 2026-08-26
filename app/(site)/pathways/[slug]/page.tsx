import { notFound } from "next/navigation";
import Link from "next/link";
import NativeVideoEmbed from "@/components/NativeVideoEmbed";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import PathwayNav from "@/components/PathwayNav";
import Layer2LinkBlock from "@/components/Layer2LinkBlock";
import PosterHero from "@/components/PosterHero";
import PosterSection from "@/components/PosterSection";
import { designTokens } from "@/lib/designTokens";
import { getPathway } from "@/lib/pathways";
import {
  HOMEPAGE_HERO_POSITION_MOBILE,
  HOMEPAGE_HERO_SIZE_DESKTOP,
  HOMEPAGE_HERO_SIZE_MOBILE,
  PATHWAY_HERO_IMAGE_BY_SLUG,
  PATHWAY_HERO_POSITION_BY_SLUG,
} from "@/lib/heroImages";

type Props = { params: { slug: string } };

type RelatedPathwayLink = {
  slug: string;
  label: string;
  context: string;
};

const HOME_PATHWAY_TITLE = getPathway("home")?.title ?? "Do We Have to Sell the Home?";
const SELL_THE_HOME_VIDEO_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Medicaid_Pathways_Sell_the_Home_Final_v2.mp4";
const SELL_THE_HOME_CAPTIONS_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/medicaid-pathways-sell-the-home-youtube-timed.vtt";
const SELL_THE_HOME_POSTER_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Medicaid_Pathways_Sell_the_Home_Opening_Card_v2.png";
const SELL_THE_HOME_VIDEO_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Do We Have to Sell the Home to Qualify for Medicaid?",
  description:
    "Texas elder law attorney John D. Hale explains why a home can often be treated as an excluded resource for nursing home Medicaid eligibility, why not every property is treated the same way, and why families should understand the Medicaid and estate-recovery consequences before selling, giving away, or changing title to the home.",
  thumbnailUrl: SELL_THE_HOME_POSTER_URL,
  contentUrl: SELL_THE_HOME_VIDEO_URL,
  uploadDate: "2026-08-24",
  duration: "PT1M23S",
  url: "https://medicaidpathways.com/pathways/sell-the-home",
};
const MEDICARE_ENDING_VIDEO_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Medicaid_Pathways_Medicare_Ending_Final.mp4";
const MEDICARE_ENDING_CAPTIONS_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/medicaid-pathways-medicare-ending-youtube-timed.vtt";
const MEDICARE_ENDING_POSTER_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Medicaid_Pathways_Medicare_Ending_Opening_Card.png";
const MEDICARE_ENDING_VIDEO_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "What Happens When Medicare Ends?",
  description:
    "Texas elder law attorney John D. Hale explains what families should understand when Medicare coverage for skilled nursing or rehabilitation is ending, why the need for care may continue after Medicare stops paying, and why Medicaid may become an important option for longer-term nursing home care.",
  thumbnailUrl: MEDICARE_ENDING_POSTER_URL,
  contentUrl: MEDICARE_ENDING_VIDEO_URL,
  uploadDate: "2026-08-23",
  duration: "PT1M26S",
  url: "https://medicaidpathways.com/pathways/medicare-ending",
};
const SPEND_EVERYTHING_VIDEO_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Do%20We%20Have%20to%20Spend%20Everything%20video.mp4";
const SPEND_EVERYTHING_CAPTIONS_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/medicaid-pathways-spend-everything-captions.vtt";
const SPEND_EVERYTHING_POSTER_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Medicaid_Pathways_Opening_Card%20%28Spend%20Everything%29.png";
const SPEND_EVERYTHING_VIDEO_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Do We Have to Spend Everything to Qualify for Medicaid?",
  description:
    "Texas elder law attorney John D. Hale explains why families do not necessarily have to spend everything before qualifying for Medicaid and why understanding available planning options before moving, gifting, selling, or spending assets can matter.",
  thumbnailUrl: SPEND_EVERYTHING_POSTER_URL,
  contentUrl: SPEND_EVERYTHING_VIDEO_URL,
  uploadDate: "2026-08-22",
  duration: "PT1M2S",
  url: "https://medicaidpathways.com/pathways/spend-everything/",
};
const TOO_MUCH_INCOME_VIDEO_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Medicaid_Pathways_Too_Much_Income_Final.mp4";
const TOO_MUCH_INCOME_CAPTIONS_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/medicaid-pathways-too-much-income-youtube-timed.vtt";
const TOO_MUCH_INCOME_POSTER_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Too%20Much%20Income%20opening%20card.png";
const TOO_MUCH_INCOME_VIDEO_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "What If We Have Too Much Income for Medicaid?",
  description:
    "Texas elder law attorney John D. Hale explains why having income above the Medicaid income limit does not necessarily mean a person cannot qualify for nursing home Medicaid, including the potential role of a Qualified Income Trust and income diversion for a spouse living at home.",
  thumbnailUrl: TOO_MUCH_INCOME_POSTER_URL,
  contentUrl: TOO_MUCH_INCOME_VIDEO_URL,
  uploadDate: "2026-08-23",
  duration: "PT1M4S",
  url: "https://medicaidpathways.com/pathways/too-much-income",
};
const QUALIFY_MEDICALLY_VIDEO_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Medicaid_Pathways_Qualify_Medically_Final_v2.mp4";
const QUALIFY_MEDICALLY_CAPTIONS_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/medicaid-pathways-qualify-medically-youtube-timed.vtt";
const QUALIFY_MEDICALLY_POSTER_URL =
  "https://gl5q7lfrsujk9a5k.public.blob.vercel-storage.com/Medicaid_Pathways_Qualify_Medically_Opening_Card.png";
const QUALIFY_MEDICALLY_VIDEO_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Do We Actually Qualify Medically for Nursing Home Medicaid?",
  description:
    "Texas elder law attorney John D. Hale explains why medical qualification is a separate part of nursing home Medicaid eligibility, why it is not automatic simply because someone is elderly or needs substantial assistance, and why the underlying medical condition and supporting records matter.",
  thumbnailUrl: QUALIFY_MEDICALLY_POSTER_URL,
  contentUrl: QUALIFY_MEDICALLY_VIDEO_URL,
  uploadDate: "2026-08-26",
  duration: "PT1M32S",
  url: "https://medicaidpathways.com/pathways/qualify-medically",
};

const RELATED_PATHWAY_LINKS: Record<string, RelatedPathwayLink[]> = {
  "too-late": [
    {
      slug: "medicare-ending",
      label: "Medicare Is Ending — What Happens Next?",
      context: "If the pressure started because rehab coverage is ending or discharge is being pushed, see",
    },
  ],
  "medicare-ending": [
    {
      slug: "too-late",
      label: "Is It Too Late to Get Help?",
      context: "If coverage is ending and the bigger problem now feels urgent or time-sensitive, start with",
    },
  ],
  "too-much-income": [
    {
      slug: "spend-everything",
      label: "Do We Have to Spend Everything?",
      context: "If the bigger concern is assets rather than monthly income, see",
    },
  ],
  "spend-everything": [
    {
      slug: "too-much-income",
      label: "What If We Have Too Much Income?",
      context: "If the main issue is monthly income, a trust, or copayment instead of assets, see",
    },
    {
      slug: "home",
      label: HOME_PATHWAY_TITLE,
      context: "If the biggest concern is the house or other property, see",
    },
  ],
  "home": [
    {
      slug: "spend-everything",
      label: "Do We Have to Spend Everything?",
      context: "If the bigger question is protecting savings or other countable assets, see",
    },
  ],
  "qualify-medically": [
    {
      slug: "too-late",
      label: "Is It Too Late to Get Help?",
      context: "If the medical question is arriving during an urgent care or payment transition, start with",
    },
    {
      slug: "medicare-ending",
      label: "Medicare Is Ending — What Happens Next?",
      context: "If the issue began because rehab coverage is ending, see",
    },
  ],
};

const VIDEO_IDS: Record<string, string> = {
  "medicare-ending": "",
  "too-much-income": "",
  "qualify-medically": "",
  "home": "",
  "too-late": "",
};

export default function PathwayPage({ params }: Props) {
  const pathway = getPathway(params.slug === "sell-the-home" ? "home" : params.slug);
  if (!pathway) return notFound();
  const talkHelp = pathway;
  const isMedicareEnding = pathway.slug === "medicare-ending";
  const isQualifyMedically = pathway.slug === "qualify-medically";
  const isTooMuchIncome = pathway.slug === "too-much-income";
  const isSpendEverything = pathway.slug === "spend-everything";
  const isHome = pathway.slug === "home";

  const backgroundImage = PATHWAY_HERO_IMAGE_BY_SLUG[pathway.slug];
  const backgroundPositionDesktop = PATHWAY_HERO_POSITION_BY_SLUG[pathway.slug] ?? "center";
  const relatedPathwayLinks = RELATED_PATHWAY_LINKS[pathway.slug] ?? [];

  return (
    <div className="poster-page-bg pb-14">
      <PosterHero
        title={pathway.title}
        subtitle={pathway.subheadline}
        backgroundImage={backgroundImage}
        backgroundPositionDesktop={backgroundPositionDesktop}
        backgroundPositionMobile={HOMEPAGE_HERO_POSITION_MOBILE}
        backgroundSizeDesktop={HOMEPAGE_HERO_SIZE_DESKTOP}
        backgroundSizeMobile={HOMEPAGE_HERO_SIZE_MOBILE}
      />
      {isSpendEverything && (
        <>
          <PosterSection className="pt-0">
            <div className="space-y-3">
              <p>Having substantial assets does not automatically put Medicaid planning out of reach. Families are often surprised by how much may still be protected when planning starts early and decisions are made carefully.</p>
              <p>The real question is not whether everything must be lost. The better question is whether assets can be protected, repositioned, or converted lawfully with the right planning and timing.</p>
              <p>Before you give money away, sell property, move funds, or rule yourself out too early, it helps to understand what options may actually be available.</p>
            </div>
          </PosterSection>

          <PosterSection>
            <NativeVideoEmbed
              src={SPEND_EVERYTHING_VIDEO_URL}
              title={pathway.title}
              poster={SPEND_EVERYTHING_POSTER_URL}
              captions={{ src: SPEND_EVERYTHING_CAPTIONS_URL, srcLang: "en", label: "English" }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEND_EVERYTHING_VIDEO_STRUCTURED_DATA) }}
            />
          </PosterSection>
        </>
      )}

      {isHome && (
        <PosterSection className="pt-0">
          <div className="space-y-3">
            <p>Families often hear one true sentence — that the home may be excluded — without hearing the harder part: whether the property actually qualifies, what happens if it does not, and what issues still matter even when it does.</p>
            <p>That is why the home question is rarely answered just by hearing that a house is "exempt." The real analysis turns on what the property is, how it is being used, and what consequences may follow either way.</p>
          </div>
        </PosterSection>
      )}

      {!isQualifyMedically && !isTooMuchIncome && !isSpendEverything && (
        <PosterSection
          title={
            pathway.slug === "too-late"
              ? "What “Too Late” Usually Means"
              : isMedicareEnding
                ? "Why Families Are Often Caught Off Guard"
                : isHome
                  ? "Why “the home” and “the house” are not always the same thing"
                  : "Core Concept"
          }
          className="pt-0"
        >
          <div className="space-y-3">
            {pathway.core.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </PosterSection>
      )}

      {isMedicareEnding && (
        <PosterSection>
          <NativeVideoEmbed
            src={MEDICARE_ENDING_VIDEO_URL}
            title={pathway.title}
            poster={MEDICARE_ENDING_POSTER_URL}
            captions={{ src: MEDICARE_ENDING_CAPTIONS_URL, srcLang: "en", label: "English" }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(MEDICARE_ENDING_VIDEO_STRUCTURED_DATA) }}
          />
        </PosterSection>
      )}

      {isHome && (
        <PosterSection>
          <NativeVideoEmbed
            src={SELL_THE_HOME_VIDEO_URL}
            title={pathway.title}
            poster={SELL_THE_HOME_POSTER_URL}
            captions={{ src: SELL_THE_HOME_CAPTIONS_URL, srcLang: "en", label: "English" }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(SELL_THE_HOME_VIDEO_STRUCTURED_DATA) }}
          />
        </PosterSection>
      )}

      {pathway.slug !== "too-late" && !isMedicareEnding && !isQualifyMedically && !isTooMuchIncome && !isSpendEverything && !isHome && (
        <PosterSection>
          <YouTubeEmbed videoId={VIDEO_IDS[pathway.slug]} title={pathway.title} />
        </PosterSection>
      )}

      {isHome && (
        <>
          <PosterSection title="Why hearing “the home is exempt” does not end the analysis" className="pt-0">
            <div className="space-y-5">
              <p>Even when a property is treated favorably for Medicaid eligibility purposes, that does not answer everything the family needs to know.</p>
              <div className="space-y-3">
                <p>Families may still need to think about:</p>
                <ul className="list-disc space-y-2 pl-6">
                  {pathway.why.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <p>In other words, hearing that “the home may be excluded” does not tell the family what they should do next.</p>
            </div>
          </PosterSection>

          <PosterSection title="Where families accidentally create property problems" className="pt-0">
            <div className="space-y-5">
              <p>Families often make avoidable mistakes when they act too quickly after hearing a partial rule.</p>
              <div className="space-y-3">
                <p>Common examples include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>rushing to deed the property</li>
                  <li>rushing to sell</li>
                  <li>assuming a Lady Bird Deed or Transfer on Death Deed solves every issue</li>
                  <li>assuming a lease is neutral</li>
                  <li>assuming trust ownership makes the analysis easier</li>
                  <li>assuming one sentence from a friend, facility, or online source answers the whole question</li>
                </ul>
              </div>
              <p>What feels like a simple property move can affect Medicaid eligibility, future recovery risk, transfer issues, or the family’s flexibility later.</p>
            </div>
          </PosterSection>

          <PosterSection title="The facts and the record both matter" className="pt-0">
            <div className="space-y-3">
              <p>The home issue is not only about the property itself. It is also about whether the facts and the record presented to Medicaid support the position the family is trying to take.</p>
              <p>That may include questions about who lived there, whether a spouse still lives there, whether return-home intent is part of the analysis, how the property is titled, and what has already been said or done.</p>
              <p>Families can create problems for themselves when the property story sounds one way at home but a different way in the record presented to HHSC.</p>
              <p>That is one more reason not to rush into property decisions, title changes, or casual statements about what is going to happen next.</p>
            </div>
          </PosterSection>

          <PosterSection title="See how this analysis actually works" className="pt-0">
            <div className="space-y-5">
              <p>Most families do not just want to hear that the home issue is “complicated.” They want to understand what a real home analysis is actually looking at.</p>
              <p>Our next page explains why “the home” and “the house” are not always the same thing, what facts may change the answer, why MERP and property decisions still matter even when a property is treated favorably for eligibility, and why one move can solve one problem and create another.</p>
              <Layer2LinkBlock
                href={`/pathways/${pathway.slug}/deeper/`}
                supportingLine="Open the deeper page for the full home-analysis framework."
                linkText="Read: What Counts as the Home — and What Still Matters Next"
              />
            </div>
          </PosterSection>
        </>
      )}

      {!isHome && !isQualifyMedically && !isTooMuchIncome && !isSpendEverything && (
        <PosterSection
          title={isMedicareEnding ? "What Medicare Rehab Coverage Usually Means" : "Why This Is Often Misunderstood"}
          className="pt-0"
        >
          <ul className="list-disc space-y-2 pl-6">
            {pathway.why.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </PosterSection>
      )}

      {!isHome && !isQualifyMedically && !isTooMuchIncome && !isSpendEverything && (
        <PosterSection title={isMedicareEnding ? "What Changes When Medicare Ends" : "What This Means for Your Family"} className={pathway.slug === "too-late" ? "pt-4 md:pt-6" : "pt-0"}>
        {pathway.slug === "too-late" && pathway.steps ? (
          <div className="space-y-10">
            {pathway.means.length > 0 && (
              <div className="space-y-3">
                {pathway.means.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {pathway.steps.map((step, i) => (
              <div key={i} className="space-y-3">
                <h3>{step.label}</h3>
                <ul className="list-disc space-y-2 pl-6">
                  {step.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : isMedicareEnding ? (
          <div className="space-y-3">
            {pathway.means.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="space-y-2 pt-2">
              <p className="font-medium">As coverage shifts, families often move from:</p>
              <p>“Is rehab still covered?”</p>
              <p className="font-medium">to discharge and next-step questions that still need separate answers:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>What care setting comes next?</li>
                <li>Can the person safely go home?</li>
                <li>Is long-term care now the issue?</li>
                <li>What payment source may matter next?</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {pathway.means.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        </PosterSection>
      )}

      {isQualifyMedically && (
        <>
          <PosterSection title="Why Families Are Often Confused by This Question" className="pt-0">
            <div className="space-y-3">
              <p>
                Most families reach this page after hearing phrases like “they do not meet medical necessity” or
                “they are not qualifying for this level of care.”
              </p>
              <p>
                That language is confusing because families can still see real care needs every day: help with
                routines, mobility, medications, supervision, and safety.
              </p>
              <p>
                In many situations, that statement is tied to a specific program or coverage category at a particular
                point in time, not necessarily a final answer about longer-term care eligibility.
              </p>
            </div>
          </PosterSection>

          <PosterSection>
            <NativeVideoEmbed
              src={QUALIFY_MEDICALLY_VIDEO_URL}
              title={pathway.title}
              poster={QUALIFY_MEDICALLY_POSTER_URL}
              captions={{ src: QUALIFY_MEDICALLY_CAPTIONS_URL, srcLang: "en", label: "English" }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(QUALIFY_MEDICALLY_VIDEO_STRUCTURED_DATA) }}
            />
          </PosterSection>

          <PosterSection title="What “Qualify Medically” Usually Means" className="pt-0">
            <div className="space-y-3">
              <p>
                This is usually separate from financial eligibility. A family can be working through assets and income
                while medical qualification is still unclear.
              </p>
              <p>
                It is also not simply a question of whether someone needs help. The question is whether a medical
                condition is causing enough impairment to require ongoing assistance or supervision under the
                applicable standard.
              </p>
              <p>
                Two people may both need help with daily activities, but the evaluation usually looks at the
                underlying condition, how that condition affects functioning, and whether the resulting impairment
                meets the required standard.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Medicare vs. Medicaid: Different Medical Standards" className="pt-0">
            <div className="space-y-3">
              <p>
                “Medical necessity” can mean different things depending on which program is being discussed.
              </p>
              <p>
                Medicare generally asks whether the person needs daily skilled nursing or therapy services that must
                be provided or supervised by licensed professionals.
              </p>
              <p>
                Medicaid long-term care generally asks whether a medical condition is causing enough functional
                impairment that the person cannot safely function without ongoing assistance or supervision because of
                that condition.
              </p>
              <p>
                Because those standards are different, someone may no longer meet Medicare’s skilled-coverage standard
                but still meet the medical criteria for long-term care under Medicaid.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why Needing Help Is Not Always the Same as Medical Necessity" className="pt-0">
            <div className="space-y-3">
              <p>
                Families understandably focus on the daily tasks that now require help: bathing, dressing, mobility,
                and supervision.
              </p>
              <p>
                The review, however, usually looks deeper at why that help is needed and what condition is driving the
                safety and functioning concerns.
              </p>
              <p>
                For example, the key issue may be supervision tied to cognitive decline, hands-on support tied to a
                physical or neurological condition, or additional support related to vision loss or another impairment.
                The underlying condition and its impact on safety and functioning are what usually matter most.
              </p>
              <p>
                Sometimes this same question comes up while discharge planning is also being discussed, especially when
                Medicare coverage is ending. That pressure is real, but it is not always the same as a final long-term
                care eligibility determination.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why the Records May Matter More Than Families Expect" className="pt-0">
            <div className="space-y-3">
              <p>
                Records do not always reflect the full picture families are living with at home or in a facility.
              </p>
              <p>
                That is why record review often matters more than families expect when this issue is raised.
              </p>
              <p>
                Updated evaluations, clearer diagnosis detail, specialist input, treatment planning, and facility
                documentation can materially affect how the case is viewed.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why It Matters Who Is Saying There Is a Problem" className="pt-0">
            <div className="space-y-3">
              <p>
                There is a meaningful difference between an early concern raised in conversation, a records-based
                concern raised during review, and a formal determination.
              </p>
              <p>
                Families should not assume those three stages mean the same thing. Identifying who raised the issue,
                when, and on what record basis helps families respond more effectively and avoid unnecessary missteps.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="Why Sequencing Matters Before Financial Planning" className="pt-0">
            <div className="space-y-3">
              <p>Both medical and financial qualification matter, and both deserve deliberate handling.</p>
              <p>
                Major financial strategy decisions are often premature when the medical-necessity position is still
                unclear.
              </p>
              <p>
                In many situations, clarifying the medical position and supporting records first leads to better
                financial decisions later and fewer avoidable reversals.
              </p>
            </div>
          </PosterSection>

          <PosterSection title="What This Means for Your Family" className="pt-0">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3>Step 1: Clarify what concern is actually being raised</h3>
                <p>
                  Confirm whether the issue is a program-specific coverage comment, a records-based concern, or a
                  formal determination.
                </p>
              </div>
              <div className="space-y-3">
                <h3>Step 2: Review what the records currently show</h3>
                <p>Review how the records currently describe condition, function, safety, and ongoing care needs.</p>
              </div>
              <div className="space-y-3">
                <h3>Step 3: Identify what still needs to be clarified before moving ahead</h3>
                <p>
                  Pinpoint what documentation, evaluations, or clarifications are still missing before major next
                  steps are taken.
                </p>
              </div>
            </div>
          </PosterSection>

          <PosterSection title="Common Questions About Medical Qualification" className="pt-0">
            <ul className="list-disc space-y-2 pl-6">
              <li>What does “qualify medically” usually mean in practice?</li>
              <li>Does “not medically necessary” mean no long-term care options are available?</li>
              <li>They say my loved one does not qualify medically — what does that actually mean?</li>
              <li>Why is needing help not always the full medical-necessity analysis?</li>
              <li>Who is saying there is a problem, and is it a formal determination yet?</li>
              <li>What if dementia is part of the concern?</li>
              <li>What if medication management is part of the concern?</li>
              <li>What if the records do not show enough yet?</li>
              <li>How is this different from Medicare skilled coverage standards?</li>
              <li>Should we start financial planning before this is clear?</li>
              <li>What happens if medical necessity is denied?</li>
            </ul>
          </PosterSection>
        </>
      )}


      {isTooMuchIncome && (
        <>
          <PosterSection title="Why Families Panic When They Hear “Too Much Income”" className="pt-0">
            <div className="space-y-3">
              <p>One comment about income often sounds final, especially when a family is already under pressure to sort out care and payment decisions.</p>
              <p>Facilities may raise practical screening concerns based on experience, but families often hear those comments as permanent legal conclusions.</p>
              <p>The real issue may involve gross income, a Qualified Income Trust, spouse-at-home income allocation or diversion, monthly copayment, or some combination of those questions.</p>
            </div>
          </PosterSection>

          <PosterSection>
            <NativeVideoEmbed
              src={TOO_MUCH_INCOME_VIDEO_URL}
              title={pathway.title}
              poster={TOO_MUCH_INCOME_POSTER_URL}
              captions={{ src: TOO_MUCH_INCOME_CAPTIONS_URL, srcLang: "en", label: "English" }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(TOO_MUCH_INCOME_VIDEO_STRUCTURED_DATA) }}
            />
          </PosterSection>

          <PosterSection title="Income Is Not the Same as Assets" className="pt-0">
            <div className="space-y-3">
              <p>Income and assets are different Medicaid questions, even though families understandably blend them together.</p>
              <p>A monthly income issue is different from an asset-limit issue or a spend-down question, and the solution is not always the same.</p>
            </div>
          </PosterSection>

          <PosterSection title="What “Too Much Income” Usually Means" className="pt-0">
            <div className="space-y-3">
              <p>Income limits are real, and Medicaid looks at gross income rather than net income.</p>
              <p>For Texas in 2026, the gross monthly income limit is <span className="font-medium">$2,982 for one applicant</span> and <span className="font-medium">$5,964 combined if both spouses are applying</span>.</p>
              <p>Being over those numbers does not always end the conversation. In some situations, a Qualified Income Trust becomes part of the answer.</p>
            </div>
          </PosterSection>

          <PosterSection title="Why the Copayment Question Is Separate" className="pt-0">
            <div className="space-y-3">
              <p>Eligibility is one question. Monthly applied income, sometimes called the Medicaid copayment, is another.</p>
              <p>A person may qualify and still owe most of their income toward care after permitted deductions and allowances are applied.</p>
            </div>
          </PosterSection>

          <PosterSection title="When a Spouse at Home Changes the Income Picture" className="pt-0">
            <div className="space-y-3">
              <p>Medicaid generally follows the name-on-the-check rule to determine whose income is being counted.</p>
              <p>If the spouse at home does not already have enough gross income to reach the Texas 2026 spousal monthly needs allowance of <span className="font-medium">$4,066.50 per month</span>, some of the institutionalized spouse’s income may be diverted to her.</p>
              <p>That diversion can reduce the Medicaid copayment dollar-for-dollar, which is why the spouse-at-home question is often about both support and monthly payment.</p>
            </div>
          </PosterSection>

          <PosterSection title="What This Means for Your Family" className="pt-0">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3>Step 1: Clarify what income issue is actually being raised</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Is the concern about eligibility, monthly copayment, or both?</li>
                  <li>What income sources are being counted?</li>
                  <li>Is one spouse applying, or are both spouses applying?</li>
                  <li>Is the issue being confused with an asset problem?</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3>Step 2: Separate the income-limit question from the monthly-payment question</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Is the family actually over the income limit?</li>
                  <li>Is a Qualified Income Trust relevant?</li>
                  <li>Is the real concern the monthly copayment?</li>
                  <li>If there is a spouse at home, does income diversion matter?</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3>Step 3: Avoid assuming one income figure settles the whole case</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>One gross number does not always tell the whole story.</li>
                  <li>Qualified Income Trusts, monthly copayment, and income diversion may all matter.</li>
                  <li>Families should not panic based on one statement.</li>
                </ul>
              </div>
            </div>
          </PosterSection>

          <PosterSection title="Common Questions About Income and Medicaid" className="pt-0">
            <ul className="list-disc space-y-2 pl-6">
              <li>What counts as income and what does not?</li>
              <li>Is Medicaid based on gross income or net income?</li>
              <li>What is the 2026 income limit?</li>
              <li>What is a Qualified Income Trust?</li>
              <li>If we are over income, does that mean Medicaid is impossible?</li>
              <li>How much income can the Medicaid recipient keep?</li>
              <li>If there is a spouse at home, whose income is counted?</li>
              <li>Can income be diverted to the spouse at home?</li>
              <li>How is the Medicaid copayment calculated?</li>
              <li>Can the copayment be reduced?</li>
              <li>Can it increase?</li>
              <li>If the facility says income is too high, is that final?</li>
            </ul>
          </PosterSection>
        </>
      )}

      {isMedicareEnding && pathway.steps && (
        <PosterSection title="What This Means for Your Family" className="pt-0">
          <div className="space-y-8">
            {pathway.steps.map((step, i) => (
              <div key={i} className="space-y-3">
                <h3>{step.label}</h3>
                <ul className="list-disc space-y-2 pl-6">
                  {step.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PosterSection>
      )}

      {isMedicareEnding && (
        <PosterSection title="Common Questions When Coverage Is Changing" className="pt-0">
          <ul className="list-disc space-y-2 pl-6">
            <li>How long does Medicare usually pay for rehab?</li>
            <li>What does “not improving,” “plateaued,” “not participating,” or “no longer skilled” usually mean?</li>
            <li>What if discharge is being discussed but the person cannot come home?</li>
            <li>Does Medicare ending automatically decide where care has to happen next?</li>
            <li>Is appeal possible when coverage is ending?</li>
            <li>Does plan type matter in how this conversation unfolds?</li>
          </ul>
        </PosterSection>
      )}

      {pathway.slug === "too-late" && talkHelp.whatNotToDo && (
        <PosterSection title="What Not to Do" className="pt-0">
          <ul className="list-disc space-y-2 pl-6">
            {talkHelp.whatNotToDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PosterSection>
      )}

      {pathway.slug === "too-late" && (
        <PosterSection>
          <YouTubeEmbed
            videoId={VIDEO_IDS[pathway.slug]}
            title={pathway.title}
            placeholderText="Short overview of this situation. This video will walk through how to steady immediate care and payment decisions without panic."
          />
        </PosterSection>
      )}

      {isSpendEverything && (
        <>
          <PosterSection title="Why “spend everything” is often the wrong framework" className="pt-0">
            <div className="space-y-3">
              <p>Families often hear phrases like “you have to spend everything down” or “they will not qualify until it is all gone.”</p>
              <p>That is too simplistic.</p>
              <p>The issue is often not whether all value must disappear. The issue is whether an asset is being viewed in its current form, whether it is counted the same way as other assets, and whether lawful planning may improve the situation before applying.</p>
              <p>That is why families who assume they must simply drain accounts, sell assets, or start giving things away can make costly mistakes.</p>
            </div>
          </PosterSection>

          <PosterSection title="Families should not rule themselves out too early" className="pt-0">
            <div className="space-y-3">
              <p>Many families assume that meaningful savings, land, investment accounts, or other substantial assets automatically make Medicaid planning impossible.</p>
              <p>That is often not true.</p>
              <p>Good planning is often about understanding what can be preserved, what may need to be repositioned, and what steps may help avoid unnecessary loss. Some assets may already be treated more favorably than a family expects. In other situations, the way an asset is held, used, or prioritized may matter a great deal.</p>
              <p>The earlier a family gets clear advice, the more likely it is that avoidable loss can be prevented.</p>
            </div>
          </PosterSection>

          <PosterSection title="Preserving value is not always the same as losing value" className="pt-0">
            <div className="space-y-3">
              <p>One reason families get confused is that they hear the phrase “spend down” and assume that means money must simply vanish.</p>
              <p>That is not always what happens.</p>
              <p>Sometimes a resource may need to be changed in form rather than lost altogether. For example, if someone has excess cash but still needs an irrevocable prepaid funeral plan, using funds for that purpose does not simply mean the value disappeared. It may mean the asset was redirected into something the person legitimately needed and the rules may treat differently.</p>
              <p>That does not mean a family should start making moves without advice. It does mean that “losing everything” is often not an accurate way to think about the process.</p>
            </div>
          </PosterSection>

          <PosterSection title="Where families can accidentally lose options" className="pt-0">
            <div className="space-y-5">
              <p>Families often get into trouble when they act too quickly or rely on incomplete advice.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>giving money away without understanding the consequences</li>
                <li>moving assets based on informal advice</li>
                <li>selling or cashing out assets too quickly</li>
                <li>assuming all assets are treated the same way</li>
                <li>waiting until after avoidable decisions have already been made</li>
              </ul>
              <p>By the time a family realizes the rules are more complicated than they thought, some of their best options may already have narrowed.</p>
            </div>
          </PosterSection>

          <PosterSection title="Timing matters before financial moves are made" className="pt-0">
            <div className="space-y-5">
              <p>Earlier planning often creates more room to protect what matters and avoid unnecessary mistakes.</p>
              <p>That is especially true before a family starts:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>giving assets away</li>
                <li>retitling property</li>
                <li>cashing out accounts</li>
                <li>making major financial decisions based on assumptions instead of guidance</li>
              </ul>
              <p>Even when things feel urgent, it is usually better to pause before making financial moves and get clear advice first.</p>
            </div>
          </PosterSection>

          <PosterSection title="See how this works in real situations" className="pt-0">
            <div className="space-y-5">
              <p>Many families do not need a long legal explanation first. They need help understanding why the phrase “spend everything” is often misleading and what the process may actually look like.</p>
              <p>Our next page explains what “spend down” often means in practical terms, why losing value is not always the same as repositioning value, and why timing matters so much.</p>
              <Layer2LinkBlock
                href={`/pathways/${pathway.slug}/deeper/`}
                supportingLine={pathway.supportingLine}
                linkText="Read: What “Spend Down” Really Means"
              />
            </div>
          </PosterSection>
        </>
      )}

      <PosterSection
        title={
          isSpendEverything
            ? "Talk With a Medicaid Planning Attorney"
            : isHome
              ? "Talk With a Medicaid Planning Attorney"
              : pathway.slug === "too-much-income"
                ? "Before You Assume You Don’t Qualify"
                  : pathway.slug === "medicare-ending"
                    ? "When You Need Help Sorting What Changes Next"
                : pathway.slug === "qualify-medically"
                  ? "When a Conversation Can Help You Sort the Next Step"
                  : pathway.slug === "too-late"
                    ? "Even Urgent Situations Can Be Managed"
                  : "When It Helps to Talk With Someone"
        }
        className={pathway.slug === "too-late" ? "pt-6 md:pt-8" : "pt-0"}
      >
        {pathway.slug === "too-late" && talkHelp.talkHelpBullets ? (
          <div className="space-y-6">
            <p className="text-sm font-medium">{talkHelp.talkHelpLead}</p>
            <ul className="list-disc space-y-2 pl-6 leading-relaxed">
              {talkHelp.talkHelpBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <p>
              A quick conversation can help identify what to clarify first, then coordinate practical next steps
              around care, coverage, and planning — without pressure.
            </p>
            <div className="space-y-4 pt-2">
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
              <Layer2LinkBlock
                href={`/pathways/${pathway.slug}/deeper/`}
                supportingLine={pathway.supportingLine}
                linkText={
                  pathway.slug === "too-late"
                    ? "Choose the scenario that sounds closest to your situation"
                    : pathway.slug === "medicare-ending"
                      ? "Choose the question that sounds closest to what your family is hearing now"
                      : pathway.slug === "too-much-income"
                        ? "Choose the question that sounds closest to what you are hearing now"
                        : undefined
                }
              />
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <p>
              {isSpendEverything
                ? "Before giving assets away, moving money, selling property, or making major financial decisions, it helps to understand what options may be available under the law."
                : isHome
                  ? "Before you sell, transfer, lease, retitle, or make major decisions about a house or other property, it helps to get clear guidance on how the property fits into the larger Medicaid picture."
                  : pathway.slug === "too-much-income"
                    ? "A conversation can help clarify what counts as income, whether the issue is eligibility or monthly copayment, whether a Qualified Income Trust may be needed, and whether income can be diverted to support a spouse at home and reduce the copayment."
                    : pathway.slug === "medicare-ending"
                      ? "A short conversation can help your family separate what coverage is changing, what discharge is actually being proposed, and what care-setting and payment questions still need to be clarified before decisions feel rushed."
                    : pathway.slug === "qualify-medically"
                      ? "A short conversation can help your family sort whether the issue is medical necessity, documentation, financial sequencing, or a combination — and what to clarify first."
                  : pathway.when}
            </p>
            {(isSpendEverything || isHome) && (
              <p>{isHome ? "The Hale Law Firm helps families evaluate property, title, transfer, and Medicaid-planning questions based on the actual facts of the case, so they can avoid unnecessary mistakes and make informed decisions at the right time." : "The Hale Law Firm helps families evaluate Medicaid planning options based on their actual facts, timing, and family situation."}</p>
            )}
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
            {!isSpendEverything && !isHome && (
              <Layer2LinkBlock
                href={`/pathways/${pathway.slug}/deeper/`}
                supportingLine={pathway.supportingLine}
                linkText={
                  pathway.slug === "medicare-ending"
                    ? "Choose the question that sounds closest to what your family is hearing now"
                    : pathway.slug === "qualify-medically"
                      ? "Choose the question that sounds closest to what your family is hearing now, then review the deeper guidance"
                      : pathway.slug === "too-much-income"
                        ? "Choose the question that sounds closest to what you are hearing now"
                        : undefined
                }
              />
            )}
          </div>
        )}
      </PosterSection>

      <section className="pt-0">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <div
            className="mx-auto rounded-[1.5rem] border p-7 md:p-10"
            style={{
              maxWidth: designTokens.maxReadingWidth,
              borderColor: designTokens.colors.subtleBorder,
              backgroundColor: designTokens.colors.warmPaper,
              boxShadow: designTokens.shadows.softShadow,
            }}
          >
            {relatedPathwayLinks.length > 0 && (
              <div className="mb-5 space-y-2 text-sm leading-relaxed text-slate-700">
                <p className="font-medium text-slate-900">You may also want to see:</p>
                <ul className="space-y-2">
                  {relatedPathwayLinks.map((link) => (
                    <li key={link.slug}>
                      {link.context}{" "}
                      <Link href={`/pathways/${link.slug}/`} className="font-medium text-slate-900 underline underline-offset-4">
                        {link.label}
                      </Link>
                      .
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <PathwayNav currentSlug={pathway.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
