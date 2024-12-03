async function sum(a,b)
{
    return a+b;
}
// var res=await sum(10,20);
// console.log(res);
async function calling()
{
    try{
        var res=await sum(true,'10');
        console.log(res);
    }
    catch(error)
    {
        console.log("error value")
        console.log(error);
    }
    finally{
        console.log("finally block");
    }
    
    
}
calling();