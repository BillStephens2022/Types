class Player {
    readonly first: string; // can mark properties as 'readonly' in TypeScript.
    readonly last: string;
    protected _score: number = 0; // properties are 'public' be default, so not needed but you can add to be explicit esp if you have some that are 'private'. 'protected' allows to access within child classes as well.
    // typescript will automatically infer the type as number even if we don't add the ": number", so you can do that as well.
    private numLives = 10; // typescript will infer number type, don't need to be explicit
    constructor(first: string, last: string) {
      this.first = first;
      this.last = last;
    }
    private secretMethod(): void {
      console.log("SECRET Method!!!");
    }
    get fullName(): string {
      return `${this.first} ${this.last}`;
    }
    get score(): number {
      return this._score;
    }
    set score(newScore: number) {
      if (newScore < 0) {
        throw new Error("Score cannot be negative!");
      }
      this._score = newScore;
    }
  }
  
  const elton = new Player("Elton", "Steele");
  console.log(elton.score);
  console.log(elton.fullName);
  elton.score = 123;
  console.log(elton);
  
  // elton.secretMethod();
  
  // shortcut for setting up the first and last properties in the constructor, note commented out initial lines for first and last.
  class PlayerAlt {
    private score: number = 0; // properties are 'public' be default, so not needed but you can add to be explicit esp if you have some that are private.
    // typescript will automatically infer the type as number even if we don't add the ": number", so you can do that as well.
    constructor(public first: string, public last: string) {
      this.first = first;
      this.last = last;
    }
    private secretMethod(): void {
      console.log("SECRET Method!!!");
    }
  }
  
  const bill = new PlayerAlt("Bill", "Stephens");
  console.log(bill);
  
  class SuperPlayer extends Player {
    isAdmin: boolean = true;
    maxScore() {
      this._score = 9999999; // can access this property in parent because set to "protected" instead of "private" which allows sharing with child classes
    }
  }
  
  interface Colorful {
    color: string;
  }
  
  interface Printable {
    print(): void;
  }
  
  class Bike implements Colorful {
    constructor(public color: string) {}
  }
  
  const bike1 = new Bike("red");
  
  class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}
    print() {
      console.log(`${this.color} ${this.brand} jacket`);
    }
  }
  
  const jacket1 = new Jacket("Prada", "black");
  console.log(jacket1);
  jacket1.print();
  
  // you cannot create an instance of an 'abstract' class. Generally used when you are using as a parent class
  // and instances are only created on the child classes
  abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number; // using 'abstract' every subclass (which extends Employee) must have this method
    greet(): void {
      console.log("Hello!");
    }
  }
  
  // must use 'getPay' method since marked as 'abstract' in the parent Employee class
  class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
      super(first, last);
    }
    getPay(): number {
      return this.salary;
    }
  }
  
  class PartTimeEmployee extends Employee {
    constructor(
      first: string,
      last: string,
      private hourlyRate: number,
      private hoursWorked: number
    ) {
      super(first, last);
    }
    getPay(): number {
      return this.hourlyRate * this.hoursWorked;
    }
  }
  
  const betty = new FullTimeEmployee("Betty", "White", 95000);
  console.log(betty.getPay());
  const billiam = new PartTimeEmployee("Billiam", "Billerson", 24, 1100);
  console.log(billiam.getPay());