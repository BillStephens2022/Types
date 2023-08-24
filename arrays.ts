const activeUsers: string[] = [];
activeUsers.push("Bill");

const ageList: number[] = [45, 56, 13];
ageList[0] = 22;

console.log("active users: ", activeUsers);
console.log("age list: ", ageList);

const bools: boolean[] = [];

// arrays of custom types - i.e. an array of Point objects
type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

// multidimensional arrays
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1]]];

// ****************************************************
// Exercises
// ****************************************************

// Part 1 - Create an empty array of numbers called "ages"

const ages: number[] = [];

// Part 2 - Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [];

// Part 3 - Create a Product type that contains a name and a price.
// An example could be:
//  {"name": "coffee mug", "price": 11.50}

type Product = {
    name: string,
    price: number
}


// Part 4 Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
}