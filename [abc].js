// var regex=/[abc]/;
// console.log(regex.test("amazon"));
// console.log(regex.test("boy"));
// console.log(regex.test("console"));
// console.log(regex.test("susheel"));
// var regix = /\w+@\w+\.w+/
// function emailTest(input)
// {
//     return regex.test(input)
// }
// var regix = /\w+[0-9]@\w+\.w+/
// var regix = /\w+[0-9]@\w+\.w+/
// function emailTest(input)
//  {
//      return regix.test(input)
//  }

var text = "My name is susheel prajapati and my email is abc@gmail.com and my another email is abc@gmail.com";
var pattern = /[^is]/gi; 
var result = text.match(pattern);
console.log(result)