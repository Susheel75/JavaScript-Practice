// method 1.

var a=1;
var b=2;
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);

// method 2.

var a=1;
var b=2;
[a,b]=[b,a];
console.log(a,b);