/*

Write a function that implements basic 
string compression, using the counts 
of repeated characters, e.g., input aabcccccaaa becomes a2b1c5a3.

*/
/**
//  * @param {character[]} chars
//  * @return {number}
//  */

function compressString(str) {
    if (str.length === 0) 
        return '';

    var compress = '';
    var count = 1; 

    for (var i = 1; i < str.length; i++) 
        {
        if (str[i] === str[i - 1]) 
            {
            count++; 
            } 
        else 
        {
            
            compress += str[i - 1] + count;
            count = 1; 
        }
    }
    compress += str[str.length - 1] + count;

    return compress;
}
var a='aabcccccaaa';
console.log(compressString(a)); 
