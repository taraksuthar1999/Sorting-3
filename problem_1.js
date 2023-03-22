/**
 * 
 */


function partition(Arr, low, high) {
    let pivot = Arr[high]
    let count = 0
    for (let i of Arr) {
        if (i < pivot) count++
    }
    let index = low + count
    swap(Arr, index, high)
    let p1 = low
    let p2 = high
    while (p1 < index && p2 > index) {
        while (Arr[p1] < Arr[index]) p1++
        while (Arr[p2] >= Arr[index]) p2--
        if (p1 < index && p2 > index) swap(Arr, p1, p2)
    }
    console.log(Arr)
    return
}

function swap(Arr, first, second) {
    const temp = Arr[first]
    Arr[first] = Arr[second]
    Arr[second] = temp
}

partition([1, 9, 8, 7, 3, 2, 5], 0, 6)