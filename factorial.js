function Factorial(n)
{
    if(n<0)
    {
        return "Negative Numbers ki factorial Nahi Hoti Mere Bhai";
    }
    else if(n==0 || n==1)
    {
        return 1;
    }
    else{
        var res=1;
        for(var i=2;i<=n;i++)
        {
            res*= i
        }
        return res;
    }
}
var n=5;
console.log("Factorial of " + n,"is = " ,Factorial(n))