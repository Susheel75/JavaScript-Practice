var regex = /apple/i;
console.log(regex.test("APPLE")); // true
console.log(regex.test("apple")); // true
console.log(regex.test("ApPlE")); // true
console.log(regex.test("banana")); // false
