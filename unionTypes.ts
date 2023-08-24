let age: number | string = 21;
age = "24"; // ok, since type allows number or string type

type Point_1 = {
  x: number;
  y: Number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point_1 | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 }; //ok, since coordinates will accept a Point_1 or Loc type

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("48");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }

  return price * tax;
}

let tax = calculateTax(107.3, 0.06);
console.log("tax using num type: ", tax);

tax = calculateTax("$107.30", 0.06);
console.log("tax using string type: ", tax);

// Union Types and Arrays

const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1,2,3,4, true, "asdsf", {}];
const stuff: (number | string)[] = []; // an array of arrays of numbers or strings

const coords_1: (Point_1 | Loc)[] = [];
coords_1.push({ lat: 321.213, long: 23.334 });
coords_1.push({ x: 213, y: 43 });

// Literal Types  the value for the variable can only be the value passed as the type.
let zero: 0;
let hi: "hi";

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad"; // this is OK
// mood = "Jubilant"; // this is not OK since not of "Happy" or "Sad" type.

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";
today = "Sunday"; // OK since this is one of the DayOfWeek type values.
// today = "Fri";  // Not OK since "Fri" is not allowed per the type definition.

// ***********************************
// Exercises
// ***********************************

// Part 1 - Create a variable called highScore that can be a number or a boolean
let highScore: number | boolean = 0;

// Part 2 - create an array called stuff
// it can be an array of numbers or an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff_1: number[] | string[] = [];

// Part 3 - create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", "Expert"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Part 4 - Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// Part 5 - Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

// Create an array called colors that can hold a mixture of RGB and HSL color types

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

const colors: (RGB | HSL)[] = [];

// Part 6 - Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array
// with the same format.

function greet(person: string | string[]): void {
  if(typeof person === "string") {
    console.log(`Hello ${person}`);
  } else {
    for (let p of person) {
        console.log(`Hello ${p}`);
    }
  }
}

let personName = "Bill";
let peopleNames = ["Carolyn", "Dave", "Ed"];
console.log("GREETING ONE PERSON: ");
greet(personName);
console.log("GREETING MULTIPLE PEOPLE: ");
greet(peopleNames);