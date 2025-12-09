/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-11-20
 * @fileoverview this program helps you calculate the cost of your nuts, bolts and washers. it also tells you if your order doesnt seem right.
 */

//constants for costs of the items
const bolt_cost = .10
const nut_cost = .05
const washer_cost = .03

//variables for the amount of items tat will be bought
let bolt: number;
let nut: number;
let washer: number;

//prompts
bolt =  Number(prompt("How many bolts are you planning to buy?"));
nut = Number(prompt("What about nuts?"));
washer = Number(prompt("and how about washers?"));

//total cost calculation and print for the total cost
let total_cost = (bolt_cost * bolt) + (nut_cost * nut) + (washer_cost * washer);
console.log(` the total cost of your purchase is $${total_cost.toFixed(2)}`);

//if, else statements
if (bolt > nut) {
  console.log("Check the Order - not enough nuts for the bolts you purchased.");
} if (washer < bolt) {
  console.log("Check the Order - not enough washers for the bolts you purchased.");
} else {
  console.log("Your Order is Ok");
}
console.log("\nDone.");