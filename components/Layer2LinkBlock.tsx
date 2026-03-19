import Link from "next/link";

export default function Layer2LinkBlock({
  href,
  supportingLine,
  linkText,
}: {
  href: string;
  supportingLine: string;
  linkText?: string;
}) {
  return (
    <div className="mt-8 border-t border-border/70 pt-4 md:mt-10 md:pt-5">
      <div>
        <Link href={href} className="text-base font-medium hover:underline md:text-lg">
          {linkText ?? "Want the deeper explanation and common scenarios?"}
        </Link>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{supportingLine}</div>
    </div>
  );
}
