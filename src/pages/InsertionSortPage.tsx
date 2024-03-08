import InsertionSortVisualizer from '../components/InsertionSort';

export default function InsertionSortPage() { 
  return (
    <main>
      <InsertionSortVisualizer arr={[3, 4, 6, 8, 10]} />
    </main>
  );
}