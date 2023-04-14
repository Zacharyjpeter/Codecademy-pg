// Uses a built in method .toUpperCase() to print 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Uses a built in string method to print the string without whitespace
console.log('    Remove whitespace   '.trim());
//outputs Remove whitespace 

//Uses built in objects and methods to do math calculations
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
//outputs three things. first one is nested and produces a random whole number between 1-100
//second one outputs the nearest whole number above 43.8
//third one is a boolean check for integers; the answer is true

//Uses var to create variables and assign them a value
var favoriteFood = 'pizza';
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
const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos';
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
let favoriteAnimal = 'eagle';
console.log('My favorite animal: ' + favoriteAnimal);
//output my favorite animal: eagle

//A template literal allows you to concatenate without plus sign
let myName = 'Zachary';
let myCity = 'Norman';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);
//output My name is Zachary. My favorite city is Norman

//javascript can be referenced in line like this
<script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
</script>
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
  console.log('Time to buy!');
}
//no output since sale is false

//if else statements create a trigger based on a condition
let product = true;

product = false;

if(product) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}
//output time to wait for a sale bc false

/*comparison statements create a trigger based on value range
Bryan uses this in his dragon game */
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
//output We can eat later bc 7 is not greater than 7

//logical operators allow an output to be based on condition
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}
//output not bed time yet bc tiredness isn't high enough

//tricky one. lets you know if variable is truthy or falsy
//if the variable has a value it's truthy. if not it's falsy
//variable cannot be 0, null, undefined, or NaN. else falsy
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
//output better get to work
//output this string is def empty

//another example of truthy vs falsy
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
//output is marker bc tool has value. if tool was blank output would be pen