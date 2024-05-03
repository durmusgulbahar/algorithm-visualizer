import { NextResponse } from "next/server";
import { QuickSortState } from '@/src/models/QuickSort/QuickSortState';

export async function POST(req: Request) {
  const { arr } = await req.json();
  console.log("IN API", arr);
  let states: QuickSortState[] = [];

  quickSort(arr, 0, arr.length - 1);

  // Function to swap two elements in the array
  function swap(items: number[], leftIndex: number, rightIndex: number) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  // Function to find the partition index
  function partition(items: number[], left: number, right: number) {
    let pivot = items[Math.floor((right + left) / 2)], // middle element
      i = left, // left pointer
      j = right; // right pointer

    states.push({
      currentIndex: Math.floor((right + left) / 2),
      currentElement: pivot,
      currentListState: [...arr],
      leftPointer: i,
      rightPointer: j,
      status: "pivot",
      msg: "",
      pseudoCode: 0
    });

    // While left pointer is less than right pointer
    while (i <= j) {
      while (items[i] < pivot) { // if the element is less than the pivot
        i++;
      }

      while (items[j] > pivot) { // if the element is greater than the pivot
        j--;
      }

      if (i <= j) { // if the left pointer is less than or equal to the right pointer
        swap(items, i, j);

        states.push({
          currentIndex: Math.floor((right + left) / 2),
          currentElement: pivot,
          currentListState: [...arr],
          leftPointer: i,
          rightPointer: j,
          status: "pivot",
          msg: "",
          pseudoCode: 1
        });

        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items: number[], left: number, right: number) {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  }

  console.log("STATES", states);

  try {
    return NextResponse.json({ states: states });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error", data: error });
  }
}
