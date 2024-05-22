const url = "http://localhost:8000/linearSearch"

export async function getLinearSearch(arr: number[], key: number) {
    const res = await fetch("https://senior-pmtxlxkx6a-uc.a.run.app/linear", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify({ arr, key }),
    });
    return res
}