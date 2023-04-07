/*함수*/

//결과값을 아래에서 계속 사용하기 위해서 return사용

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

let result = calculator.divide(10, 5);
console.log(result);
