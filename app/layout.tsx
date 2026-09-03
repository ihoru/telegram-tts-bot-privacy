import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Read Aloud Privacy Policy",
    template: "%s | Read Aloud",
  },
  description:
    "Bilingual privacy policy for Read Aloud, a local-first Telegram text-to-speech bot.",
  icons: {
    icon: "/read-aloud-avatar.svg",
    shortcut: "/read-aloud-avatar.svg",
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
