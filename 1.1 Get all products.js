
// 1.1.//Get all products: https://fakestoreapi.com/products


// var url = fetch('https://fakestoreapi.com/products');
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


// 1.1.//Get all products: https://fakestoreapi.com/products  (using function)
function showAllProducts(products)
{
    console.log(products);
}
function getProductByAPI()
{
    var url = 'https://fakestoreapi.com/products';
    // method GET
    var p =fetch(url,{method:'GET'});
    p.then((resp)=>
    {
        var p2 = resp.json();
        p2.then((products)=>
        {
            showAllProducts(products);
        })
    })
}
getProductByAPI()







// 1.3. Get categories: https://fakestoreapi.com/products/categories

// var url = fetch('https://fakestoreapi.com/products/categories');
// url.then((result)=>
// {
//     var p1=result.json();
//    p1.then((response)=>
// {
//     console.log(response)
// }).catch((error)=>
// console.log(error)
// )
// })




//1.4 Sorts the products based on their price in ascending order by default

// var url = fetch('https://fakestoreapi.com/products');
// url.then((result)=>
// {
//     var p1=result.json();
//     p1.then((response)=>
//         {
//             response.sort((e1,e2)=>e1.price-e2.price)
//             console.log(response)
//         })
// })




//1.5 Displays the sorted list of products, showing title and price

// var url = fetch('https://fakestoreapi.com/products');
// url.then((result)=>
// {
// var p1=result.json();
// p1.then((response)=>
// {
//     response.sort((e1,e2)=>e1.price-e2.price)
//     response.forEach((product)=>
//     {
//         console.log(product.title,product.price)
//     })
// })
// })



//2.1 Fetch the list of users from the API.

// var url = fetch('https://jsonplaceholder.typicode.com/users');
// url.then((result)=>
// {
//     var p1 = result.json();
//     p1.then((response)=>
//         {
//             console.log(response)
//             }).catch((error)=>
//             {
//                 console.log(error)
//             })
// }).catch((error)=>
// {
//     console.log(error)
// })




//2.2 Display each user's name and email

// var url = fetch('https://jsonplaceholder.typicode.com/users');
// url.then((result)=>
// {
//     var p1 = result.json();
//     p1.then((response)=>
//     {
//         response.forEach((user)=>
//         {
//             console.log(user.name,user.email)
//         })
//     }).catch((error)=>
//     {
//         console.log(error)
//     })
// }).catch((error)=>
// {
//     console.log(error)
// })




//3.a Single random user: https://randomuser.me/api
// var url = fetch('https://randomuser.me/api');
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
//     }).catch((error)=>
// {
//     console.log(error)
// })



//3.b Multiple users: https://randomuser.me/api/?results=5

// var url = fetch('https://randomuser.me/api/?results=5');
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
//     }).catch((error)=>
// {
//     console.log(error)
// })




//4.a Get all products: https://dummyjson.com/products

// var url = fetch('https://dummyjson.com/products');
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
//     }).catch((error)=>
// {
//     console.log(error)
// })



//4.b Get a single user: https://dummyjson.com/users/1

// var url = fetch('https://dummyjson.com/users/1');
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
//     }).catch((error)=>
// {
//     console.log(error)
// })



//4.c Get quotes: https://dummyjson.com/quotes

// var url = fetch('https://dummyjson.com/quotes');
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
//     }).catch((error)=>
// {
//     console.log(error)
// })