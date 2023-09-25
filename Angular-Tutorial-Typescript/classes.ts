// 'public' and 'private' modifiers are optional.  properties and methods are public by default.
// public means you can access the property or method from anywhere.
// private means you can only access the property or method from within the class.
// protected means you can only access the property or method from within the class OR its children.
// when using public within the constructor, we don't need to initialize, and it can be initialized when
// a new instance of Vehicle or Car is created.

class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log("chugga chugga");
  }
  public honk(): void {
    console.log("BEEP!");
  }
}

// Note that since class Car extends the Vehicle class, the Car class
// inherits the properties and methods of the Vehicle Class.  We can also
// overwrite/amend the method to do something slightly different if needed (i.e. drive method below).
// 'Car' becomes a child of 'Vehicle
// note since color is inherited from Vehicle, don't need to use public modifier in constructor, but must call super
// within the contructor

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  public turnLeft(): void {
    console.log("Turning Left");
  }
  public drive() {
    console.log("VROOOOOM!");
  }
}

const vehicle = new Vehicle("red");
vehicle.drive();
vehicle.honk();
console.log("I am a Vehicle and my color is: ", vehicle.color);

const car1 = new Car(4, "blue");
car1.drive();
car1.honk();
car1.turnLeft();
console.log("I am a Car and my color is: ", car1.color);
console.log("I am a Car and I have this many wheels: ", car1.wheels);
