export async function getInsertionSort(arr: number[]) {
    const res = await fetch("https://api.akdualgoritma.com/insertion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify({ arr }),
    });
    return res
}