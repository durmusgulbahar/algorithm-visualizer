const url = "http://localhost:8000/linearSearch"

export async function getBinarySearch(arr: number[], key: number) {
    const res = await fetch("http://localhost:8000/binary", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify({ arr, key }),
    });
    return res
}