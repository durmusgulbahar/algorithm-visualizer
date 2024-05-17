import { NextResponse } from "next/server";
import { QuickSortState } from '@/src/models/QuickSort/QuickSortState';

export async function POST(req: Request) {
  const { arr } = await req.json();
  console.log("IN API", arr);
  let states: QuickSortState[] = [];

  function swap(items: number[], leftIndex: number, rightIndex: number) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    states.push({
      currentIndex: leftIndex,
      currentElement: items[leftIndex],
      currentListState: [...items],
      leftPointer: leftIndex,
      rightPointer: rightIndex,
      status: "swap",
      msg: `Swapped elements at index ${leftIndex} and ${rightIndex}`,
      pseudoCode: 2 // Assuming '2' corresponds to the swap operation
    });
  }

  function partition(items: number[], left: number, right: number): number {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    states.push({
      currentIndex: Math.floor((right + left) / 2),
      currentElement: pivot,
      currentListState: [...items],
      leftPointer: i,
      rightPointer: j,
      status: "pivot",
      msg: "Choosing pivot",
      pseudoCode: 1 // Assuming '1' corresponds to pivot selection
    });

    while (i <= j) {
      while (items[i] < pivot) i++;
      while (items[j] > pivot) j--;

      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items: number[], left: number, right: number) {
    if (items.length > 1) {
      const index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
  }

  quickSort(arr, 0, arr.length - 1);
  states.push({
    currentIndex: -1,
    currentElement: null,
    currentListState: [...arr],
    leftPointer: null,
    rightPointer: null,
    status: "sorted",
    msg: "Array is sorted",
    pseudoCode: 3 // Assuming '3' indicates end of sorting
  });

  console.log("STATES", states);

  return new Response(JSON.stringify({ states: states }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
