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
    <div className="mt-10">
      <div>
        <Link href={href} className="text-base font-medium hover:underline md:text-lg">
          {linkText ?? "Want the deeper explanation and common scenarios?"}
        </Link>
      </div>
      <div className="mt-1 text-sm text-muted-foreground md:text-base">{supportingLine}</div>
    </div>
  );
}
