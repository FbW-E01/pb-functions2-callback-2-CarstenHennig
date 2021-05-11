// # Callbacks

// #### Number Sqaure
// * Write a function which will return sqaure of given number
// * Write a function which will return sqaure of every number in array

// ```javascript
//     const array = [1, 2, 3, 4, 5, 6]
//     sqaure(array,squareNumber)  // return [1,4,9,16,25]
// ```
function squareNumber(number) {
  return `${number} * ${number} is ` + number * number;
}
console.log(squareNumber(5));

const array = [1, 2, 3, 4, 5, 6];

function square(array, callAccu) {
  return array.map((result) => callAccu(result));
}

function callAccu(x) {
  return x * x;
}

console.log(square(array, squareNumber));
