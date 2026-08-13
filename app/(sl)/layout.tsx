import "../globals.css";
import { inter } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("sl");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
