import React from "react";
import styles from "@/src/styles/landing.module.css";

type Props = {};

export default function Page({}: Props) {
  return (
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
  );
}
