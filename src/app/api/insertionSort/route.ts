import {NextResponse} from 'next/server'
import { SortState } from '@/src/models/InsertionSort/InsertionSortState';
interface sort{
    arr:number[],
    i:number,
    j:number,
    currentElement:number,
    comparisonElement:number,
    isSorted:boolean
}
export async function POST(req:Request){
   let deneme:sort[]=[]
    const {arr} = await req.json()
    console.log("IN API", arr)
    let states:SortState[] = []
    for (let i = 0; i < arr.length; i++) {
      let currentElement = arr[i];
    
      let j = i - 1;
      deneme.push({i:i,j:j,arr:[...arr],currentElement:arr[i],comparisonElement:arr[i+1],isSorted:false})   
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
       
        j--;
        states.push({
          currentIndex: j + 1,
          currentElement: currentElement,
          currentListState: [...arr],
          isPlacedCorrectLocation: false,
        });
        deneme.push({i:i,j:j,arr:[...arr],currentElement:arr[i],comparisonElement:arr[j],isSorted:false})     
      }
      arr[j + 1] = currentElement;
      states.push({
        currentIndex: i,
        currentElement: currentElement,
        currentListState: [...arr],
        isPlacedCorrectLocation: true,
      });

      deneme.push({i:i,j:j,arr:[...arr],currentElement:arr[i],comparisonElement:arr[i+1],isSorted:i===arr.length-1?true:false})
    }

    console.log("STATES", states)
    console.log("denem states",deneme)
    try{
        return NextResponse.json({states: states})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"error", data:error})
    }
}