//  Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” 

// var city = prompt("pleaser enter your city name : ")
// if(city==="karachi"){
//     console.log("welcome to city of lights")
// }
// else{
//     console.log("welcome to our city :" , city)
// }

//  Write a program to take “gender” as input from user. If the 
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("please confirm your gender:").toLowerCase()
// if (gender==="male"){
//     console.log("Good Morning Sir.")
// }
// else if (gender === "female"){
//     console.log("Good Morning Ma'am.")
// }
// else{
//     console.log("please enter correct gender")
// }
//  Write a program to take input color of road traffic signal 
// from the user & show the message according to this table: 
// Signal color  
// Red 
// Yellow 
// Green 
// Message 
// Must Stop 
// Ready to move 
// Move now
// var color = prompt("please enter traffic signal color :");
// if(color === "red"){
//     console.log("Must Stop")
// } else if (color === "yellow"){
//     console.log("Ready to move")
// } else if (color === "green"){
//     console.log("Move now")
// } else{
//     console.log("please enter correct color")
// }

//  Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car” 
// var remainingFuel = Number(prompt("please enter remaining fuel in car :"))
// if(remainingFuel <=0.25){
//     console.log("please refill the fuel in your car")
// }else{
//     console.log("sufficient fuel")
// }

//  Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute 
// grade as per following table: 
// Show the total marks, marks obtained, percentage, grade & remarks.

// var marksObtSub1=+prompt("enter subject1 marks:")
// var marksObtSub2=+prompt("enter subject2 marks:")
// var marksObtSub3=+prompt("enter subject3 marks:")
// var totalMarks = 300;
// var totalmarksObtain = marksObtSub1+marksObtSub2+marksObtSub3
// var percentage = (totalmarksObtain/totalMarks)*100
// // console.log(percentage)

// var grade,remarks;

// if(percentage>=80){
//     grade =" A-one"
//     remarks = "Excellent work"
// }else if (percentage>=70){
//     grade = "A"
//     remarks = "Good work"
// }else if (percentage>=60){
//     grade= "B"
//     remarks= "you need to improve "
// }
// else {
//     grade = "fail"
//     remarks="Sorry stay same class"
// }

// console.log("MARK SHEET")
// console.log("Total Marks:",totalMarks)
// console.log("Total marks obtain:",totalmarksObtain)
// console.log("percentage:",percentage,"%")
// console.log("Grade :",grade)
// console.log("Remarks:",remarks)

// Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”.
//   var secretNumber = 7;

//     // Ask user to guess
//     var userGuess = Number(prompt("Guess a number between 1 and 10"));

//     // Check conditions
//     if (userGuess === secretNumber) {
//         alert("Bingo! Correct answer");
//     } 
//     else if (userGuess + 1 === secretNumber) {
//         alert("Close enough to the correct answer");
        
//     } 
//     else if(userGuess-1 === secretNumber){
//         alert("Close enough to the correct answer")
//     }
//     else if(userGuess>=11){
//         alert("Guess a number between 1 to 10")
//     }
//     else {
//         alert("Try again!");
//     }
//  Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number 
// is divisible by 3. 
// var number = +prompt("enter a number which divisible by 3")
// if (number%3 === 0){
//     alert("given number divisible by 3")

// }else{
//     alert("sorry its not")
// }
//  Write a program that checks whether the given input is an 
// even number or an odd number. 
// var number = Number(prompt("enter an number :"))
// if(number%2 === 0){
//     alert("given number is even number")
// }
// else{
//     alert("given number is odd number")
// }
// Write a program that takes temperature as input and 
// shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var T = +prompt("enter a temperature")
// if(T>=40){
//     alert("It is too hot outside.")
// }
// else if (T>=30){
//     alert("the weather today is normal")
// }
// else if (T>=20){
//     alert("the weather today is cool")
// }
// else if (T>=10){
//     alert("omg! todat weather is so cool")
// }
// Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.
//  var num1 = Number(prompt("Enter first number"));
//     var num2 = Number(prompt("Enter second number"));
//     var operator = prompt("Enter operation (+, -, *, /, %)");

//     var result;

//     // Calculator using if statements
//     if (operator === "+") {
//         result = num1 + num2;
//     } 
//     else if (operator === "-") {
//         result = num1 - num2;
//     } 
//     else if (operator === "*") {
//         result = num1 * num2;
//     } 
//     else if (operator === "/") {
//         result = num1 / num2;
//     } 
//     else if (operator === "%") {
//         result = num1 % num2;
//     } 
//     else {
//         alert("Invalid operator");
//     }

//     // Show result
//     if (result !== undefined) {
//         alert("Result: " + result);
//     }