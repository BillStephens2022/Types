// Interfaces are very similar to types and can sometimes either can be used.  
// These are the key differences between "interfaces" and "types":
// 1 - interfaces only used with objects.  types can be used with objects as well as other data types.
// 2 - interfaces can be "re-opened" and properties can be added on
// 3 - interfaces allow inheritances/extensions, types do not
// Use the type alias in the annotation
var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, ", congrats on turning ").concat(person.age, "!");
};
sayHappyBirthday({ name: 'Jerry', age: 42 });
var pt = { x: 124, y: 1234 };
var thomas = { first: "Thomas", last: "Hardy", nickname: "Tom", id: 21837 };
var james = { first: "James", last: "Perkins", id: 22464 }; // note: still OK because nickname is optional
var timothy = {
    id: 43266,
    first: "Timothy",
    last: "Watley",
    nickname: "Timmy",
    sayHi: function () {
        return "Hello!";
    },
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(.4));
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark: function () {
        return "WOOF WOOF";
    }
};
var chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark: function () {
        return "Bark";
    },
    job: "guide dog"
};
var Pierre = {
    name: "Pierre",
    id: 123897,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JavaScript", "Python"],
};
