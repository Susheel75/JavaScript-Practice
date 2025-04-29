//4.b Get a single user: https://dummyjson.com/users/1

var url = fetch('https://dummyjson.com/users/1');
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
