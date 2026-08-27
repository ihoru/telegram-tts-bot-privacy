import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vslukh Privacy Policy",
    template: "%s | Vslukh",
  },
  description:
    "Bilingual privacy policy for Vslukh, a local-first Telegram text-to-speech bot.",
  icons: {
    icon: "/vslukh-avatar.svg",
    shortcut: "/vslukh-avatar.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
