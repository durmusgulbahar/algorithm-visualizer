// Import necessary hooks from React
"use client";
import React, { useState, useEffect } from "react";
import { LinkedList,SortState } from "./LinkedList";

const InsertionSortVisualizer = ({arr} : {arr:number[]}) => {
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
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {sortStates[currentStep]?.currentListState.map((value, index) => (
          <div
            key={index}
            style={{
              width: '20px',
              height: `${value * 20}px`,
              backgroundColor: sortStates[currentStep].isPlacedCorrectLocation && index === sortStates[currentStep].currentIndex ? 'green' : 'grey',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'end',
              color: 'white',
              padding: '5px',
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)}>Previous</button>
        <button onClick={() => setCurrentStep(currentStep < sortStates.length - 1 ? currentStep + 1 : currentStep)}>Next</button>
      </div>
    </div>
  );
};

export default InsertionSortVisualizer;