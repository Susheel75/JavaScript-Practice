1.
var r= new Date()
console.log(r)
setTimeout(()=>
{
    console.log("Susheel is displayed after 3 second",new Date());
},3000);

console.log("")
2. 
function greet(name)
{
    console.log("Hello",name);
}
setTimeout(greet,3000,"Susheel");