/*1. Practice: Transform each item in an array.
Example: Prefix each name in an array with "Hello, ".*/

const names = ["Alice", "Bob", "John", "Rock"];
const greetings = names.map(name => `Hello, ${name}`);
console.log(greetings)