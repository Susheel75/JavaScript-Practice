//2.1 Fetch the list of users from the API.

var url = fetch('https://jsonplaceholder.typicode.com/users');
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