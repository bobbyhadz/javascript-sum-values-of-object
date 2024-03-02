// EXAMPLE 1 - Sum the Values of an Object

const obj = {
  one: 5,
  two: 15,
  three: 45,
};

// 👇️ [5, 15, 45]
const values = Object.values(obj);

const sum = values.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum); // 👉️ 65

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sum the Values of an Object using for...of

// const obj = {
//   one: 5,
//   two: 15,
//   three: 45,
// };

// let sum = 0;

// for (const value of Object.values(obj)) {
//   sum += value;
// }

// console.log(sum); // 👉️ 65

// ------------------------------------------------------------------

// // EXAMPLE 3 - Sum the Values of an Object using a `for...in` loop

// const obj = {
//   one: 5,
//   two: 15,
//   three: 45,
// };

// let sum = 0;

// for (const key in obj) {
//   sum += obj[key];
// }

// console.log(sum); // 👉️ 65
