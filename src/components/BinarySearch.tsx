import styles from "@/src/styles/InsertionSort.module.css";
import { useState } from "react";
import { BinarySearchState } from "../models/binarySearch/BinarySearchState";
import { binary_search_pseudo } from "../models/binarySearch/BinarySearchPseudo";
import { getBinarySearch } from "../services/getBinarySearch";
import ExplainBox from "./ExplainBox";
import RightSide from "./RightSide";
export type BinarySearchStatex = {
    currentListState: number[];
    high: number;
    low: number;
    middle: number;
    found: boolean;
    msg: string
    pseudocode: number;
  };
  
  
async function fetchBinarySearch(arr: number[], key: number) {
  const data = await getBinarySearch(arr, key);
  const states = await data.json();
  return states.states;
}

export default function BinarySearchVisualizer() {
  // State to hold the sorting states
  const [searchStates, setSearchStates] = useState<BinarySearchState[]>([]);
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
    const states = await fetchBinarySearch(arr, k);
    setSearchStates(states);
  }

  function determineColor(index: number, state: any) {
    if (index === state.middle && state.found) {
      return "green";
    } else if (index === state.middle) {
      if (state.low === state.high && !state.found) {
        return "red";
      } else {
        return "orange";
      }
    } else if (index < state.middle) {
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
        <h1>Binary Search</h1>
        <div className="inputArea">
          <input
            type="text"
            placeholder="Enter the sorted array..."
            value={inputArr}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter the key..."
            value={key}
            onChange={handleInputChangeKey}
          />
          <button onClick={getStates}>Submit</button>
        </div>

        <div>
          <div className={styles.barContainer}>
            {searchStates[currentStep]?.currentListState.map((value, index) => (
              <div
                key={index}
                className={styles.bar}
                style={{
                  backgroundColor: determineColor(
                    index,
                    searchStates[currentStep]
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
                currentStep < searchStates.length - 1
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
              currentStep === 0
                ? "white"
                : searchStates[currentStep]?.found
                ? "green"
                : "red",
            fontSize: "20px",

            width: "60%",
            textAlign: "center",
          }}
        >
          {!searchStates[currentStep]?.found &&
          currentStep === searchStates.length - 1
            ? `Key not found in the array`
            : searchStates[currentStep]?.msg}
        </p>
      </div>

      <RightSide
        text="Binary search is an efficient algorithm for finding an element's position in a sorted array. It works by repeatedly dividing the search interval in half until the key is found or the interval becomes empty."
        complexity="O(log N)"
        step={searchStates[currentStep]?.pseudocode}
        pseudo_code={binary_search_pseudo}
      />
    </div>
  );
}
