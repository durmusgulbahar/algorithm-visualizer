export interface QuickSortState {
  currentListState: number[];
  currentIndex: number;
  currentElement: number;
  leftPointer: number;
  rightPointer: number;
  status: "pivot" | "compare" | "sorted";
  msg: string;
  pseudoCode: number;
}
