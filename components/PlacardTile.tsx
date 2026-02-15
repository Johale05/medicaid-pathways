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
      className="group rounded-2xl border border-stone-300/80 bg-stone-50/95 p-6 no-underline shadow-[0_8px_22px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)]"
    >
      <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{subtitle}</p>
    </Link>
  );
}
