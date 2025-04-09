//3.b Multiple users: https://randomuser.me/api/?results=5

var url = fetch('https://randomuser.me/api/?results=5');
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
