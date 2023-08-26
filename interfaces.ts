// Interfaces are very similar to types and can sometimes either can be used.  
// These are the key differences between "interfaces" and "types":
// 1 - interfaces only used with objects.  types can be used with objects as well as other data types.
// 2 - interfaces can be "re-opened" and properties can be added on
// 3 - interfaces allow inheritances/extensions, types do not

// an interface!

interface Person {
    name: string;
    age: number;
}

// Use the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${person.age}!`;
}

sayHappyBirthday({ name: 'Jerry', age: 42 });

interface Point {
    x: number;
    y: number;
}

const pt: Point = {x: 124, y: 1234};

// create optional & readonly properties

interface Person_2 {
    readonly id: number;  // after initialization cannot change a readonly property
    first: string;
    last: string;
    nickname?: string;  // '?' indicates the property is optional
}

const thomas: Person_2 = { first: "Thomas", last: "Hardy", nickname: "Tom", id: 21837 };
const james: Person_2 = { first: "James", last: "Perkins", id: 22464 }; // note: still OK because nickname is optional

// interface methods
interface Person_3 {
    readonly id: number;  // after initialization cannot change a readonly property
    first: string;
    last: string;
    nickname?: string;  // '?' indicates the property is optional
    sayHi: () => string;
}

const timothy: Person_3 = {
    id: 43266,
    first: "Timothy",
    last: "Watley",
    nickname: "Timmy",
    sayHi: () => {
        return "Hello!";
    },
}

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(.4));

// Reopening Interfaces

interface Dog {
    name: string;
    age: number;
}

// can reopen the Dog interface and add on additional properties which will be required
//  note: that this is not redeclaring 'Dog' this is just adding on additional properties

interface Dog {
   breed: string;
   bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF WOOF";
    }
};

// extending interfaces
// create a new type ServiceDog which inherits properties from Dog and adds additioanl property "job"

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";  // only allows these values
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark";
    },
    job: "guide dog"
}

// multiple inheritance
interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

// Engineer inherits properties from Human & Employee
interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const Pierre: Engineer = {
    name: "Pierre",
    id: 123897,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JavaScript", "Python"],
}



