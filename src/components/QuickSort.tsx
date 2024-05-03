import React, { useState, useEffect } from "react";
import { InsertionSortState } from "@/src/models/InsertionSort/InsertionSortState";
import styles from "../styles/InsertionSort.module.css";
import PseudoCode from "./PseudoCode";
import { quick_sort_pseudo } from "../models/QuickSort/QuickSortPseudo";
import { useTranslation } from 'next-i18next'

async function fetchQuickSort(arr: number[]) {
  const response = await fetch("http://localhost:3000/api/quickSort", {
    method: "POST",
    body: JSON.stringify({ arr }),
  });
  const data = await response.json();
  return data.states;
}
const QuickSortVisualizer = () => {
  const { t } = useTranslation(["QuickSortPage", "buttonsAndPlaceholders"]); // For translation
  // State to hold the sorting states
  const [InsertionSortStates, setInsertionSortStates] = useState<InsertionSortState[]>([]);
  // State to control the current displayed state
  const [currentStep, setCurrentStep] = useState(0);

  const [inputArr, setInputArr] = useState("");

  async function getStates() {
    const arr = inputArr.split(",").map(Number);
    const states = await fetchQuickSort(arr);
    setInsertionSortStates(states);
  }

  function handleInputChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setInputArr(event.target.value);
  }

  return (
    <div className={styles.container}>
      <h1> {t("QuickSortPage:header")} </h1>
      <div className="inputArea">
        <input
          type="text"
          placeholder="Enter input..."
          value={inputArr}
          onChange={handleInputChange}
        />
        <button onClick={getStates}> {t("buttonsAndPlaceholders:submit")} </button>
      </div>
      <div className={styles.barContainer}>
        {InsertionSortStates[currentStep]?.currentListState.map((value, index) => (
          <div
            className={`${styles.bar} ${InsertionSortStates[currentStep].isPlacedCorrectLocation &&
                index === InsertionSortStates[currentStep].currentIndex
                ? styles.correctLocation
                : ""
              }`}
            key={index}
            style={{ height: `${(value + 15) * 1.5}px` }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.sortButton}
          onClick={() => setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)}
        >
          {t("buttonsAndPlaceholders:previous")}
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
          {t("buttonsAndPlaceholders:next")}
        </button>
      </div>
      <PseudoCode pseudo_code={quick_sort_pseudo} step={InsertionSortStates[currentStep]?.pseudocode} />
    </div>
  );
};

export default QuickSortVisualizer;
