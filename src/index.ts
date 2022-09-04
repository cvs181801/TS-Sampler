//The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

const id: number = 5; // define data type
console.log(id);

let age: number = 1;
let x: any = "TS is Cool";
let rockStar: boolean = true;
let cats: string[] = ['Trixie', 'Garth', 'Monet', 'Midnight']; 
let testArr: any[] = ['Starfruit', 5, 'Garbage', false, 101, {toenails: 'trimmed'}];

//Tuple. allow you to specify exact types in an array in order
let yourMom: [number, string, boolean] = [1, "cool", true];
//yourMom = ["rad", 2, false] this throws an err

//a tuple array, an array of arrays
let school: [string, boolean][];

school = [
    ["sucks", true], 
    ["rocks", false]
];

//Unions. allows a variable to hold more than one data type (similar to object or array). each variable is indexed with a value 0 mg fwd.

let holiday: string | number = 'Oct 31'

//enums. define a set of names constants

enum Dance {
    Jump,
    Sashe,
    Sway,
    Swing
}

console.log(Dance.Sway)

//BUT you can overwrite the values, like so:

enum Dance2 {
    Jump = 2,
    Sashe,
    Sway,
    Swing
}

console.log(Dance2.Sway)

//we can also overwrite the value to a string like so:
enum Dance3 {
    Jump = "Jump",
    Sashe = "Sashe",
    Sway = "Sway",
    Swing = "Swing"
}

console.log(Dance3.Sway)

//Objects
const Beavis: {
    IQ: number,
    hairColor: string
} = 
{
    IQ: 5,
    hairColor: 'blonde'
}

//OR define it like this, using the 'type' keyword:
type character = {
    IQ: number,
    hairColor: string
} 

const butthead: character = {
    IQ: 8,
    hairColor: 'brown'
}

//Type Assertion: tell the compiler to treat an entity as a different type.

let frosting: any = 'pink';
let weddingCakeFrosting = <number>frosting //OR: frosting as number

//Functions

//function addNum(x,y) { 
 //   return x + y
//}

///if we have noImplicitAny commented out in ts.config, 
    //there is an error being raised because we did not define what data types for these parameeters.
    //to resolve this we can set NoImplicitAny to false in ts.config or simple define the parameters like the function below...

function addNum(x: number, y: number): number //(this last part specifies the data type of the return value)
 {
    return x+y
}

function showMe(message: string | number): void { //void indicates there isn't really any return type.
    console.log(message)
}

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