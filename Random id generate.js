// random id generate

var url = fetch('https://dummyjson.com/products');
url.then((result)=>
{
    var p1 = result.json();
    p1.then((response)=>
    {
        var p = response.products;
        var randIndx = Math.floor(Math.random() * p.length);
        console.log(p[randIndx].id);
    }).catch((error)=>
    {
        console.log(error)
    })
}).catch((error)=>
{
    console.log(error)
})


//// random id generate and print all the data inside that random id

var url = fetch('https://dummyjson.com/products');
url.then((result) => {
    var p1 = result.json();
    p1.then((response) => {
        var p = response.products;
        var randIndx = Math.floor(Math.random() * p.length);
        var product = p[randIndx];
        console.log(product.id);
        console.log(product); 
    }).catch((error) => {
        console.log(error);
    });
}).catch((error) => {
    console.log(error);
});
