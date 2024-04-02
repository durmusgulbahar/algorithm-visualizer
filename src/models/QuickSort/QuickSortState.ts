export interface QuickSortState {
    currentListState: number[];
    currentIndex: number;
    currentElement: number;
    status: 'pivot' | 'compare' | 'sorted';
  }