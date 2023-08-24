var activeUsers = [];
activeUsers.push("Bill");
var ageList = [45, 56, 13];
ageList[0] = 22;
console.log("active users: ", activeUsers);
console.log("age list: ", ageList);
var bools = [];
var coords = [];
coords.push({ x: 23, y: 8 });
// multidimensional arrays
var board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
var demo = [[[1]]];
// ****************************************************
// Exercises
// ****************************************************
// Part 1 - Create an empty array of numbers called "ages"
var ages = [];
// Part 2 - Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// Part 4 Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
}
