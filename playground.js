// Uses a built in method .toUpperCase() to print 'Codecademy' in all uppercase letters
console.log("Codecademy".toUpperCase());

// Uses a built in string method to print the string without whitespace
console.log("    Remove whitespace   ".trim());
//outputs Remove whitespace

//Uses built in objects and methods to do math calculations
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
//outputs three things. first one is nested and produces a random whole number between 1-100
//second one outputs the nearest whole number above 43.8
//third one is a boolean check for integers; the answer is true

//Uses var to create variables and assign them a value
var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);
//outputs pizza and 8 to the console

//Let is similar to var and can assign variables value
let changeMe = true;
changeMe = false;
console.log(changeMe);
//output = false

//const can assign variables that are permanent
const entree = "Enchiladas";
console.log(entree);
entree = "Tacos";
//output = Enchiladas

//Variable assignments listed here
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

//Changing the variables here changes their output below
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
//Ouptuts here will update automatically based on changes above
console.log("The value of levelUp:", levelUp);
console.log("The value of powerLevel:", powerLevel);
console.log("The value of multiplyMe:", multiplyMe);
console.log("The value of quarterMe:", quarterMe);

//Using ++ or -- can increase or decrease a number by one
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;
//output 4 and 49

//concatentation is when you display two variables back to back
let favoriteAnimal = "eagle";
console.log("My favorite animal: " + favoriteAnimal);
//output my favorite animal: eagle

//A template literal allows you to concatenate without plus sign
let myName = "Zachary";
let myCity = "Norman";
console.log(`My name is ${myName}. My favorite city is ${myCity}`);
//output My name is Zachary. My favorite city is Norman

//javascript can be referenced in line like this
<script>// Your JavaScript goes here! console.log("Hello, World!")</script>;
//output Hello world

//javascript can be referenced from a separate file like this
//<script src="javascript.js"></script>

//typeof will tell you the value of your variable
let newVariable = "Playing around with typeof.";

console.log(typeof newVariable);

newVariable = 1;

console.log(typeof newVariable);
//output first is string, second is number

//if statements create a trigger based on a boolean
let sale = true;
sale = false;
if (sale) {
  console.log("Time to buy!");
}
//no output since sale is false

//if else statements create a trigger based on a condition
let product = true;

product = false;

if (product) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}
//output time to wait for a sale bc false

/*comparison statements create a trigger based on value range
Bryan uses this in his dragon game */
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}
//output We can eat later bc 7 is not greater than 7

//logical operators allow an output to be based on condition
let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}
//output not bed time yet bc tiredness isn't high enough

//tricky one. lets you know if variable is truthy or falsy
//if the variable has a value it's truthy. if not it's falsy
//variable cannot be 0, null, undefined, or NaN. else falsy
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = "";

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}
//output better get to work
//output this string is def empty

//another example of truthy vs falsy
let tool = "marker";

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);
//output is marker bc tool has value. if tool was blank output would be pen

//React notes. Html in js is called jsx. JSX is assigned to variables like js
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

//Ternary operators allow if else to be even simpler
//Uses ? and : instead of if else and {}
let isLocked = false;
isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");
let isCorrect = true;
isCorrect ? console.log("Correct!") : console.log("Incorrect!");
let favoriteQuote = "Love That!";
favoriteQuote === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");
//ouput You don't need a key. Correct. I love that.

//else if can be used to create a list of conditions to run thru
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}
//output it's sunny and warm bc it's summer

//Concept: Switch statement. Used to simplify and speed up conditional trigger.
let athleteFinalPosition = "first place";

switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}
//output you get the gold medal

//testing switch, ternary, and statements
let jesus = false;
let zachary = "developer";

jesus ? console.log("He's here") : console.log("Sum not right");

switch (zachary) {
  case "developer":
    console.log("Zachary is a developer!");
    break;
  case "moneycoach":
    console.log("Zachary is not a developer yet.");
    break;
  default:
    console.log("Where is Zachary?");
    break;
}

if (zachary === "developer" && jesus === true) {
  console.log("Won't he do it!");
} else {
  console.log("Ain't nothing happened yet...");
}
//output sum not right, zachary is a developer, aint nothing happened yet

//NEW MODULE TOPIC: FUNCTIONS
//basic function syntax. function functionname() {command}
function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas tardes.");
}

//call a function by using name()
function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks();
sayThanks();
sayThanks();

//supposed to output Cole's name but doesn't work yet
function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

//fixed it! See previous for context
//I was passing Cole in the function not the call
function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole");

//Default arguments can be used as placeholder if user doesn't provide input
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();
//output is Remember to buy milk, bread, eggs

//Return is literal and tells your function to "pass back" the result
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
//output is 20

//return allows you to use the result in other parts of your code
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
//output

//function expressions. A function stored inside a variable
//this is similar to the project card component
var plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

let waterCheck = plantNeedsWater("Tuesday");
console.log(waterCheck);
//output: falsy

//fat arrow notation. shorter way to write functions
var plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
//output. same as previous. simply removes word "function"

//concise arrow function. makes code shorter. same as previous
//removes paranthesis, curly brace, and return bc it's implied when there's only one parameter
const plantNeedsWater = day => day === "Wednesday" ? true : false;
//output: none because the function hasn't been called

//NEXT MODULE TOPIC: SCOPE
//Scope refers to where a variable is placed and when you can call it

//Ex. city has a file scope and can be called anywhere within the project
//Ex. skyscraper has a function scope and can only be called within the function block
const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());

//Global scope means the variable can be used anywhere in the file
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}

console.log(callMyNightSky());

//Block scope means the variable can only be used within the code block or {}
//Variables inside a block scope are called "local variables"

//If console.log is inside the function it will print the variable
//If console is outside the function and calls a variable inside it, you'll get an error
//Key Point: Variables inside a function cannot be called by outside methods
function logVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);
