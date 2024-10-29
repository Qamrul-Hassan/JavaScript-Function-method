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