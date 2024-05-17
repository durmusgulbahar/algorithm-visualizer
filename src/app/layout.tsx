'use client';

import type { Metadata } from "next";
import "./global.css";

import Footer from "@/src/components/Footer";
import Link from "next/link";

import { useTranslation } from "next-i18next";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useTranslation("page");


  return (
    <html lang="en">
      <body>
        <Link href={"/"}>
          <h1
            style={{
              textAlign: "center",
              padding: "20px",
              fontSize: "1.5rem",
              color: "white",
              top: "0",
              left: "1%",
              position: "fixed",
              textDecoration: "none",
              border: "1px solid white",
            }}
          >
            {t("title")}
          </h1>
        </Link>

        {children}
        <Footer />
      </body>
    </html>
  );
}
