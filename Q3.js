/*3. reduce()
Practice: Sum up or accumulate data in an array.
Example: Calculate the total price of all products in an array.*/

let prices = [1400, 500, 300];
let totalPrice = prices.reduce ((total, price) => total+price, 0);
console.log(totalPrice);