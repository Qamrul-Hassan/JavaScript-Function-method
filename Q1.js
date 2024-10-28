/*1. Practice: Transform each item in an array.
Example: Prefix each name in an array with "Hello, ".*/

const names = ["Alice", "Bob", "John", "Rock"];
const greetings = names.map(name => `Hello, ${name}`);
console.log(greetings)

/* 2.Multiply each number in an array by 2
 use map() to create a new array where each number is doubled:*/

const  numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.map(number => number * 2);
console.log(evenNumbers);

/* 3. Convert an array of numbers to their string representations
This can also be done with map() by converting each number to a string: */

const nos = [1, 2, 3, 4, 5,];
const stringNos =nos.map (no => no.toString());
console.log(stringNos);