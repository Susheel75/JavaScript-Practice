//1.4 Sorts the products based on their price in ascending order by default


// var url = fetch('https://fakestoreapi.com/products');
// url.then((result)=>
// {
//     var p1 = result.json();
//     p1.then((response)=>
//     {
//         response.sort((e1,e2)=>e1.price-e2.price)
//         console.log(response)
//     }).catch((error)=>
//     {
//         console.log(error)
//     })
// }).catch((error)=>
// {
//     console.log(error)
// })


// function sortPrice(products)
// {
//     var url = 'https://fakestoreapi.com/products';
//     var p =fetch(url,{method:'GET'});
//     p.then((resp)=>
//     {
//         var p1 = resp.json();
//         p1.then((products)=>
//         {
//             products.sort((e1,e2)=>
//             {
//                 if(e1.price>e2.price)
//                 {
//                     return 1;
//                 }
//                 else{
//                     return -1;
//                 }
//             })
//             console.log(products);
//         })
//     })
// }
// sortPrice();


function sortPrice()
{
    var url = 'https://fakestoreapi.com/products';
    var p =fetch(url,{method:'GET'});
    p.then((resp)=>
    {
        var p1 = resp.json();
        p1.then((products)=>
        {
            
            var newArr = products.filter(e=>e.price === 114);

            for(var i=0;i<newArr.length;i++)
            {
                console.log(newArr[i])           // using for loop 
            }
            // newArr.forEach(e=>
            // {
            //     console.log(e);               // using forEach()
            // });
        })
    });
}
sortPrice();

