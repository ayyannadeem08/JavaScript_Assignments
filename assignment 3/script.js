function calculate() {
  var num1 = Number(prompt("Enter first number:"));

  var num2 = Number(prompt("Enter second number:"));

  var operator = prompt("Enter operator (+, -, *, /):");

  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero!";
      }

      break;

    default:
      result = "Invalid Operator!";
      break;
  }

  alert(result);
}
