// calculator.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Simple Calculator");
console.log("Available operations: add, sub, mul, div");

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (add, sub, mul, div): ", (op) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (op) {
        case "add":
          result = a + b;
          break;
        case "sub":
          result = a - b;
          break;
        case "mul":
          result = a * b;
          break;
        case "div":
          if (b !== 0) result = a / b;
          else result = "Error: Cannot divide by zero!";
          break;
        default:
          result = "Invalid operation.";
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
