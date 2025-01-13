//get all comments
// function getAllComments()
// {
//     var url = 'https://jsonplaceholder.typicode.com/comments';
//     var p =fetch(url,{method:'GET'});
//     p.then((resp)=>
//     {
//         var p1 = resp.json();
//         p1.then((comments)=>
//         {
//             console.log(comments);
//         })
//     })
// }
// getAllComments();



// get all objects which id = 100

// function getAllObjectsById()
// {
//     var url = 'https://jsonplaceholder.typicode.com/comments';
//     var p = fetch(url,{method:'GET'});
//     p.then((resp)=>
//     {
//         var p1 = resp.json();
//         p1.then((objects)=>
//         {
//             var newArr = objects.filter(e=>e.id===100);
//             for(var i=0;i<newArr.length;i++)
//             {
//                 console.log(newArr[i])
//             }
//         })
//     })
// }
// getAllObjectsById();



function getRangeByPostId(post1,post2,comments)
{
    var url = 'https://jsonplaceholder.typicode.com/comments';
    var p = fetch(url,{method:'GET'});
    p.then((resp)=>
    {
        var p1 = resp.json();
        p1.then((objects)=>
        {
            var newArr = objects.filter(e=>(e.postId>=post1) && (e.postId<=post2));
            for(var i=0;i<newArr.length;i++)
            {
                console.log(newArr[i])
            }
        })
    })
}
getRangeByPostId(1,10);