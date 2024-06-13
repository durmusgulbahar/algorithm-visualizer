
export async function getLinearSearch(arr: number[], key: number) {
    const res = await fetch("https://api.akdualgoritma.com/linear", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify({ arr, key }),
    });
    console.log(res)
    return res
}