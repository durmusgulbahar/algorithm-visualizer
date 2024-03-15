import Link from 'next/link';
import styles from '@/src/styles/home.module.css'

export default function Home() {
  return (
      <div>
        <header>
          <h1>All Animations</h1>
        </header>
        <div className={styles.container}>
          <div className={styles.animationDisplay}>
            <Link href="/insertionSortPage" style={{ textDecoration: 'none', color: "white"}}>Insertion Sort</Link>
          </div>
          <div className={styles.animationDisplay}>
          <Link href="/QuickSortPage" style={{ textDecoration: 'none', color: "white"}}>Quick Sort</Link>
          </div>
          <div className={styles.animationDisplay}>
          <Link href="/LinearSearchPage" style={{ textDecoration: 'none', color: "white"}}>Linear Search</Link>
          </div>
        </div>
      </div>
  );
}