// String slicing
// String slicing in JavaScript involves extracting a portion of a string by specifying the starting and ending indices.

// You can achieve this using the slice() method. Here are a few examples:

// slice() method:
// var originalString = "Hello, World!";
// var slicedString = originalString.slice(7, 12);

// console.log(slicedString); // World
// Omitting the End Index:
// If you omit the end index, the slice will go until the end of the string:

// let originalString = "Hello, World!";
// let slicedString = originalString.slice(7);

// console.log(slicedString); // World!
// In this case, it extracts from index 7 to the end of the string.

// Negative Indices:
// You can use negative indices to count from the end of the string:

// let originalString = "Hello, World!";
// let slicedString = originalString.slice(-6, -1);

// console.log(slicedString); // World
// This extracts from the 6th character from the end to the 1st character from the end.

// Task
// Declare a string variable str
// Assign the value String to it
// Use string slicing to print ring to the console.

var str = "String";
// Use string slicing to print "ring" to the console
console.log(str.slice(2, 6)); // Output: ring
