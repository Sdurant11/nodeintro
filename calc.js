function doMath (num1, operator, num2){
    switch (operator) {
      case '+':
        return num1 + num2;
        break;
      case '-':
        return num1 - num2;
        break;
      case '/':
        return num1 / num2;
        break;
      case '*', 'x':
        return num1 * num2;
        break;
    }
}

var num1 = process.argv[2];
var operator = process.argv[3]
var num2 = process.argv[4];

var answer = doMath(num1, operator, num2);
console.log(answer);