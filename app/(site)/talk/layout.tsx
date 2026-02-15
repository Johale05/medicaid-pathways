import MinimalIdentityHeader from "@/components/MinimalIdentityHeader";
import SiteFooter from "@/components/SiteFooter";

export default function TalkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalIdentityHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
