// Tuple

// example for an RGB array that can only contain 3 numbers.
let color: [number, number, number] = [255, 46, 132];
// color = [46, 898, 43, 87] // not allowed since only allows 3 numbers

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// note: TypeScript allows you to push onto the tuple or pop off (its a limitation)

const badRes: HTTPResponse = [404, "Not Found"];

const responses: HTTPResponse[] = [[200, "OK"],[404, "Not Found"]];

