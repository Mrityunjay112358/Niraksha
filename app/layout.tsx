import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niraksha - AI-Powered Precision for a Pest-Free Planet",
  description: "An intelligent drone system countering pest breeding and enabling sustainable agriculture.",
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
