var x='Hello';
for(var i=0;i<x.length-1;i++)
{
    if(i%2==0)
    {
        console.log(x[i].toUpperCase())
    }
    else{
        console.log(x[i].toLowerCase())
    }
}
