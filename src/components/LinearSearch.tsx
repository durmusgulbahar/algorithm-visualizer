"use client";
import styles from "@/src/styles/InsertionSort.module.css";
import { useState } from "react";
import { LinearSearchState } from "../models/linearSearch/LinearSearchState";
import { linear_pseudo } from "../models/linearSearch/LinearSearchPseudo";
import { getLinearSearch } from "../services/getLinearSearch";
import RightSide from "./RightSide";

async function fetchLinearSearch(arr: number[], key: number) {
  const data = await getLinearSearch(arr, key);
  const states = await data.json();
  return states.states;
}
export default function LinearSearchVisualizer() {

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
  const [sortStates, setSortStates] = useState<LinearSearchState[]>([]);
  // State to control the current displayed state
  const [currentStep, setCurrentStep] = useState(0);

  const [inputArr, setInputArr] = useState("");

  const [key, setKey] = useState("");

  function handleInputChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setInputArr(event.target.value);
  }

  function handleInputChangeKey(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setKey(event.target.value);
  }

  async function getStates() {
    const arr = inputArr.split(",").map(Number);
    const k = parseInt(key);
    const states = await fetchLinearSearch(arr, k);
    setSortStates(states);
  }

  function determineColor(index: number, state: any) {
    if (index === state.currentIndex && state.isFound) {
      return "green";
    } else if (index === state.currentIndex) {
      if (
        state.currentIndex === state.currentListState.length - 1 &&
        !state.isFound
      ) {
        return "red";
      } else {
        return "orange";
      }
    } else if (index < state.currentIndex) {
      return "red";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        padding: "20px",

        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          justifyContent: "center",
        }}
      >
        <h1>Linear Search</h1>
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
          <input
            type="number"
            placeholder="Enter the key..."
            value={key}
            onChange={handleInputChangeKey}
          />
          <button onClick={getStates}>Submit</button>
        </div>

        <div>
          <div className={styles.barContainer}>
            {sortStates[currentStep]?.currentListState.map((value, index) => (
              <div
                key={index}
                className={styles.bar}
                style={{
                  backgroundColor: determineColor(
                    index,
                    sortStates[currentStep]
                  ), // Color of the bar
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.sortButton}
            onClick={() =>
              setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)
            }
          >
            Previous
          </button>
          <button
            className={styles.sortButton}
            onClick={() =>
              setCurrentStep(
                currentStep < sortStates.length - 1
                  ? currentStep + 1
                  : currentStep
              )
            }
          >
            Next
          </button>
          <br />
        </div>
        <p
          style={{
            color:
              currentStep == 0
                ? "white"
                : sortStates[currentStep]?.isFound
                  ? "green"
                  : "red",
            fontSize: "20px",

            width: "60%",
            textAlign: "center",
          }}
        >
          {!sortStates[currentStep]?.isFound &&
            currentStep === sortStates.length - 1
            ? `Key not found in the array`
            : sortStates[currentStep]?.msg}
        </p>
      </div>

      <RightSide
        text="Linear search is a straightforward method for finding a specific item in a list. It works by checking each item in the list one at a time, from the beginning to the end, until the desired item is found or the end of the list is reached."
        complexity="O(N)"
        step={sortStates[currentStep]?.pseudoCode}
        pseudo_code={linear_pseudo}
      />
    </div>
  );
}
