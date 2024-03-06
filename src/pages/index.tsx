import InsertionSortVisualizer from "../components/InsertionSort";

export default function Home() {

  return (
    <main>
      <InsertionSortVisualizer arr={[3,1,4,4,2,10,21,89]}/>
      <input name="myInput" />

    </main>
  );
}
