var arr = [1,1,2,3,2,4,3,5,6,7,5];
var newArr = [];
for (var i = 0; i < arr.length; i++)
{
    if(newArr.indexOf(arr[i])==-1)
    {
        newArr.push(arr[i]);
    }
}
console.log(newArr);


