// Find the Largest Number in Array

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
let arr = [8, 7, 5, 110, 8, 2, 4, 3, 7, 5, 10]
console.log("Largest No. is:", findLargestNumber(arr));