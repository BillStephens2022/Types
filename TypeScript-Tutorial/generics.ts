// const nums: number[] = []
// alternative to the above is the below, which is a 'built-in generic':
const nums: Array<number> = [];

const colors: Array<string> = [];

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

interface Cat {
    name: string;
    breed: string;
}


// generic function that takes in an item as an argument and simply returns it
function identity<Type>(item: Type): Type {
  return item;
}

console.log(identity<string>("hello"));
console.log(identity<boolean>(false));
console.log(identity<number>(42));

// using a custom Type/Interface "Cat"
console.log(identity<Cat>({name: "Smiley", breed: "Cheshire"}));


// note: using "T" instead of "Type" below.  This is a common practice
function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}


// note that although '<string>' is provided when calling the function below,
// this isn't necessary in this case.  TypeScript is smart enough to infer the
// type, and won't show an error if you leave it out.  There are other situations
// where TypeScript can't automatically infer the type, so you will need to enter it.
console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([5, 7, 29, 42, 76, 534, 1982]));

// Generics with multiple types.  Common practice is to use 'T' as the first and then use 'U', then
// use 'V', etc...

// Typescript infers that the return type is the intersection of 'T' and 'U'.  No need to add a return type.
function merge<T,U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({name: 'colt'}, {pets: ["blue", "elton"]});
console.log(comboObj);


// adding type constraints
// if we want to ensure that 2 objects are entered into the function, 
// we can say that 'T extends object', etc.
function merge_2<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}
const comboObj2 = merge_2({name: 'colt'}, {age: 9});
console.log(comboObj2);

interface Lengthy {
    length: number;
}


// you can use a Type alias or Interface as well
function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

console.log(printDoubleLength("asdasd"));


// setting type to a default type = 'number'
function makeEmptyArray<T = number>(): T[] {
  return [];
}

// when calling the function, if you don't add type it will return type 'number',
// because it was set to number as a default above.
const numbers = makeEmptyArray();

// below will return boolean because you overrode the default type when calling the function.
const booleans = makeEmptyArray<boolean>()  

// Generic Classes

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];
    add(el: T){
        this.queue.push(el);
    }
}

const songs = new Playlist<Song>()
const videos = new Playlist<Video>()
