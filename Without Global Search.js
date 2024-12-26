var text = "apple banana apple orange apple";
var regex = /apple/; // Without the global flag

var result = text.match(regex);
console.log(result); // Output: ['apple']
