

export async function getBinarySearch(arr: number[], key: number) {
    const res = await fetch("https://api.akdualgoritma.com/binary", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify({ arr, key }),
    });
    return res
}