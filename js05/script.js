// Task 1: City Name
var cityName = prompt("Enter city name:");
if (cityName.toLowerCase() === "karachi") {
    document.getElementById('output').innerHTML = "Welcome to city of lights";
}

// Task 2: Gender
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    document.getElementById('output').innerHTML = "Good Morning Sir";
} else if (gender.toLowerCase() === "female") {
    document.getElementById('output').innerHTML = "Good Morning Ma'am";
}

// Task 3: Traffic Signal
var signalColor = prompt("Enter traffic signal color:");
if (signalColor.toLowerCase() === "red") {
    document.getElementById('output').innerHTML = "Must Stop";
} else if (signalColor.toLowerCase() === "yellow") {
    document.getElementById('output').innerHTML = "Ready to move";
} else if (signalColor.toLowerCase() === "green") {
    document.getElementById('output').innerHTML = "Move now";
}

// Task 4: Remaining Fuel
var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
if (remainingFuel < 0.25) {
    document.getElementById('output').innerHTML = "Please refill the fuel in your car";
}

// Task 5: Conditional Statements
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Task 6: Percentage Calculator
var subject1 = parseInt(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseInt(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseInt(prompt("Enter marks obtained in subject 3:"));
var totalMarks = 300;
var totalObtainedMarks = subject1 + subject2 + subject3;
var percentage = (totalObtainedMarks / totalMarks) * 100;
var grade, remarks;
if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
document.getElementById('output').innerHTML = "<p>Total Marks: " + totalMarks + "</p>\
                                                <p>Marks Obtained: " + totalObtainedMarks + "</p>\
                                                <p>Percentage: " + percentage.toFixed(2) + "%</p>\
                                                <p>Grade: " + grade + "</p>\
                                                <p>Remarks: " + remarks + "</p>";

// Task 7: Guess Game
var secretNumber = 7;
var userGuess = parseInt(prompt("Guess the secret number (from 1 to 10):"));
if (userGuess === secretNumber) {
    document.getElementById('output').innerHTML = "Bingo! Correct answer";
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    document.getElementById('output').innerHTML = "Close enough to the correct answer";
}

// Task 8: Divisible by 3
var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    document.getElementById('output').innerHTML = number + " is divisible by 3";
}

// Task 9: Even or Odd
var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    document.getElementById('output').innerHTML = number + " is even";
} else {
    document.getElementById('output').innerHTML = number + " is odd";
}

// Task 10: Weather Message
var temperature = parseInt(prompt("Enter the temperature in Celsius:"));
if (temperature > 40) {
    document.getElementById('output').innerHTML = "It is too hot outside.";
} else if (temperature > 30) {
    document.getElementById('output').innerHTML = "The Weather today is Normal.";
} else if (temperature > 20) {
    document.getElementById('output').innerHTML = "Today’s Weather is cool.";
} else if (temperature > 10) {
    document.getElementById('output').innerHTML = "OMG! Today’s weather is so Cool.";
}

// Task 11: Calculator
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else if (operation === '%') {
    result = firstNumber % secondNumber;
}
document.getElementById('output').innerHTML = "Result: " + result;
