'use client';

import Link from "next/link";
import styles from "@/src/styles/home.module.css";

export default function Home() {

  return (
    <div>
      LandingPage 
      <Link href={"/Categories"}>
      Go to categories
      </Link>
    </div>
  );
}




