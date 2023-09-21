// Typeof Guards
// function triple(value: number | string) {
//     if(typeof value === "string") {
//         return value.repeat(3);
//     }
//     return value * 3;
// }
// Truthiness Guards
// const el = document.getElementById("idk");
// if (el) {
//     el.addEventListener("click", () => console.log("hi"));
// } else {
//     console.log("el doesn't exist.");
// }
var printLetters = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char.toUpperCase());
        }
    }
    else {
        console.log("YOU DID NOT PASS IN A WORD!");
    }
};
printLetters("YoYoMa");
