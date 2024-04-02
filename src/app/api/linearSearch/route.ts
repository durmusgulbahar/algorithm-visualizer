import { LinearSearchState } from "@/src/models/linearSearch/LinearSearchState";
import { NextResponse } from "next/server";

/**
 * Get req from client, execute linear search and send res states.
 * @params array and key
 */
export async function POST(req: Request) {
  const { arr, key } = await req.json();

  let states: LinearSearchState[] = [];

  for (let i = 0; i < arr.length; i++) {
    /**
     * If key found states added to list
     */
    if (arr[i] === key) {
      states.push({
        key: key,
        currentIndex: i,
        currentListState: [...arr],
        isFound: true,
        msg: ` ${key} found at index ${i} `,
        pseudoCode: 1,
      });
      break;
    }
    /**
     * Steps, compare 0. elm - key, 1. elm - key
     */
    states.push({
      currentIndex: i,
      key: key,
      currentListState: [...arr],
      isFound: false,
      msg: `${key} compared with index ${i} (${arr[i]})`,
      pseudoCode: 0,
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
