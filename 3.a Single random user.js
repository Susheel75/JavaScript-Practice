//3.a Single random user: https://randomuser.me/api

var url = fetch('https://randomuser.me/api');
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



// var ran = [];
var url = fetch('https://fakestoreapi.com/products');
url.then((result)=>
{
    var p1 = result.json();
    p1.then((response)=>
    {
        var ranIndx = Math.floor(Math.random()*response.length);
        var rand = response[ranIndx];
        // ran.push(rand);
        console.log(rand)

    }).catch((error)=>
    {
        console.log(error)
    })
}).catch((error)=>
{
    console.log(error)
})