var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const nums: number[] = []
// alternative to the above is the below, which is a 'built-in generic':
var nums = [];
var colors = [];
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// generic function that takes in an item as an argument and simply returns it
function identity(item) {
    return item;
}
console.log(identity("hello"));
console.log(identity(false));
console.log(identity(42));
// using a custom Type/Interface "Cat"
console.log(identity({ name: "Smiley", breed: "Cheshire" }));
// note: using "T" instead of "Type" below.  This is a common practice
function getRandomElement(list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
// note that although '<string>' is provided when calling the function below,
// this isn't necessary in this case.  TypeScript is smart enough to infer the
// type, and won't show an error if you leave it out.  There are other situations
// where TypeScript can't automatically infer the type, so you will need to enter it.
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([5, 7, 29, 42, 76, 534, 1982]));
// Generics with multiple types.  Common practice is to use 'T' as the first and then use 'U', then
// use 'V', etc...
// Typescript infers that the return type is the intersection of 'T' and 'U'.  No need to add a return type.
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var comboObj = merge({ name: 'colt' }, { pets: ["blue", "elton"] });
console.log(comboObj);
// adding type constraints
// if we want to ensure that 2 objects are entered into the function, 
// we can say that 'T extends object', etc.
function merge_2(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var comboObj2 = merge_2({ name: 'colt' }, { age: 9 });
console.log(comboObj2);
// you can use a Type alias or Interface as well
function printDoubleLength(thing) {
    return thing.length * 2;
}
console.log(printDoubleLength("asdasd"));
// setting type to a default type = 'number'
function makeEmptyArray() {
    return [];
}
// when calling the function, if you don't add type it will return type 'number',
// because it was set to number as a default above.
var numbers = makeEmptyArray();
// below will return boolean because you overrode the default type when calling the function.
var booleans = makeEmptyArray();
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var songs = new Playlist();
var videos = new Playlist();
