export async function getInsertionSort(arr: number[]) {
    const res = await fetch("https://senior-pmtxlxkx6a-uc.a.run.app/insertion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify({ arr }),
    });
    return res
}