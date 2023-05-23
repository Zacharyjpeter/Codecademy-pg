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
console.log(lightWaves); //throws a reference error

//Scope pollution. When you have too many global variables. Local variables are preferred.
//Example. Stars should output North Star. But the local variable Sirius overwrites it
const deathstar = "The Moon";
const universe = "The Milky Way";
let meteors = "North Star";

const callMyNightSky = () => {
  meteors = "Sirius";
  return "Night Sky: " + satellite + ", " + meteors + ", " + galaxy;
};

console.log(callMyNightSky());
console.log(meteors);

//Modular code assigns variables inside the code block. This keeps your scope tight. Best practice!
//If a variable doesn't need to exist outside the code block, it shouldn't.
//Another example of scope and how it impacts output
const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
//output: Northern Lights then Moonlight

//NEW CONCEPT: ARRAY. the javascript version of a list.
const hobbies = ["words", "on", "page"];
console.log(hobbies);
//output: [ 'words', 'on', 'page' ]

//Array items are indexed starting at 0. This can be used to reference the info like a library book
const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[3]);
//output: 'fortune favors the brave'
//output: undefined

//Array items can be selected and changed
let groceryList = ["bread", "tomatoes", "milk"];
groceryList[1] = "avocados";
//output: bread, avocados, milk

//Const arrays cannot be assigned a new input type. The list values can change though
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);

condiments = ["Mayo"];
console.log(condiments);

utensils[3] = "Spoon";
console.log(utensils);

//length property (no parenthesis) can tell you the number of contents in a variable
const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];

console.log(objectives.length);
//output: 3

//push method (YES parenthesis) can add items to an array after the fact
const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("clean bedroom", "get groceries");

console.log(chores);
//output adds

//pop method removes the last item of an array
const tasks = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

tasks.pop();
console.log(tasks);
//output removes mop floor

//other array methods that can change list contents
//const groceryList = [
"orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains" ;

//Shift removes the first item of the list
const removed = groceryList.shift();
console.log(`Removed item: ${removed}
`);
console.log(`Items remaining: ${groceryList}
`);

//Unshift adds item to beginning of list
groceryList.unshift("popcorn");
console.log(`Updated items: ${groceryList}
`);

//Slice returns range of values specified
/*second number must be one further than what you want*/
console.log(groceryList.slice(1, 4));
console.log(groceryList);

//IndexOf returns the item number in the array
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

//arrays can be changed with functions
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

/*applies the changeArr function to the array stored inside the variable named concept*/
changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

/*applies the removeElement function to the array stored inside the variable named concept*/
removeElement(concept);
console.log(concept);

//nested arrays are literal. An array is inside of an array. You can select them and assign them to a variable
const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];
console.log(target);
//output: 6

//NEW CONCEPT: Loops
//For loop has three parts. Initiator. Stop condition. Iteration statement. 
//let counter = 5 is the initiatior
//counter < 11 is the stop condition
//counter++ is the iteration statement
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}
//output 5 6 7 8 9 10

//reverse for loop is the same but subtracts instead of adds
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}
//output 3 2 1 0

//Looping through arrays. tricky one!
/* The .length property numbers the items in the array. 
i is increased until it matches that number.
the console logs a string plus the array item based on i */

const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}
/*output: I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum */

//nested loops can be used to compare two different arrays
const bobsFollowers = ["Reese", "Jacob", "Josh", "Nicholas"];
const tinasFollowers = ["Reese", "Jacob", "Sierra"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);
//output: Reese and Jacob

//While loops run until a certain criteria is met
//Beware the infinite loop! It can eat up computer memory
//Runs a loop to generate a random number when the current card isn't spade
//Depending on the number generate any combination of cards is outputted
const cards = ["diamond", "spade", "heart", "club"];

let currentCard;
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
//output varies based on the number generated by math random

//Do While loops run until a statement is true
//Explanation: Add cups of sugar while cupsAdded is less than cupsNeeded
const cupsOfSugarNeeded = 7;
let cupsAdded = 0;

do {
  cupsAdded = cupsAdded + 1;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);
//output 1234567

//Break keyword is used to stop your loop after a certain condition
//Explanation: a for loop that logs the rapper array
//If it hits Notorious big it stops and displays a string instead
//"i" represents the array index (placeholder). Without "i" and the .length property, the loop won't start or log
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");
//output: Lil Kim, Jay Z, And if you don't know, now you know

//NEW CONCEPT: Higher Order Functions
//Functions can be reassigned shorter names. Essentially a nickname
//Higher order functions can be passed or return function
//Callback function is the one that's being passed in
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

console.log(isTwoPlusTwo.name);
//output checkThatTwoPlusTwoEqualsFourAMillionTimes

//addTwo is the callback function being passed in the func parameter
//output is 4
const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  //checkA is the same equation as addTwo with different variable names
  //This is why it returns "inconsistent results" if checkB doesn't match
  let checkA = val + 2;
  let checkB = func(val);

  if (checkA === checkB) {
    return func(val);
  } else {
    return "inconsistent results";
  }
};

//logs to the console the check function. Passes it add two function.
//The value "2" is used for checkA AND num in the addTwo function
//This is bc func(val) is passed 2 from the parameter below, which passes it to num in addTwo
console.log(checkConsistentOutput(addTwo, 2));

//New Concept: Iterators. These allow you to manipulate elements in an array
//forEach is a loop that applies to each item in the array
const fruits = ["mango", "papaya", "pineapple", "apple"];

//The "(fruitType)" is a made up parameter. Somehow it knows I'm referencing the array items
fruits.forEach((fruitType) => console.log(`I want to eat a ${fruitType}`));
//output: I want to each mango. I want to eat papaya. etc.

//forMap is a loop that can manipulate an array into a new form
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

//creates a variable secret message
//runs the map iterator on the array
//for each animal returns the 0 index char and stores it
const secretMessage = animals.map((animal) => {
  return animal[0];
});

console.log(secretMessage.join(""));
//output HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];

//divides each individual number by 100
//saves the return value to smallNumbers
const smallNumbers = bigNumbers.map((number) => {
  return number / 100;
});

console.log(smallNumbers);
//output 1,2,3,4,5