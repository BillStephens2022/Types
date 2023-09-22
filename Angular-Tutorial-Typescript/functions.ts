// functioin where both parameters have type number and returns a number
const add = (a: number, b: number): number => {
  return a + b;
};

// note that typescript can infer the return value of number...
const add_2 = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// type annotation examples for when using named functions
// (instead of arrow functions)
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// functions that returns void / never

// user void when no return statement
const logger = (message: string): void => {
  console.log(message);
};

// user never when don't expect a function to ever return anything
const throwError = (message: string): never => {
  throw new Error(message);
};

// in example below since there is a return statement, must
// provide a type annotation for the return value
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// Example of destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// same as above but using destructuring of 'forecast' object.
// uses destructured parameters, then defines type for each property within the object.
const logWeather_2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
