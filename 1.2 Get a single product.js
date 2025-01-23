// 1.2. Get a single product: https://fakestoreapi.com/products/1


var url = fetch('https://fakestoreapi.com/products/1');
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



function showSingleProduct(product)
{
    console.log(product)
}
function getSingleProduct()
{
    var url = 'https://fakestoreapi.com/products/1';
    var p =fetch(url,{method:'GET'});
    p.then((resp)=>
    {
        var p2 = resp.json();
        p2.then((product)=>
        {
            showSingleProduct(product)
        })
    })
}
getSingleProduct()
