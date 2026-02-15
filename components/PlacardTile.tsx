import Link from "next/link";

type PlacardTileProps = {
  href: string;
  title: string;
  subtitle: string;
};

export default function PlacardTile({ href, title, subtitle }: PlacardTileProps) {
  return (
    <Link
      href={href}
      className="group rounded-[1.25rem] border border-[#d3cab7] bg-[#f5efe3]/95 p-7 no-underline shadow-[0_8px_20px_rgba(36,24,8,0.1)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(36,24,8,0.14)]"
    >
      <h3 className="font-display text-[1.45rem] font-semibold tracking-tight text-stone-900">{title}</h3>
      <p className="mt-3 text-[0.92rem] leading-relaxed text-stone-600">{subtitle}</p>
    </Link>
  );
}
