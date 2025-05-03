//4.c Get quotes: https://dummyjson.com/quotes

var url = fetch('https://dummyjson.com/quotes');
url.then((result)=>
{
    var p1 = result.json();
    p1.then((response)=>
    {
        console.log(response)
    }).catch((error)=>
        
    {
        console.log(error)
    })
    }).catch((error)=>
{
    console.log(error)
})
