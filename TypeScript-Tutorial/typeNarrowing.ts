// Typeof Guards
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Guards
const el = document.getElementById("idk");
if (el) {
  el.addEventListener("click", () => console.log("hi"));
} else {
  console.log("el doesn't exist.");
}

const printLetters = (word?: string) => {
  //note: question mark indicates an optional parameter
  if (word) {
    for (let char of word) {
      console.log(char.toUpperCase());
    }
  } else {
    console.log("YOU DID NOT PASS IN A WORD!");
  }
};

printLetters("YoYoMa");

// Equality Narrowing
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

someDemo(3, "3");

// Narrowing With the "In" Operator

const pet = { name: "Kitty", age: 20 };
if ("name" in pet) {
  console.log("your pet has a name: ", pet.name);
}

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    // typescript will look for numEpisodes in the media passed in.  if it contains numEpisodes, it must be of TVShow type, so by doing this we've narrowed down the type.  Otherwise it must be a Movie type.
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

// "Intanceof" Narrowing
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity, " is a User");
  } else {
    console.log(entity, " is a Company");
  }
}

// Type Predicates
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return "Meow";
  } else {
    return "Woof";
  }
}

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: "sheep"
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moo!";
    case "rooster":
      return "Cockadoodledoo!";
      case "sheep":
      return "Baaa!";
    // Exhaustive check if not all possible cases were handled
    default:
      // We should never make it here, if we handled all cases correctly
      // TypeScript will let you know if you didn't handle all possible cases (i.e. if we didn't have a case for "sheep").
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster"
}

console.log(getFarmAnimalSound(stevie));  // prints "Cockadoodledoo"

