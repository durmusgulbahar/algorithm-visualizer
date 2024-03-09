import {NextResponse} from 'next/server'
import { SortState } from '@/app/models/LinkedList';
export async function POST(req:Request){
    const {arr} = await req.json()
    console.log("IN API", arr)
    let states:SortState[] = []
    for (let i = 0; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
        states.push({
          currentIndex: j + 1,
          currentElement: currentElement,
          currentListState: [...arr],
          isPlacedCorrectLocation: false,
        });
      }
      arr[j + 1] = currentElement;
      states.push({
        currentIndex: i,
        currentElement: currentElement,
        currentListState: [...arr],
        isPlacedCorrectLocation: true,
      });
    }
    try{
        return NextResponse.json({states: states})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"error", data:error})
    }
}