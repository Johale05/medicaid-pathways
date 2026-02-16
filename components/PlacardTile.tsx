import Link from "next/link";
import { designTokens } from "@/lib/designTokens";

type PlacardTileProps = {
  href: string;
  title: string;
  subtitle: string;
  className?: string;
};

export default function PlacardTile({ href, title, subtitle, className }: PlacardTileProps) {
  return (
    <Link
      href={href}
      className={`flex h-full min-h-[140px] w-full flex-col justify-start rounded-[1rem] border border-[#d9ccb7]/40 bg-[#f5ede0]/95 p-6 no-underline shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_10px_26px_rgba(0,0,0,0.10)] ${className ?? ""}`}
    >
      <h3 className="font-display text-[1.45rem] font-semibold leading-tight tracking-tight" style={{ color: designTokens.colors.ink }}>
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed" style={{ color: "rgba(45, 41, 36, 0.86)" }}>
        {subtitle}
      </p>
    </Link>
  );
}
