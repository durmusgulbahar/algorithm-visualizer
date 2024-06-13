import React, { useState, useEffect } from "react";
import { InsertionSortState } from "@/src/models/InsertionSort/InsertionSortState";
import styles from "../styles/InsertionSort.module.css";
import { insertion_sort_pseudo } from "../models/InsertionSort/InsertionSortPseudo";
import { getInsertionSort } from "../services/getInsertionSort";
import RightSide from "./RightSide";

async function fetchInsertionSortStates(arr: number[]) {
  const data = await getInsertionSort(arr);
  const states = await data.json();
  return states.states;
}

const InsertionSortVisualizer = () => {

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

  // State to hold the sorting states
  const [InsertionSortStates, setInsertionSortStates] = useState<
    InsertionSortState[]
  >([]);
  // State to control the current displayed state
  const [currentStep, setCurrentStep] = useState(0);

  const [inputArr, setInputArr] = useState("");

  async function getStates() {
    const arr = inputArr.split(",").map(Number);
    const states = await fetchInsertionSortStates(arr);
    setInsertionSortStates(states);
  }

  function handleInputChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setInputArr(event.target.value);
  }
  function determineColor(index: number, state: InsertionSortState) {
    if (index === state.currentIndex) return "green"; // Element being inserted
    if (state.isPlacedCorrectLocation && index <= state.currentIndex)
      return "green"; // Correctly placed
    if (index === state.currentIndex + 1) return "orange"; // Element being compared
    return "grey"; // Default color
  }

  return (
    <div className={styles.container}>
      <h1>Insertion Sort</h1>
      <div className="inputArea">
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
        {InsertionSortStates[currentStep]?.currentListState.map(
          (value, index) => (
            <div
              className={`${styles.bar} ${InsertionSortStates[currentStep].isPlacedCorrectLocation &&
                index === InsertionSortStates[currentStep].currentIndex
                ? styles.correctLocation
                : ""
                }`}
              key={index}
              style={{
                height: `${(value + 15) * 1.5}px`,
                backgroundColor: determineColor(
                  index,
                  InsertionSortStates[currentStep]
                ),
              }}
            >
              {value}
            </div>
          )
        )}
      </div>
      
      <div className={styles.buttonContainer}>
        <button
          className={styles.sortButton}
          onClick={() => setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)}
        >
          Previous
        </button>
        <button
          className={styles.sortButton}
          onClick={() =>
            setCurrentStep(
              currentStep < InsertionSortStates.length - 1
                ? currentStep + 1
                : currentStep
            )
          }
        >
          Next
        </button>
        <p>{InsertionSortStates[currentStep]?.msg}</p>
      </div>
      <RightSide text="Insertion sort iterates through an array, comparing each element with its neighbor and swapping them if they are in the wrong order." complexity="O(N^2)" step={InsertionSortStates[currentStep]?.pseudocode} pseudo_code={insertion_sort_pseudo} />
    </div>
  );
};

export default InsertionSortVisualizer;
