var p = fetch('https://dummyjson.com/products/category-list');
p.then((res)=>
{
    var p2=res.json();
    p2.then((r)=>
    {
        console.log(r);
    }).catch((error)=>
    {
        console.log(error);
    })
    console.log(res);
}).catch((error)=>
{
    console.log(error);
})
