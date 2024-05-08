export interface QuickSortState {
  currentListState: number[];
  currentIndex: number | null;
  currentElement: number | null;
  leftPointer: number | null;
  rightPointer: number | null;
  status: "pivot" | "compare" | "sorted" | "swap";
  msg: string;
  pseudoCode: number;
}
