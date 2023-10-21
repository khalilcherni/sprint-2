// Functions-Extra-Material
// Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge.

// Look at the examples below to get an idea of what the function should do:

// Examples
// basicCalculator(2, '+',  4) ➞ 6

// basicCalculator(6, '-', 5) ➞ 1

// basicCalculator(12, '/', 3) ➞ 4

// basicCalculator(3, '*', 4) ➞ 12

// basicCalculator(1, '/', 0) ➞ null
// Division by zero is not possible

// basicCalculator(1, 'x', 0) ➞ null
// 'x' is not an operator


// Booleans-Extra
// Write a function called isLeapYear that takes a year as input and returns true if the year is a leap year (i.e., it's divisible by 4, but not divisible by 100 unless it's also divisible by 400), and false otherwise.

// Write a function called isValidPassword that takes a string as input and returns true if it meets the following criteria:
// It has at least 8 characters
// It contains at least one uppercase letter, one lowercase letter, and one number
// It does not contain any spaces
// The function should return false otherwise.

// Write a function called hasUniqueCharacters that takes a string as input and returns true if all the characters in the string are unique (i.e., none of the characters repeat), and false otherwise.

// Write a function called isPrimeProduct that takes two positive integers as input and returns true if their product is a prime number, and false otherwise.main.js



function calculator(a,o,b) {
    if (o === '+') {
        return a + b
  }else    if (o === '-') {
        return a - b
}else    if (o === '*') {
        return a * b
    }
    else if (o==='/'){
        return a/b
    }
     if (b===0){
        return null

    }

    function basicCalculator(a, o, b) {
     if (o === '+') {
        return a + b;
      } else if (o === '-') {
         return a - b;
        } else if (o === '*') {
          return a* b;
        } else if (o === '/') {
          if (b === 0) {
            return null; 
          }
          return a / b;
        } else {
          return null; 
        }
      }
}
2//
function isLeapYear(x){
  return  (x%4===0 && x%100 !==0) ||(x%400===0) 
}
3//
function isValidPassword(password){
    var uppercaseRegex = /[A-Z]/
    var lowercaseRegex = /[a-z]/
    var numberRegex = /\d/
    if ((password.length>=8)&&(uppercaseRegex&&lowercaseRegex)&& numberRegex.test(password))
    {return true }
    else {
        return false
    }
}



// Write a function called hasUniqueCharacters that takes a string as input and returns true if all the characters in the string are unique (i.e., none of the characters repeat), and false otherwise.
var format = /[!@#$%^&*()_+-=[]{};':"\|,.<>/?]+/
function hasUniqueCharacters(chara){
  if (format.test(chara)){
    return "true"
  }else{
    return "false"
  }
}
// Write a function called isPrimeProduct that takes two positive integers as input and returns true if their product is a prime number, and false otherwise.

function primenums(num1,num2){
  var prime=num1+num2
  if (prime===2 && 3 && 5 && 7 && 11 && 13 && 17 && 19 && 23 && 29 && 31 && 37 && 41 && 43 && 47 && 53 && 59 && 61 && 67 && 71 && 73 && 79 && 83 && 89 && 97){
    return "prime number"
  }return "false"
}

