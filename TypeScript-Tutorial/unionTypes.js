var age = 21;
age = "24"; // ok, since type allows number or string type
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 }; //ok, since coordinates will accept a Point_1 or Loc type
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
printAge(23);
printAge("48");
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
var tax = calculateTax(107.3, 0.06);
console.log("tax using num type: ", tax);
tax = calculateTax("$107.30", 0.06);
console.log("tax using string type: ", tax);
// Union Types and Arrays
var nums = [1, 2, 3, 4];
// const stuff: any[] = [1,2,3,4, true, "asdsf", {}];
var stuff = []; // an array of arrays of numbers or strings
var coords_1 = [];
coords_1.push({ lat: 321.213, long: 23.334 });
coords_1.push({ x: 213, y: 43 });
// Literal Types  the value for the variable can only be the value passed as the type.
var zero;
var hi;
var mood = "Happy";
mood = "Sad"; // this is OK
var today = "Monday";
today = "Sunday"; // OK since this is one of the DayOfWeek type values.
// today = "Fri";  // Not OK since "Fri" is not allowed per the type definition.
// ***********************************
// Exercises
// ***********************************
// Part 1 - Create a variable called highScore that can be a number or a boolean
var highScore = 0;
// Part 2 - create an array called stuff
// it can be an array of numbers or an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff_1 = [];
var colors = [];
// Part 6 - Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array
// with the same format.
function greet(person) {
    if (typeof person === "string") {
        console.log("Hello ".concat(person));
    }
    else {
        for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
            var p = person_1[_i];
            console.log("Hello ".concat(p));
        }
    }
}
var personName = "Bill";
var peopleNames = ["Carolyn", "Dave", "Ed"];
console.log("GREETING ONE PERSON: ");
greet(personName);
console.log("GREETING MULTIPLE PEOPLE: ");
greet(peopleNames);
