import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DibsList — Design System",
  description: "A warm, editorial component library built on shadcn/ui.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
