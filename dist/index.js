"use strict";
//The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
const id = 5; // define data type
console.log(id);
let age = 1;
let x = "TS is Cool";
let rockStar = true;
let cats = ['Trixie', 'Garth', 'Monet', 'Midnight'];
let testArr = ['Starfruit', 5, 'Garbage', false, 101, { toenails: 'trimmed' }];
//Tuple. allow you to specify exact types in an array in order
let yourMom = [1, "cool", true];
//yourMom = ["rad", 2, false] this throws an err
//a tuple array, an array of arrays
let school;
school = [
    ["sucks", true],
    ["rocks", false]
];
//Unions. allows a variable to hold more than one data type (similar to object or array). each variable is indexed with a value 0 mg fwd.
let holiday = 'Oct 31';
//enums. define a set of names constants
var Dance;
(function (Dance) {
    Dance[Dance["Jump"] = 0] = "Jump";
    Dance[Dance["Sashe"] = 1] = "Sashe";
    Dance[Dance["Sway"] = 2] = "Sway";
    Dance[Dance["Swing"] = 3] = "Swing";
})(Dance || (Dance = {}));
console.log(Dance.Sway);
//BUT you can overwrite the values, like so:
var Dance2;
(function (Dance2) {
    Dance2[Dance2["Jump"] = 2] = "Jump";
    Dance2[Dance2["Sashe"] = 3] = "Sashe";
    Dance2[Dance2["Sway"] = 4] = "Sway";
    Dance2[Dance2["Swing"] = 5] = "Swing";
})(Dance2 || (Dance2 = {}));
console.log(Dance2.Sway);
//we can also overwrite the value to a string like so:
var Dance3;
(function (Dance3) {
    Dance3["Jump"] = "Jump";
    Dance3["Sashe"] = "Sashe";
    Dance3["Sway"] = "Sway";
    Dance3["Swing"] = "Swing";
})(Dance3 || (Dance3 = {}));
console.log(Dance3.Sway);
//Objects
const Beavis = {
    IQ: 5,
    hairColor: 'blonde'
};
const butthead = {
    IQ: 8,
    hairColor: 'brown'
};
//Type Assertion: tell the compiler to treat an entity as a different type.
let frosting = 'pink';
let weddingCakeFrosting = frosting; //OR: frosting as number
//Functions
//function addNum(x,y) { 
//   return x + y
//}
///if we have noImplicitAny commented out in ts.config, 
//there is an error being raised because we did not define what data types for these parameeters.
//to resolve this we can set NoImplicitAny to false in ts.config or simple define the parameters like the function below...
function addNum(x, y) {
    return x + y;
}
function showMe(message) {
    console.log(message);
}
const AugBookReport = {
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    summary: 'A dizzying and romantic novel of a young woman coming of age in a time of love and romantic tension.'
};
//you can also add a readonly property to prevent that property from being re-assigned later.
//AugBookReport.author = "Susan Rice";
//id = "5"; //will throw err 'type sting not assignable to type number'.
//can run command tsc --watch filename.ts to view compilation in watch mode in the terminal
//if you're in development mode, and you don't need to compile yet, you'll see errs in watch mode. 
//can set up a tx.config file using command: tsc --init
//to compile this TS file, you can run in terminal : tsc filename.ts
//to compile all ts files in your project run : tsc 
// function greeter(person) {
//     return "Hello, " + person;
//   }
//   let user = "Jane User";
//   document.body.textContent = greeter(user);
