'use client';

import "./global.css";
import Footer from "@/src/components/Footer";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en'>
      <body>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "5%",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            zIndex: 1,
            border: "1px solid white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Link href={"/"}>
            <h1 style={{
              fontSize: "1.5rem",
              color: "white",
            textDecoration: "none",
            }}>
              Algorithm Visualizer
            </h1>
          </Link>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
