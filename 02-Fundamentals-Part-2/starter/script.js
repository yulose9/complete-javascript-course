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


const friends = ["Nazerene", "Antonio", "Graham"];
const newLength = friends.push("Charlize");

// Add elements
console.log(friends);
console.log(newLength);

friends.unshift("Glyzel");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Antonio"));
console.log(friends.indexOf("Eunice"));

friends.push(23);
console.log(friends.includes("Antonio"));
console.log(friends.includes(23));

if (friends.includes("Eunice")) {
  console.log("You have a friend called Eunice");
}
  

CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



👋 OPTIONAL: You can watch my solution in video format in the next lecture


function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = bills.map(calcTip);
const totals = bills.map((bill, i) => bill + tips[i]);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];


const nazareneArray = [
  "John Nazarene",
  "Dela Pisa",
  2025 - 2001,
  "Solution Architect",
  ["Eunice", "Gail", "Glyzel"],
];

const nazarene = {
  firstName: "John Nazarene",
  lastName: "Dela Pisa",
  age: 2025 - 2001,
  job: "Solution Architect",
  friends: ["Eunice", "Gail", "Glyzel"],
};


const nazarene = {
  firstName: "John Nazarene",
  lastName: "Dela Pisa",
  age: 2025 - 2001,
  job: "Solution Architect",
  friends: ["Paolo", "Gail", "Glyzel"],
};

console.log(nazarene);

console.log(nazarene.lastName);
console.log(nazarene["lastName"]);

const nameKey = "Name";
console.log(nazarene["first" + nameKey]);
console.log(nazarene["last" + nameKey]);

// console.log(nazarene.'last' + nameKey); // Error

const interested = prompt(
  "What do you want to know about Nazarene? Choose between firstName, lastName, age, job, and friends"
);
console.log(nazarene[interested]);

if (nazarene[interested]) {
  console.log(nazarene[interested]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

nazarene.location = "Philippines";
nazarene["twitter"] = "@JohnDelaPisa";
console.log(nazarene);

// Challenge
// "John has 3 friends, and his best friend is called Paolo"
console.log(`${nazarene.firstName} has ${nazarene.friends.length} friends, and his best friend is called ${nazarene.friends[0]}`);
*/

const nazarene = {
  firstName: "John Nazarene",
  lastName: "Dela Pisa",
  birthYear: 2001,
  job: "Solution Architect",
  friends: ["Paolo", "Graham", "Antonio"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2025 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year-old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? "has" : "doesn't have"
    } a driver's license`;
  },
};

console.log(nazarene.calcAge());

console.log(nazarene.age);
console.log(nazarene.age);
console.log(nazarene.age);

console.log(nazarene.getSummary());

// Challenge
// "John is a 46-year-old Solution Architect, and he has a driver's license" or "John is a 46-year-old Solution Architect, and he doesn't have a driver's license
