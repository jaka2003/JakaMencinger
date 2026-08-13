import "../globals.css";
import { inter } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
