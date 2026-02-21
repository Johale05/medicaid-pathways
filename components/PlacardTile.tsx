import Link from "next/link";
import { designTokens } from "@/lib/designTokens";

type PlacardTileProps = {
  href: string;
  title: string;
  subtitle: string;
  className?: string;
  dataSlug?: string;
};

export default function PlacardTile({ href, title, subtitle, className, dataSlug }: PlacardTileProps) {
  return (
    <Link
      href={href}
      data-slug={dataSlug}
      className={`homePathwayTile flex h-full min-h-[150px] w-full flex-col justify-start rounded-[1rem] border p-5 sm:p-6 no-underline transition-all duration-200 hover:-translate-y-[1px] ${className ?? ""}`}
    >
      <h3 className="font-display text-xl font-semibold leading-tight tracking-tight sm:text-[1.6rem]" style={{ color: designTokens.colors.ink }}>
        {title}
      </h3>
      <p className="mt-3 text-[1.05rem] leading-relaxed" style={{ color: "rgba(45, 41, 36, 0.86)" }}>
        {subtitle}
      </p>
    </Link>
  );
}
