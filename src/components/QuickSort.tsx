import React, { useState } from "react";
import { QuickSortState } from "@/src/models/QuickSort/QuickSortState";
import styles from "../styles/QuickSort.module.css";
import PseudoCode from "./PseudoCode";
import { quick_sort_pseudo } from "../models/QuickSort/QuickSortPseudo";

async function fetchQuickSort(arr: number[]) {
  const response = await fetch("http://localhost:3000/api/quickSort", {
    method: "POST",
    body: JSON.stringify({ arr }),
  });
  const data = await response.json();
  return data.states;
}

const QuickSortVisualizer = () => {
  // State to hold the sorting states
  const [InsertionSortStates, setInsertionSortStates] = useState<QuickSortState[]>([]);
  // State to control the current displayed state
  const [currentStep, setCurrentStep] = useState(0);

  const [error, setError] = useState<string>('');

  const validateInput = (value: string): boolean => {
    const pattern = /^(\d+(,\d+)*)?$/;
    return pattern.test(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInput(inputArr)) {
      setError('');
      await getStates(); // Call getStates if input is valid
    } else {
      setError('Please enter a valid array of numbers separated by commas.');
    }
  };

  const [quickSortStates, setQuickSortStates] = useState<QuickSortState[]>([]);
  const [inputArr, setInputArr] = useState("");

  async function getStates() {
    const arr = inputArr.split(",").map(Number);
    const states = await fetchQuickSort(arr);
    setQuickSortStates(states);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputArr(event.target.value);
  }

  return (
    <div className={styles.container}>
      <h1>Quick Sort</h1>
      <div className={styles.inputArea}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="numberArray"
            placeholder="Enter input..."
            value={inputArr}
            onChange={handleInputChange}
            pattern="^(\d+(,\d+)*)?$"
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" onClick={getStates}>Submit</button>
        </form>
      </div>
      <div className={styles.barContainer}>
        {quickSortStates[currentStep]?.currentListState.map((value, index) => {
          let barStyle = styles.bar;
          if (index === quickSortStates[currentStep].currentIndex && quickSortStates[currentStep].status === "pivot") {
            barStyle = `${styles.bar} ${styles.pivot}`;
          } else if (quickSortStates[currentStep].status === "sorted") {
            barStyle = `${styles.bar} ${styles.sorted}`;
          } else if (quickSortStates[currentStep].status === "swap") {
            barStyle = `${styles.bar} ${styles.swap}`;
          } else if (quickSortStates[currentStep].status === "compare") {
            barStyle = `${styles.bar} ${styles.compare}`;
          }
          return (
            <div
              className={barStyle}
              key={index}
              style={{ height: `${(value + 15) * 1.5}px` }}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <button
          disabled={currentStep <= 0}
          className={styles.sortButton}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Previous
        </button>
        <button
          disabled={currentStep >= quickSortStates.length - 1}
          className={styles.sortButton}
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </button>
      </div>
      <PseudoCode pseudo_code={quick_sort_pseudo} step={quickSortStates[currentStep]?.pseudoCode} />
    </div>
  );
};

export default QuickSortVisualizer;
