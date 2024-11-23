
var date1 = new Date("2011-11-11");
var date2 = new Date("2012-11-23");

var time1 = date1.getTime();
var time2 = date2.getTime();

var timeDiff = time2 - time1; 

var diffInDays = timeDiff / (1000 * 60 * 60 * 24);  // Convert to days
var diffInHours = timeDiff / (1000 * 60 * 60);      // Convert to hours
var diffInMinutes = timeDiff / (1000 * 60);         // Convert to minutes
var diffInSeconds = timeDiff / 1000;                // Convert to seconds

console.log("Difference in Days:", diffInDays);
console.log("Difference in Hours:", diffInHours);
console.log("Difference in Minutes:", diffInMinutes);
console.log("Difference in Seconds:", diffInSeconds);
