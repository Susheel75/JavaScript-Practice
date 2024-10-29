	/*
    
    Write a program that takes a string input from the user
    and counts the number of vowels in it. Explain your code
    step-by-step.
    
    */


    
function countVowels(str) {
    
    var vowels = 'aeiouAEIOU';
    var count = 0; 

    for (var i = 0; i < str.length; i++)  {
        
        if (vowels.includes(str[i])) {
            count++; 
        }
    }

    return count;
}

var a = 'Susheel Prajapati';
console.log(countVowels(a));
