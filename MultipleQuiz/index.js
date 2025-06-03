//Factorial
function Factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  }
  return n * Factorial(n - 1);
}
console.log("The Fact of 5 is :", Factorial(5));

//Sum of an Array
function SumArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr.shift() + SumArray(arr);
}
console.log("The Sum Of [1,2,3,4,5] is :", SumArray([1, 2, 3, 4, 5]));

// fibonacci
function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("The fibonacci of 6 is :", fibonacci(6));

//Flatten a Nested Array (Recursion on complex data)
function Flatten(arr, result = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      Flatten(item, result);
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(Flatten([1, [2, [3, [4]]]]));
console.log(Flatten([1, [2, [3, 4], 5], 6, ["hello"]]));

//power of element
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
console.log("the power of 2,5 is ", power(2, 5));
//Recursive Countdown
function countDown(n) {
  console.log(n);
  if (n == 0) {
    return "Done";
  }
  return countDown(n - 1);
}
console.log(countDown(5));
//Recursive Sum of Digits
function sumDigits(n) {
  const Digits = String(n).split("").map(Number);
  if (Digits.length === 0) {
    return 0;
  }
  return Digits[0] + sumDigits(Number(Digits.slice(1).join("")));
}
console.log("The Sum of (4) is", sumDigits(4));
