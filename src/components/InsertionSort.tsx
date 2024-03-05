import React, { useState, useEffect } from "react";
import { LinkedList, SortState } from "../models/LinkedList";
import styles from "../styles/InsertionSort.module.css"

const InsertionSortVisualizer = ({ arr }: { arr: number[] }) => {
   // Initial array to sort
   const initialArray = arr;
   // State to hold the sorting states
   const [sortStates, setSortStates] = useState<SortState[]>([]);
   // State to control the current displayed state
   const [currentStep, setCurrentStep] = useState(0);
 
   const insertionSortWithStateTracking = (arr: number[]) => {
     let states: SortState[] = [];
     for (let i = 0; i < arr.length; i++) {
       let currentElement = arr[i];
       let j = i - 1;
 
       while (j >= 0 && arr[j] > currentElement) {
         arr[j + 1] = arr[j];
         j--;
         states.push({
           currentIndex: j + 1,
           currentElement: currentElement,
           currentListState: [...arr],
           isPlacedCorrectLocation: false,
         });
       }
       arr[j + 1] = currentElement;
       states.push({
         currentIndex: i,
         currentElement: currentElement,
         currentListState: [...arr],
         isPlacedCorrectLocation: true,
       });
     }
     setSortStates(states);
   };
 
   useEffect(() => {
     insertionSortWithStateTracking([...initialArray]);
   }, []);
 

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        {sortStates[currentStep]?.currentListState.map((value, index) => (
          <div
            className={`${styles.bar} ${sortStates[currentStep].isPlacedCorrectLocation && index === sortStates[currentStep].currentIndex ? styles.correctLocation : ''}`}
            key={index}
            style={{ height: `${value * 20}px` }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.sortButton} onClick={() => setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)}>Previous</button>
        <button className={styles.sortButton} onClick={() => setCurrentStep(currentStep < sortStates.length - 1 ? currentStep + 1 : currentStep)}>Next</button>
      </div>
    </div>
  );
};

export default InsertionSortVisualizer;