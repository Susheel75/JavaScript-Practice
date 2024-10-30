	/*
    
    Write a program that takes a string input from the user
    and counts the number of consonants in it. Explain your code
    step-by-step.
    
    */



"use strict";    

function countConsonants(str) {
    
    var consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    var count = 0; 
    var searchedConsonants= "";

    for (var i = 0; i < str.length; i++)  {
        
        if (consonants.includes(str[i])) {
            searchedConsonants += str[i];
            count++; 
        }
    }
    console.log('Searched Consonants is: ',searchedConsonants);
    return count;
}
    
var a = 'Susheel Prajapati';
// var prompt = require("prompt-sync")();
// // var prompt = a();
// var userInput = prompt("Enter Letter to find Consonant: ");
console.log("Total No. of Consonants: ",countConsonants(a));