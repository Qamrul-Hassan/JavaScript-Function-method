/*2. filter()
Practice: Filter out elements based on a condition.
Example: Get all products priced above a certain amount.*/

let products = [
    { name: "laptop", price: "70000"},
    {name: "Phone", price: "35000"},
    {name: "Tablet", price: "24000"},
];

let expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);

/*Filter out only even numbers from an array
Use the filter() method to keep only even numbers in a new array:*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 ===0);
console.log(evenNumbers);

/* Get an array of students who passed (score > 50) from a list of students 
This example uses filter() to keep only students with scores greater than 50:*/

const students = [
   { name: "Arif", score: "45" },
   { name: " Sohan", score: "75"},
   { name: "Karim", scroe: "60"},
   { name: "Rahim", score: "30"},
   { name: "Jibon", score: "85"} 
];

const passingStudents = students.filter(student => student.score > 50);
console.log(passingStudents);

