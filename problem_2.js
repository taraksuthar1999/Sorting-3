function quickSort(A, low, high) {
    if (low >= high) return
    const pi = partition(A, low, high)
    quickSort(A, low, pi - 1)
    quickSort(A, pi + 1, high)
    return A
}

function partition(A, low, high) {
    let pivot = A[high]
    let count = 0
    for (let i = low; i <= high; i++) if (A[i] > pivot) count++;
    const index = count + low
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

console.log(sol([1, 9, 7, 6, 8, 2, 3], 0, 6))