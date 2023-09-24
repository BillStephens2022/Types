// An array of strings.  note that type inference would work without annotation since it contains only strings once
// initialized.
const carMakers: string[] = ['ford', 'toyota', 'chevrolet'];

// would need annotation if not initialized with values as in below.
const carModels: string[] = [];
carModels.push('Camaro');

// array of arrays annotation (i.e. a 2 dimensional array)
const carsByMake: string[][] = [
    ['f150'],
    ['corrola'],
    ['camaro']
];

// Help with inference when extracting values
const car  = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // note error since only allows strings...

// Help with 'map'
carMakers.map((car: string): string => {
    return car; // string
})

// Flexible types
// with type inference the below will allow date objects or strings since that is what it is initialized with.
const importantDates = [new Date(), '2030-10-10'];  

// without type inference, using type annotation where the variable has not been 
// initialized with all types that will be allowed.
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10');
