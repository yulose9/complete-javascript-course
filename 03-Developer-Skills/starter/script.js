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
