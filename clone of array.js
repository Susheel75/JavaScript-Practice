var arr = [1,2,3,4,5,6,7,8];
var arr2 = [...arr];
console.log(arr2);



var cus = [
    {id: 1, name: 'John', age: 25, address:' Greater Noida'}]
var cus2 = [...cus];
console.log(cus2);
var cus2 = [{...cus, address: 'noida'}];
console.log(cus2);