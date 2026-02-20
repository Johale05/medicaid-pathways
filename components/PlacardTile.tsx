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
      className={`flex h-full min-h-[150px] w-full flex-col justify-start rounded-[1rem] border border-[#d6c4ad]/45 bg-[rgba(246,238,227,0.86)] p-5 sm:p-6 no-underline shadow-[0_12px_28px_rgba(74,58,41,0.16)] backdrop-blur-[8px] [@supports(backdrop-filter:blur(1px))]:bg-[rgba(246,238,227,0.82)] [-webkit-backdrop-filter:blur(8px)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(74,58,41,0.20)] ${className ?? ""}`}
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
