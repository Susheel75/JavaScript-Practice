function greet()
{
    console.log("Hello Susheel");
}
var s = setInterval(greet,2000);
setTimeout(() => {
    clearInterval(s);
    console.log("Interval cleared");
}, 12000);

// setTimeout(clearInterval(s),10000);