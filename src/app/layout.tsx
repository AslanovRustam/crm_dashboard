import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { StoreProvider } from "./lib/StoreProvider";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
