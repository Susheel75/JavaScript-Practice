function age(e1,e2)
{
    if(e1.age>e2.age)
    {
        return 1;
    }
    else
    {
        return -1;
    }
}

var ageArr = [
    {name: 'Alian ki Nani', age: 200000},
    {name: 'John', age: 25},
    {name: 'Alian ke Mummy', age: 1500},
    {name: 'Alian ke Papa', age: 2000},
    {name: 'Jane', age: 30},
    {name: 'Jim', age: 20},
    {name: 'Alian', age: 100},
    {name: 'Susheel', age: 24},
    {name: 'amit', age: 25},
    {name: 'Alian ka Beta', age: 200},
    {name: 'rahul', age: 24},
    {name: 'vishal', age: 20},
    {name: 'vikas', age: 16},
    {name: 'avnish', age: 23},
    {name: 'bhupesh', age: 21},
];
console.log(ageArr.sort(age));
































var bhupeshAge = 24;  
var mariyamAge = 24;   
var MarriageAge = 18;  

if (bhupeshAge >= MarriageAge && mariyamAge >= MarriageAge) {
    console.log("Both Bhupesh and Mariyam are eligible for marriage. क्या बात है ");
    console.log("Proceeding with engagement and wedding planning...");
    console.log("Engagement Ceremony: Bhupesh and Mariyam are now engaged! बधाई हो ");
    console.log("Wedding preparations are underway...");
    console.log("Wedding Date Set: In 3 months.");
    console.log("Wedding ceremony completed! Congratulations to the newlywed couple.");
} 
else {
    console.log("Unfortunately, marriage cannot proceed due to age restrictions. लेकिन करवानी तो पड़ेगी बड़े जो हो रहे है ");
    if (bhupeshAge < MarriageAge) {
        console.log("Bhupesh is too young for marriage. पर घर वाले कह रहे हैं की लड़का बड़ा हो गया है हमारा ");
    }
    if (mariyamAge < MarriageAge) {
        console.log("Mariyam is too young for marriage. पर घर वाले कह रहे हैं की लड़की  बड़ा हो गया है हमारी");
    }
}
console.log("Marriage process concluded. बधाई हो ");
