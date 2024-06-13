'use client';

import "./global.css";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial value
    handleResize();

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    position: isMobile ? "static" : "fixed",
    top: isMobile ? "auto" : "0",
    left: isMobile ? "auto" : "0",
    right: isMobile ? "auto" : "0",
    zIndex: 1,
    border: "1px solid white",
    textAlign: "center",
    padding: isMobile ? "10px" : "20px",
  };

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
        <div style={headerStyle}>
          <Link href={"/"} style={{
              fontSize: "1.5rem",
              color: "white",
              textDecoration:"none"
            }} >
            <h1 style={{
              fontSize: "1.5rem",
              color: "white",
              textDecoration:"none",
              textAlign: "center",
              
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
