console.log("")
var arr = [[1,3],[4,5],[89,23],[2,3]];
console.log("Before Sorting the array looks like: ")

console.log(arr);
function callback(e1,e2)
{
    if((e1[0]+e1[1])>=(e2[0]+e2[1]))
        return 1;
    else
    return -1;
}
console.log("")
arr.sort(callback);
console.log("After Sorting the array looks like: ");

console.log(arr);
console.log("")