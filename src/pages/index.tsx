import { use, useEffect, useState } from "react";
import InsertionSortVisualizer from "../components/InsertionSort";

export default function Home() {
  const [data, setData] = useState<string>(""); // Declare a state variable...
  const [arr, setArr] = useState<number[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setData(e.target.value)
    
  }

  function handleSubmit(){
    const dataArray = data.split(',').map(Number); // Convert string to array of numbers
    setArr(dataArray);
    console.log(dataArray)
  }
  return (
    <main>
      <InsertionSortVisualizer arr={arr == undefined?arr:[5,4,3,2,1]}/>
      <input value={data}  onChange={e => handleChange(e)}/>
      <p>{arr}</p>
      <button type="submit" onClick={handleSubmit}>SORT</button>
    </main>
  );
}
