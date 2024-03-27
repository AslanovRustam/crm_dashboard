import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "some description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/logo.svg?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/logo.svg?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />

      <body className={font.className}>{children}</body>
    </html>
  );
}
