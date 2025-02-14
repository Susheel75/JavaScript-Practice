// Find the smallest number in array

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let arr = [8, 7, 5, 110, 8, 2, 4, 3, 7, 5, 10];
console.log("Smallest No. is:", findSmallest(arr));
