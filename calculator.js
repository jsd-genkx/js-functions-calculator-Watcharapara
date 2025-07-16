"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division

function addnumbers (num1, num2) {
  return num1 + num2;
}
function Subtractionnumbers (num1, num2) {
    return num1 - num2;
}
function Multiplicationnumbers (num1, num2) {
    return num1 * num2;
}
function Divisionnumbers (num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero"
    }
    return num1 / num2;
}

console.log(addnumbers(4 , 5));   //output = 9
console.log(Subtractionnumbers(10 , 5));  //output =5
console.log(Multiplicationnumbers(8 , 2)); //output =16
console.log(Divisionnumbers(4,2)); //output =2

// Step 02: Create a Validation Function for Inputs

function validateinput (num1,num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "Both inputs must be numbers";
    }
        return null;
    }

console.log(validateinput(10 ,3));
console.log(validateinput(10 ,"a"));


// Step 03: Create a Calculator Function to Combine the Above Functions


function Calculator (num1, num2, operation) {

    const validateerror = validateinput(num1, num2);
    if (validateerror) return validateerror;  

    switch (operation) {
    case "add":
      return addnumbers(num1, num2);
    case "subtract":
      return Subtractionnumbers(num1, num2);
    case "multiply":
      return Multiplicationnumbers(num1, num2);
    case "divide":
      return Divisionnumbers(num1, num2);
    default:
      return 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".';
  }

}

console.log (Calculator(10, 5, "add")); // returns 15
console.log (Calculator(10, 5, "divide")); // returns 2
console.log (Calculator(10, 0, "divide")); // returns 'Cannot divide by zero'
console.log (Calculator(10, 5, "unknown")); // returns 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".'
