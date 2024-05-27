function mergeArrays(leftArr, rightArr) {
    const result = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            result.push(leftArr.shift());
        } else {
            result.push(rightArr.shift());
        }
    }

    return [...result, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
    if (arr.length > 1) {
        const q = Math.floor(arr.length / 2);
        const leftArr = arr.slice(0, q);
        const rightArr = arr.slice(q);

        return mergeArrays(mergeSort(leftArr), mergeSort(rightArr));
    }

    return arr;
}

const unsortedTab = [3, 2, 1, 13, 8, 5, 0, 1];
console.log("Unsorted tab:", unsortedTab);
console.log("Merge sort:", mergeSort(unsortedTab));