// function getData()
// {
//     var url = 'https://api.github.com/users/Susheel75';
//     var p =fetch(url,{method:'GET'});
//     p.then((resp)=>
//     {
//         var p1 = resp.json();
//         p1.then((data)=>
//         {
//             console.log(data);
//         }).catch((error)=>
//         {
//             console.log("Inner Promise rejected",error);
//         })
//     }).catch((error)=>
//     {
//         console.log("Promise Rejected",error);
//     })
// }
// getData();




function getData()
{
    var url = 'http://localhost:3000/api/data';
    var p =fetch(url,{method:'GET'});
    p.then((resp)=>
    {
        var p1 = resp.json();
        p1.then((data)=>
        {
            console.log(data);
        }).catch((error)=>
        {
            console.log("Inner Promise rejected",error);
        })
    }).catch((error)=>
    {
        console.log("Promise Rejected",error);
    })
}
getData();















// function getData() {
//     var url = 'https://api.github.com/users/Susheel75';
    
//     // Use fetch to get the data
//     var p = fetch(url, { method: 'GET' });
  
//     // Handle the response with then()
//     p.then((resp) => {
//       // Parse the response as JSON
//       var p1 = resp.json();
  
//       // Handle the parsed data
//       p1.then((data) => {
//         console.log(data);  // Log the data to the console
//       })
//       .catch((error) => {
//         // Handle errors in JSON parsing
//         console.error('Error parsing JSON:', error);
//       });
//     })
//     .catch((error) => {
//       // Handle network or fetch errors
//       console.error('Error fetching data:', error);
//     });
//   }
  
//   getData();
  
