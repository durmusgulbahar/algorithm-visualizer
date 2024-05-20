'use client';

import Link from "next/link";
import styles from "@/src/styles/home.module.css";

export default function Home() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        padding: "20px",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          width: "30%",
        }}
      >
        <header>
          <h1>Searching Algorithms</h1>
        </header>
        <div className={styles.container}>
          <div className={styles.animationDisplay}>
            <Link
              href="/LinearSearchPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Linear Search
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "30%",
        }}
      >
        <header>
          <h1>Sorting Algorithms</h1>
        </header>
        <div className={styles.container}>
          <div className={styles.animationDisplay}>
            <Link
              href="/insertionSortPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Insertion Sort
            </Link>
          </div>
          <div className={styles.animationDisplay}>
            <Link
              href="/QuickSortPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Quick Sort
            </Link>
          </div>
          <div className={styles.animationDisplay}>
            <Link
              href="/LinearSearchPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Linear Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

