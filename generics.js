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
function identity(item) {
    return item;
}
console.log(identity("hello"));
console.log(identity(false));
console.log(identity(42));
console.log(identity({ name: "Smiley", breed: "Cheshire" }));
