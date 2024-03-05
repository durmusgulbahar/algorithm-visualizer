export type SortState = {
  currentIndex: number;
  currentElement: number;
  currentListState: number[];
  isPlacedCorrectLocation: boolean;
};
class ListNode {
  value: SortState;
  next: ListNode | null;

  constructor(value: SortState, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  append(value: SortState): void {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  printList(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
