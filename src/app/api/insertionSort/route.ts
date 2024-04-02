import {NextResponse} from 'next/server'
import { InsertionSortState } from '@/src/models/InsertionSort/InsertionSortState';

/**
 * Handles the POST request for the insertion sort route.
 * @param req - The request object.
 * @returns A Promise that resolves to a NextResponse containing the states of the insertion sort algorithm.
 */
export async function POST(req:Request){
    const {arr} = await req.json()

    let states:InsertionSortState[] = []
    
    for (let i = 0; i < arr.length; i++) {
      let currentElement = arr[i]; // Copy of the current element.
    
      let j = i - 1; // The last element of the sorted part of the array.

      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;

        // Add the current state of the array to the states array.
        states.push({
          currentIndex: j + 1,
          currentElement: currentElement,
          currentListState: [...arr],
          isPlacedCorrectLocation: false,
          msg: '',
          pseudocode: 2
        });
      }

      arr[j + 1] = currentElement; // Place the current element in the correct location.

      // Add the current state of the array to the states array.
      states.push({
        currentIndex: i,
        currentElement: currentElement,
        currentListState: [...arr],
        isPlacedCorrectLocation: true,
        msg: '',
        pseudocode: 3
      });
    }
    console.log("STATES", states)

    try{
        return NextResponse.json({states: states})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"error", data:error})
    }
}