function uniqueNum(arr)
{
    var newArr = [];
    for(var i=0;i<arr.length;i++)
    {
        if(!newArr.includes(arr[i]))
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var num = [1,1,2,2,3,3,4,4,5,5,6,6];
console.log(uniqueNum(num));
