import Link from "next/link";

export default function Layer2LinkBlock({
  href,
  supportingLine,
}: {
  href: string;
  supportingLine: string;
}) {
  return (
    <div className="mt-10 text-sm text-slate-700">
      <div>
        <Link href={href} className="hover:underline">
          Want a deeper explanation of why this question is complicated?
        </Link>
      </div>
      <div className="mt-1 text-slate-600">{supportingLine}</div>
    </div>
  );
}
