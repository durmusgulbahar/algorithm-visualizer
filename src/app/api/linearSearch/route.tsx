import { SortState } from "@/src/models/InsertionSort/InsertionSortState";
import { LinearSearchState } from "@/src/models/linearSearch/linearSearch";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { arr,key } = await req.json();
  console.log("IN API", arr);

  let states: LinearSearchState[] = [];
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === key){
      states.push({
        key: key,
        currentIndex: i,
        currentListState: [...arr],
        isFound: true,
      });
      break;
    }
    states.push({
      currentIndex: i,
      key: key,
      currentListState: [...arr],
      isFound: false,
    });
  }
  console.log("STATES", states);
  try {
    return NextResponse.json({ states: states });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error", data: error });
  }
}
