// 1.3. Get categories: https://fakestoreapi.com/products/categories

var url = fetch('https://fakestoreapi.com/products/categories');
// url.then((result)=>
// {
//     var p1 = result.json();
//     p1.then((response)=>
//     {
//         console.log(response)
//     }).catch((error)=>
//     {
//         console.log(error)
//     })
// }).catch((error)=>
// {
//     console.log(error)
// })


function showAllCategories(categories)
{
    console.log(categories)
}
function getAllCategories()
{
    var url = 'https://fakestoreapi.com/products/categories';
    var p =fetch(url,{method:'GET'});
    p.then((resp)=>
    {
        var p2 = resp.json();
        p2.then((categories)=>
        {
            showAllCategories(categories)
        })
        
    })
}
getAllCategories()