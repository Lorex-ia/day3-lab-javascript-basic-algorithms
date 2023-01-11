// Iteration 1: Names and Input
/* Iteration 1: Names and Input

1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY". */

const hacker1 = "Silur";
console.log(`The drivers name is ${hacker1}`);

// Iteration 2: Conditionals

/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

const driverName = "Silur";
const navigatorName = "Lorexiam";

if (driverName.length > navigatorName.length) {
  console.log(`The driver has the longest name, it has ${driverName.length} characters.`)
} 

else if (driverName.length < navigatorName.length) {
  console.log(`The navigator has the longest name, it has ${navigatorName.length} characters.`)
} 

else {
  console.log(`They both have the same length!`)
};


// Iteration 3: Loops
/* 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

    The driver's name goes first.
    Yo, the navigator goes first definitely.
    What?! You both have the same name? */
const driverName = "Silur";
const navigatorName = "Lorexiam";


let transfoDriver = driverName.toUpperCase();
console.log(transfoDriver);


let transfoNavigator = navigatorName.split('').reverse().join('');
console.log(transfoNavigator);

let comparisionName = transfoDriver.localeCompare(transfoNavigator);

if (comparisionName <0){
  console.log("The drivers name goes first!")
}

else if (comparisionName>0){
  console.log("The navigators name goes first!")
}

else{
  console.log("What, you both have the same name?!")
};