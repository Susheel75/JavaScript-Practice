function fetchData(callback)
{
    setTimeout(()=>
    {
        console.log("Data fetched");
        callback("Data Ready");
    },2000);
}
fetchData((result)=>
{
    console.log(result)
});