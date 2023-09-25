interface Reportable {
  summary(): string;
}

// note that both objects below ('oldCamaro' and 'coke' satisfy the 'Reportable' 
// interface because they have the summary function)

const oldCamaro = {
  name: "camaro",
  year: new Date(),
  broken: false,
  numDoors: 2,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const coke = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCamaro);
printSummary(coke);
