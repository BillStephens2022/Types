function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: point.x * 2, y: point.y * 2 };
}

// type alias

type Point = {
  x: number;
  y: number;
};

let coordinate2: Point = { x: 34, y: 2 };

function randomCoordinate2(): Point {
  // returns a Point
  return { x: Math.random(), y: Math.random() };
}

function doublePoint2(point: Point): Point {
  // accepts a Point as an argument, and returns a Point
  return { x: point.x * 2, y: point.y * 2 };
}

// Nested Objects

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log("Payout: ", earnings);
printSong(mySong);

// Optional properties

type Point1 = {
  x: number;
  y: number;
  z?: number; // ? makes it an optional property
};

const myPoint1: Point1 = { x: 1, y: 2, z: 4 };
const myPoint2: Point1 = { x: 4, y: 8 }; // note that code editor is OK with this since z is optional on Point1 type.

// readonly modifier
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12837,
  username: "catgurl",
};

console.log("user id: ", user.id);
// user.id = 238974  // will not be able to change the id once set since it is readonly.

// Intersection Types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful; // creates a combined type inclusive of properties of both

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    // combines Cat & Dog and adds another custom property
    age: number;
  };

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
};


