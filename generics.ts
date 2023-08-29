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