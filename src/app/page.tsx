"use client";

import Link from "next/link";
import git from "@/public/social-media.png";
import Image from "next/image";
import styles from "@/src/styles/landing.module.css";

export default function Home() {
  return (

    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <div className={styles.planeContainer}>
          <div className={`${styles.plane} ${styles.main}`}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
          <p>
            This websites purpose is to make you understand algorithms better by
            visualizing them.
          </p>
          <p>This project supported by TÜBİTAK 2209-A</p>
          <p>
            This project is developed by students of Akdeniz University CSE
            Department.
          </p>
          <div style={{ width: "50px" }}>
            <Link
              target="_blank"
              href="https://github.com/durmusgulbahar/algorithm-visualizer"
            >
              <Image
                src={git}
                alt="Github"
                width={50}
                height={50}
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />

            </Link>
          </div>
        </div>
      </div>

      <div className={styles.linkAnimation}>
        {" "}
        <Link href={"/Categories"} style={{textDecoration:"none", color:"white"}}>Go to algorithms {">>"}</Link>
      </div>

    </div>
  );
}
