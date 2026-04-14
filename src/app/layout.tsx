import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BallCursor } from "@/components/ball-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Fussball Website Idee",
  description:
    "Futuristische Vereinswebsite mit scrollgesteuerter 3D-Ballnavigation, starken Panels und moderner Club-Inszenierung."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <BallCursor />
        {children}
      </body>
    </html>
  );
}
