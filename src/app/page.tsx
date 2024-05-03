'use client';

import Link from "next/link";
import styles from "@/src/styles/home.module.css";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation("page");

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
          <h1>{t('searchingAlgorithm')}</h1>
        </header>
        <div className={styles.container}>
          <div className={styles.animationDisplay}>
            <Link
              href="/LinearSearchPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t('linearSearch')}
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
          <h1>{t('sortingAlgorithms')}</h1>
        </header>
        <div className={styles.container}>
          <div className={styles.animationDisplay}>
            <Link
              href="/insertionSortPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t('insertionSort')}
            </Link>
          </div>
          <div className={styles.animationDisplay}>
            <Link
              href="/QuickSortPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t('quickSort')}
            </Link>
          </div>
          <div className={styles.animationDisplay}>
            <Link
              href="/LinearSearchPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t('linearSearch')}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  );
}

