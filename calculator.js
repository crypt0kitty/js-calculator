// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }
//
// const calculateUserInput = function (error, promptInput) {
//   console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
// }

// Example manual testing of calculator.

// program for a simple calculator
let result;

const calculateUserInput = prompt("Welcome to the Calculator Program! Please select an operator: add(+), subtract(-), multiply(*) or divide(/) ");

//user input
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

switch(calculateUserInput) {
  case "+":
  case "add":
    result = num1 + num2;
    console.log(`Equation: ${num1} + ${num2} = ${result}`);
    console.log(`Adding: ${num1} + ${num2}`);
    console.log(`Final answer: ${result}`)
    break;

  case "-":
  case "subtract":
    result = num1 - num2;
    console.log(`Equation: ${num1} - ${num2} = ${result}`);
    console.log(`Subtracting: ${num1} - ${num2}`);
    console.log(`Final answer: ${result}`)
    break;

  case "*":
  case "multiply":
    result = num1 * num2;
    console.log(`Equation: ${num1} * ${num2} = ${result}`);
    console.log(`Multiplying: ${num1} * ${num2}`);
    console.log(`Final answer: ${result}`)
    break;

  case "/":
  case "divide":
    result = num1 / num2;
    console.log(`Equation: ${num1} / ${num2} = ${result}`);
    console.log(`Dividing: ${num1} / ${num2}`);
    console.log(`Final answer: ${result}`)
    break;

  default:
    console.log("unsupported operator");
    break;
}

// This exports the function so index.js can import it.
// exports.calculateUserInput = calculateUserInput;