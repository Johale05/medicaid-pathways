import Link from "next/link";
import type { CSSProperties } from "react";
import { designTokens } from "@/lib/designTokens";

type PlacardTileProps = {
  href: string;
  title: string;
  subtitle: string;
};

export default function PlacardTile({ href, title, subtitle }: PlacardTileProps) {
  return (
    <Link
      href={href}
      className="rounded-[1.1rem] border p-6 no-underline transition duration-200 hover:-translate-y-1 hover:shadow-[var(--hover-shadow)]"
      style={
        {
          backgroundColor: designTokens.colors.warmPaper,
          borderColor: designTokens.colors.subtleBorder,
          boxShadow: designTokens.shadows.softShadow,
          "--hover-shadow": designTokens.shadows.hoverShadow,
        } as CSSProperties
      }
    >
      <h3 className="font-display text-[1.4rem] font-semibold leading-tight tracking-tight" style={{ color: designTokens.colors.ink }}>
        {title}
      </h3>
      <p className="mt-3 text-[0.98rem] leading-relaxed" style={{ color: "rgba(45, 41, 36, 0.82)" }}>
        {subtitle}
      </p>
    </Link>
  );
}
