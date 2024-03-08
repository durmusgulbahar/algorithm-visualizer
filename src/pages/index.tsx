import Link from 'next/link';
import styles from '../styles/home.module.css'

export default function Home() {
  return (
      <div>
        <header>
          <h1>All Animations</h1>
        </header>
        <div className={styles.container}>
          <div className={styles.animationDisplay}>
            <Link href="/InsertionSortPage" style={{ textDecoration: 'none', color: "white"}}>Insertion Sort</Link>
          </div>
          <div className={styles.animationDisplay}>Quicksort</div>
        </div>
      </div>
  );
}