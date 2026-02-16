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
      className="rounded-[1rem] border px-7 py-7 no-underline transition duration-200 hover:-translate-y-[4px] hover:shadow-[var(--hover-shadow)]"
      style={
        {
          backgroundColor: "#f9f3e8",
          borderColor: "#d7cab4",
          boxShadow: designTokens.shadows.softShadow,
          "--hover-shadow": "0 18px 36px rgba(52, 41, 25, 0.2)",
        } as CSSProperties
      }
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
