var text = "apple banana orange apple cherry";
var regex = /apple/g; // Global search for 'apple'

var result = text.match(regex);
console.log(result); // Output: ['apple', 'apple']
