export interface LinearSearchState{
    currentListState: number[];
    key:number;
    currentIndex: number;
    isFound: boolean;
}

export interface LinearSearchPseudo{
    0:{
        code:"for (let i = 0; i < arr.length; i++)"
    },
    1:{
        code:"if(arr[i] === key)"
    },
    2:{
        code:"return i"
    }
}