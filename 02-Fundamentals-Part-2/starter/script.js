/* "use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;


function logger() {
  console.log("My name is Nazarene");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);


// Function Declaration
const age1 = calcAge(2001);
function calcAge(birthYear) {
  return 2025 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calcAge2(1991);

console.log(`Age 1: ${age1}, Age 2: ${age2}`);


// Arrow function
const calcAgeArrow = (birthYear) => 2025 - birthYear;

const age3 = calcAgeArrow(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 60 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2001, "Nazarene"));
console.log(yearsUntilRetirement(2002, "Angel"));


function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🙌🥳`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2001, "Nazarene"));
console.log(yearsUntilRetirement(1950, "Paolo"));


const friend1 = "Charie";
const friend2 = "Trina";
const friend3 = "Bianca";

const friends = ["Charie", "Trina", "Bianca"];
console.log(friends);

const youths = new Array(1998, 2002, 2004, 2007);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jane";
console.log(friends);
// friends = ["Mary", "Jane"];

const firstName = "Nazarene";
const nazarene = [
  firstName,
  "Nazarene",
  2025 - 2001,
  "Solution Architect",
  friends,
];
console.log(nazarene);
console.log(nazarene.length);

// Exercise
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};
const years = [2001, 2002, 2003, 2004, 2005];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
console.log(ages[0], ages[1], ages[ages.length - 1]);
*/
