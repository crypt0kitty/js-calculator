const calculateUserInput = function (error, promptInput) {
  //   console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  let result;

  //user input
  const num1 = parseFloat(promptInput.num1);
  const num2 = parseFloat(promptInput.num2);
  const operator = promptInput.operation;

  switch (operator.toLowerCase()) {
    case '+':
    case 'add':
      result = num1 + num2;
      console.log(`${num1} + ${num2} = ${result}`);
      break;
    case '-':
    case 'subtract':
      result = num1 - num2;
      console.log(`${num1} - ${num2} = ${result}`);
      break;
    case '*':
    case 'multiply':
      result = num1 * num2;
      console.log(`${num1} * ${num2} = ${result}`);
      break;
    case '/':
    case 'divide':
      result = num1 / num2;
      if (num1 === 0 || num2 === 0) {
        console.log('You cannot divide by zero');
        return
      } else {
        console.log(`${num1} / ${num2} = ${result}`);
        break;
      }
    default:
      console.log('unsupported operator');
      break;
  }
}

// const exampleAdditionInput = {
//   num1: 15,
//   num2: 0,
//   operation: '/',
// }

// calculateUserInput({}, exampleAdditionInput)
// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;
