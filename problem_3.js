/**
 * divide array
 * k and n-k
 * sum(k) - sum(n-k) = max
 */


function solve(A, k) {
    const n = A.length
    k = k > (n - k) ? k : n - k
    const prevSum = A.reduce((acc, ele) => acc += ele, 0)
    quickSort(A, 0, A.length - 1, k)
    let sumA = 0
    for (let i = 0; i < k; i++) {
        sumA += A[i]
    }
    return Math.abs(sumA - (prevSum - sumA))
}

function quickSort(A, low, high, k) {
    if (low >= high) return
    const pi = partition(A, low, high)
    if (pi == k) return
    quickSort(A, low, pi - 1, k)
    quickSort(A, pi + 1, high, k)
}
function partition(A, low, high) {
    let pivot = A[high]
    let count = 0
    for (let i = low; i <= high; i++) {
        if (A[i] > pivot) count++
    }
    let index = low + count
    swap(A, index, high)
    let p1 = low
    let p2 = high
    while (p1 < index && p2 > index) {
        while (A[p1] >= pivot) p1++
        while (A[p2] < pivot) p2--
        if (p1 < index && p2 > index) {
            swap(A, p1, p2)
        }
    }
    return index
}

function swap(A, first, second) {
    const temp = A[first]
    A[first] = A[second]
    A[second] = temp
    return
}

solve([1, 9, 7, 6, 8, 2, 3], 3)
