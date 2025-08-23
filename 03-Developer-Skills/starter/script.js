// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

// const temperatures = [3, -2, -6, -1, 'error', 9, 13];

// 1) Understanding the problem
// - What is the temperature amplitude? Answer: difference between highest and lowest temp
// - How do we compute a max and min temperature?
// - What is a sensor error? Answer: a value that is not a number (NaN)
// 2) Breaking up into sub-problems
// - How do we ignore errors?
// - Find max temp in temp array
// - Find min temp in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmplitudeNew([3, 7, 4, 1, 8]);
// const amplitude = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement the functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge two arrays

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // B) FIND
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitudeBug([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitude); 

function printForecast(arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days...`;
  }
  return str;
}

const arr = [17, 21, 23];
console.log(printForecast(arr));

const arr2 = [12, 5, -5, 0, 4];
console.log(printForecast(arr2));
*/

/* 
Let's say you' re building a time tracking application for
freelancers. At some point in building this app, you need
a function that receives daily work hours for a certain
week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

*/

function analyzeWorkWeek(dailyHours) {
  // Array of day names for reference
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // 1. Total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // 2. Average daily hours (rounded to 1 decimal place)
  const averageHours = +(totalHours / dailyHours.length).toFixed(1);

  // 3. Day with the most hours worked
  const maxHours = Math.max(...dailyHours);
  const dayWithMostHours = daysOfWeek[dailyHours.indexOf(maxHours)];

  // 4. Number of days worked (more than 0 hours)
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  // 5. Full-time week? (at least 35 hours)
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    dayWithMostHours,
    daysWorked,
    isFullTime,
  };
}

const week = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWorkWeek(week));
