import type { Metadata } from "next";
import { dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejas Bendkule | Portfolio",
  description: "This is Tejas Bendkule's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans} antialiased`}
      >
        <div className="grid-bg"></div>
        {children}
      </body>
    </html>
  );
}
