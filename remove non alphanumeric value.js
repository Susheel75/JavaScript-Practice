function removeAlphaNumeric(str)
{
    return str.replace(/[^a-zA-Z0-9]/g, "");
}
var a="Susheel Prajapati @ gmail.com 4 5";
console.log(removeAlphaNumeric(a));