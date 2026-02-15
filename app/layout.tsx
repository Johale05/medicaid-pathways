import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medicaid Pathways",
  description:
    "An educational resource created to help families understand long-term care and Medicaid planning—one step at a time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
