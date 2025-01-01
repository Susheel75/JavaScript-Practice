//1.5 Displays the sorted list of products, showing title and price


var url = fetch('https://fakestoreapi.com/products');
url.then((result)=>
{
    var p1 = result.json();
    p1.then((response)=>
    {
        response.forEach((product)=>
        {
            console.log(product.title, product.price);
        })
    }).catch((error)=>
    {
        console.log(error)
    })
}).catch((error)=>
{
    console.log(error)
})