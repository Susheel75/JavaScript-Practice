// var arr = [7,6,5,4,3,2,0];
// console.log(arr);
// arr.sort();
// console.log(arr);


// best method to sort of array element
console.log("")
var arr = [[1,3,5],[4,5,6],[89,23,56],[2,3,4]];
console.log("Before Sorting the array looks like: ")

console.log(arr);
function callback(e1,e2)
{
    if(e1[0]>=e2[0])
        return 1;
    else
    return -1;
}
console.log("")
arr.sort(callback);
console.log("After Sorting the array looks like: ");

console.log(arr);
console.log("")