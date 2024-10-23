// Strings and Integers
// In JavaScript, the + operator is overloaded, meaning it can be used for different operations depending on the types of the operands. When one or both operands are strings, the + operator is used for string concatenation. If any of the operands is not a string, JavaScript will attempt to convert it to a string and then perform concatenation.

// Here are examples illustrating the behaviour of the + operator with strings and other types:

// String Concatenation:

// var str1 = "Hello";
// var str2 = "World";
// var result = str1 + " " + str2;
// console.log(result); // Output: Hello World
// String and Number:

// var str = "Hello";
// var num = 42;
// var result = str + num;
// console.log(result); // Output: Hello42
// The number 42 is implicitly converted to a string and then concatenated with the string.

// String and Boolean:

// var str = "Hello";
// var bool = true;
// var result = str + bool;
// console.log(result); // Output: Hellotrue
// The boolean value true is implicitly converted to the string "true" and then concatenated with the original string.

// It's important to note that when using the + operator with non-string types, JavaScript will perform implicit type conversions. If you want to ensure a specific type or handle type conversions explicitly, you might consider using methods like String(), Number(), or toString().

// Task
// Given two integers x and y.
// Print their concatenation on the console.

// One of the possible solutions: 

var x = 10;
var y = 12;
console.log("" + x + y);
