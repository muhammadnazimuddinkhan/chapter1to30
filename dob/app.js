// Date of Birth (YYYY, MM-1, DD)
var dob = new Date(1974, 4, 28); // 15 June 2005

// Current Date & Time
var now = new Date();

// Difference in milliseconds
var diff = now - dob;

// Convert to seconds
var totalSeconds = Math.floor(diff / 1000);

var seconds = totalSeconds % 60;
var totalMinutes = Math.floor(totalSeconds / 60);

var minutes = totalMinutes % 60;
var totalHours = Math.floor(totalMinutes / 60);

var hours = totalHours % 24;
var totalDays = Math.floor(totalHours / 24);

var years = Math.floor(totalDays / 365);
var months = Math.floor((totalDays % 365) / 30);
var days = (totalDays % 365) % 30;

// Display Age in Console
console.log("Age:");
console.log("Years:", years);
console.log("Months:", months);
console.log("Days:", days);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
