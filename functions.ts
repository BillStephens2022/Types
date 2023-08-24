function square(num: number) {
    return num * num;
}

function greet(person: string) {
    return `hello there, ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
 
};

greet("bill");
doSomething("chcdkfjk", 13, false)

function greet2(person: string = "stranger") {
    return `hello there, ${person}`;
}

const addNums = (x: number, y: number): number => {
    return x + y;
}

addNums(3, 4);

const colors = ["red", "orange", "yellow"];
colors.map(color => {
  return color.toUpperCase();
});


