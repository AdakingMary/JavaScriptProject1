// A function for creating a reverse string

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substring(1)) + str.charAt(0);
}

let string1 = "BoardInfinity";

console.log(reverseString(string1));

// A function that counts character in a string

let str = "Hello Aisha";
console.log(str.trim().length);

// A function that counts the number of characters in a string
const string = "hello kehinde";

let result = str.charAt(0).toUpperCase() + string.slice(1);
console.log(result);

// Functions to find the maximum and minimum values in an array of numbers.

let numbers = [3, 5, 6, 7, 9, 32];
let miniValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log(`Minimum value is ${miniValue} and Maximum value is ${maxValue}`);

// A function that calculates the sum of all elements in an array
function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 5));

// A function that filters out elements from an array based on a given condition
const numArray = [1, 2, 3, 4, 5];
const filteredArray = numArray.filter((num) => num !== 3);
console.log(filteredArray);

// factorial number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Factorial of 0 and 1 is 1
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
const number = 5;
console.log("Factorial of", number, "is:", factorial(number)); // Output: Factorial of 5 is: 120

// Prime number
function isPrime(num) {
  // Check if the number is less than 2 (prime numbers start from 2)
  if (num < 2) {
    return false;
  }
  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, it's not prime
    }
  }
  return true; // If not divisible, it's prime
}

const TestNumber = 13;
console.log(TestNumber, "is prime?", isPrime(TestNumber)); // Output: 13 is prime? true

// Example usagfunction generateFibonacci(numTerms) {
const fibonacciSequence = [0, 1]; // Initialize the sequence with the first two terms

// Generate Fibonacci sequence
for (let i = 2; i < numTerms; i++) {
  const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  fibonacciSequence.push(nextTerm);
  return fibonacciSequence;
}

// Example usage:
const numberOfTerms = 10;
const FibonacciSequence = generateFibonacci(numberOfTerms);
console.log(
  "Fibonacci sequence with",
  numberOfTerms,
  "terms:",
  fibonacciSequence
);
