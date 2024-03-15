import { NextResponse } from "next/server";
//import { QuickSortState } from '@/src/models/QuickSort/QuickSortState';
interface QuickSortState {
  currentListState: number[];
  currentIndex: number;
  currentElement: number;
  leftPointer: number;
  rightPointer: number;
  status: "pivot" | "compare" | "sorted";
}
export async function POST(req: Request) {
  const { arr } = await req.json();
  console.log("IN API", arr);
  let states: QuickSortState[] = [];

  quickSort(arr, 0, arr.length - 1);

  function swap(items: number[], leftIndex: number, rightIndex: number) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  function partition(items: number[], left: number, right: number) {
    let pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    states.push({
      currentIndex: Math.floor((right + left) / 2),
      currentElement: pivot,
      currentListState: [...arr],
      leftPointer: i,
      rightPointer: j,
      status: "pivot",
    });
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //swap two elements
        states.push({
          currentIndex: Math.floor((right + left) / 2),
          currentElement: pivot,
          currentListState: [...arr],
          leftPointer: i,
          rightPointer: j,
          status: "pivot",
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
