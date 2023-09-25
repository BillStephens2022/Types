// drink as object
const drinkObj = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// drink as array - not ideal as order of items can be changed, a tuple is better
const pepsi = ['brown', true, 40];

// drink as tuple - ensures order is maintained within the tuple structure
const pepsiTuple: [string, boolean, number] = ['brown', true, 40];


// another way is to use a Type Alias:
type Drink = [string, boolean, number];  // creates a new type alias called "Drink"
const spriteTuple: Drink = ['clear', true, 50];
const tea: Drink = ['brown', false, 0];

