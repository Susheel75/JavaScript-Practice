console.log("Method 1.")
var arr = [1,4,2,17,67,3];
for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            var t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
}
console.log(arr);


console.log("")
console.log("Method 2.")
function sort(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])

                {
                    var t = arr[i];
                    arr[i] = arr[j];
                    arr[j] = t;
                }
        }
    }
    return arr;
}
var arr = [10,9,8,7,6,5,4,3,2,1,0];
console.log(sort(arr));