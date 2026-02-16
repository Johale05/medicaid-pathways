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
      className="rounded-[1.1rem] border p-7 no-underline transition duration-200 hover:-translate-y-[3px] hover:shadow-[var(--hover-shadow)]"
      style={
        {
          backgroundColor: "#fbf5e9",
          borderColor: "#d9ccb6",
          boxShadow: designTokens.shadows.softShadow,
          "--hover-shadow": designTokens.shadows.hoverShadow,
        } as CSSProperties
      }
    >
      <h3 className="font-display text-[1.42rem] font-semibold leading-tight tracking-tight" style={{ color: designTokens.colors.ink }}>
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed" style={{ color: "rgba(45, 41, 36, 0.85)" }}>
        {subtitle}
      </p>
    </Link>
  );
}
