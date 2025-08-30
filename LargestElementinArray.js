function findLargest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // 
        }
    }

    return max;
}

let arr = [10, 25, 47, 3, 89, 56, 12];
console.log("The largest element is:", findLargest(arr));
