import Image from "next/image";
import styles from "./page.module.css";
import InsertionSortVisualizer from "./InsertionSort";

export default function Home() {
  return (
    <main>
      <InsertionSortVisualizer arr={[3,1,4,4,2]}/>
    </main>
  );
}
