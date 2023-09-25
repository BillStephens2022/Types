// 'interface' effectively creates a custom Type.  This helps eliminate long form type annotations and can be
// used throughout an application where needed

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  numDoors: number;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  numDoors: 2,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
