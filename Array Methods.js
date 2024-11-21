// 1.//
// push=> 
//     /**
//      * Appends new elements to the end of an array, and returns the new length of the array.
//      * @param items New elements to add to the array.
//      */
// push(...items: T[]): number;
console.log("1. Push Method=>")
var arr = [1,2,3,4,5];
console.log("The PUSH Method is : Appends new elements to the end of an array, and returns the new length of the array.")
console.log("Before push, the array looks like: ", arr);
var arr1 = arr.push(6)
console.log("After push the element, the array looks like :", arr);
console.log("The length of the Array After adding new element in the array is: ", arr1)
console.log("")


// // // 2.
// // unshift=>
//     /**
//      * Inserts new elements at the start of an array, and returns the new length of the array.
//      * @param items Elements to insert at the start of the array.
//      */
// unshift(...items: T[]): number;
console.log("")
console.log("2. Unshift Method=>")
console.log("The UNSHIFT Method is : inserts new elements at the start of an array, and returns the new length of the array.");
var arr = [10,9,8,7,6];
console.log("Before unsift, the array looks like: ", arr);
arr.unshift(11);
console.log("After unsift, the new array looks like: ", arr);
arr.length;
console.log("The length of the Array After adding new element in the array is: ", arr.length);


//3. 
// splice=>
    //     /**
//      * Adds or removes elements from an array, and returns the array of removed elements.
//      * @param start The index at which to start changing the array.
//      * @param deleteCount The number of elements to remove.
//      * @param items The elements to add to the array.
//      */
// splice(start: number, deleteCount: number, ...items: T[]): T[];
console.log("")
console.log("3. Splice Method=>")
console.log(`Adds or removes elements from an array, and returns the array of removed elements.
start The index at which to start changing the array.
deleteCount The number of elements to remove.
items The elements to add to the array.`);
var arr = [1,2,3,4,5,6,7,8,];
console.log("");
console.log("Before Splice, the array looks like: ", arr);
var arr1 = arr.splice(3, 2, 10, 20, 30);
console.log("After Splice, the new array looks like: ", arr);
console.log("The removed elements from the array are: ", arr1);


//4.
// pop=>
    //     /**
//      * Removes the last element from an array and returns that element. This method changes the length
//      * of the array.
//      */
// pop(): T | undefined;
console.log("")
console.log("4. Pop Method=>")
console.log(`The POP Method is : Removes the last element from an array and returns that element.
This method changes the length of the array.`);
var arr = [1,2,3,4,5,6,7,8,];
console.log("");
console.log("Before Pop, the array looks like: ", arr);
var lastElement = arr.pop();
console.log("After Pop, the new array looks like: ", arr);
console.log("The last element removed from the array is: ", lastElement);
console.log("The length of array is : ", arr.length);


// 5.
// shift=>
    //     /**
//      * Removes the first element from an array and returns that element. This method changes the length
//      * of the array.
//      */
// shift(): T | undefined;
console.log("")
console.log("5. Shift Method=>")
console.log(`The Shift Method is : Removes the first element from an array and returns that element.
This method changes the length of the array.`)
var arr = [1,2,3,4,5,6,7,8,];
console.log("");
console.log("Before Shift, the array looks like: ", arr);
var firstElement = arr.shift();
console.log("After Shift, the new array looks like: ", arr);
console.log("The first element removed from the array is: ", firstElement);
console.log("The length of array is : ", arr.length);



arr.sort
