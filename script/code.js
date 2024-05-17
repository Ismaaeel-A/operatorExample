let num1 = 2,
    num2 = 4,
    num3 = 5

// Arithmetic operators: +, - , *, % (modulus), /, ** (exponent), ++, --

/* console.log(num3 % num1) */
/* console.log(num3 ** num1) */

// Assignment operators: =, += *=, /=, %=, etc..

/* num2 += num1 */
/* num2 *= num1 */
/* console.log(num2) */

// Comparison operators: ==, <, >, <=, >=, !=, ===
/* console.log(num2 > num1)
console.log(num2 == num1) //checks if its the same value
console.log(num2 === num1) //chexks if its the same value and data type
/* console.log(num2 <= num1)
console.log(num2 >= num1) */

// Ternary operator: ? :
// Logical operators: &&, ||, !
console.log(num2 == num2 && num3 < num2) //and gate
console.log(num2 == num2 || num3 < num2) //or gate
/* console.log(num2 == num2!num3 < num2) */ //error





// Type of operators: typeof and instanceof
//typeof returns data type
//



let obj1 = new Number(12)
console.log(obj1 instanceof Number)


// Bitwise operators (Binary operators): &, |, ~(NOT), ^(XOR), << (left shift), >> (Right shift)
/*
2 & 3 =
2 = 0010
3 = 0011
========
=   0010
*/























let dataEntry = document.querySelector('[data-entry]')

function display(value) {
    dataEntry.value += value
}

//<button onclick="display('7')">