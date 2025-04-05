//2.2 Display each user's name and email

var url = fetch('https://jsonplaceholder.typicode.com/users');
url.then((result)=>
{
    var p1 = result.json();
    p1.then((response)=>
    {
        response.forEach((user)=>
        {
            console.log(user.name,user.email)
        })
    }).catch((error)=>
    {
        console.log(error)
    })
}).catch((error)=>
{
    console.log(error)
})
