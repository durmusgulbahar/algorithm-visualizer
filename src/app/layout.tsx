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
            Algorithm Visualizer
          </h1>
        </Link>
        {children}
        <Footer />
      </body>
    </html>
  );
}
