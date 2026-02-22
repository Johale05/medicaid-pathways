import Link from "next/link";

export default function Layer2LinkBlock({
  href,
  supportingLine,
}: {
  href: string;
  supportingLine: string;
}) {
  return (
    <div className="mt-10">
      <div>
        <Link href={href} className="text-base font-medium hover:underline md:text-lg">
          Want a deeper explanation of why this question is complicated?
        </Link>
      </div>
      <div className="mt-1 text-sm text-muted-foreground md:text-base">{supportingLine}</div>
    </div>
  );
}
