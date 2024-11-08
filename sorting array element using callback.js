function callback(e1,e2)
{
    if(e1>e2)
    {
        return 1;
    }
    else{
        return -1;
    }
}

var arr = [0,9,12,8,11,7,6,10,5,4,3,2,1];
console.log(arr.sort(callback));
