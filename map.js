var arr = [10,9,8,7,6];
function callbackSquare(e)
{
    return e*e;
}
var a = arr.map(callbackSquare);
console.log(a);


//Creeate a new Array with 20% hike on salary, using map() function and return new Array

var arrEmp = [{id:4,salary:13000},
    {id:5,salary:12000},
    {id:6,salary:11000},
    {id:7,salary:10000},
    {id:8,salary:9000}];
function hike(e)
{
    var newSal = e.salary+e.salary*.2;
    e.salary=newSal;
    // var newA=[];
    // newA.push(e);

    return e;
}
var a = arrEmp.map(hike);
console.log(a);


function empId(e)
{
    return e.id;
}
var a = arrEmp.map(empId);
console.log(a);
