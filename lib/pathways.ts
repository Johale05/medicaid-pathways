import pathways from "@/content/pathways.json";

export type Pathway = {
  slug: string;
  title: string;
  subheadline: string;
  core: string[];
  why: string[];
  means: string[];
  steps?: { label: string; bullets: string[] }[];
  when: string;
  layer2Title: string;
  layer2Body: string[];
  supportingLine: string;
  talkHelpLead?: string;
  talkHelpBullets?: string[];
  whatNotToDo?: string[];
};

export const pathwayOrder = [
  "too-late",
  "medicare-ending",
  "spend-everything",
  "home",
  "too-much-income",
  "qualify-medically",
] as const;

export const allPathways = pathways as Pathway[];

export const orderedPathways = pathwayOrder
  .map((slug) => allPathways.find((pathway) => pathway.slug === slug))
  .filter((pathway): pathway is Pathway => Boolean(pathway));

export function getPathway(slug: string): Pathway | undefined {
  return allPathways.find((p) => p.slug === slug);
}
