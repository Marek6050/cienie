import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Prezentacja finałowa",
  description:
    "Prezentacja finałowa projektu „Cisza nad Raszową”, Akademia STEM 2026.",
};

export const viewport: Viewport = {
  themeColor: "#f5f4ef",
};

export default function PrezentacjaLayout({ children }: { children: React.ReactNode }) {
  return <div className="witryna">{children}</div>;
}
