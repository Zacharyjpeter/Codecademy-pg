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