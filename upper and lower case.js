var x='Hello';
for(var i=0;i<x.length;i++)
{
    if(i==0 || i==x.length-1)
    {
        console.log(x[i].toUpperCase())
    }
    else{
        console.log(x[i].toLowerCase())
    }
}