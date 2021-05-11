// # Callbacks

// #### Number Sqaure
// * Write a function which will return sqaure of given number
// * Write a function which will return sqaure of every number in array

// ```javascript
//     const array = [1, 2, 3, 4, 5, 6]
//     sqaure(array,squareNumber)  // return [1,4,9,16,25]
// ```
function squareNumber(number, accumulator) {
  console.log(`${number} * ${accumulator} is ` + number * accumulator);
}
squareNumber(5, 5);

const array = [1, 2, 3, 4, 5, 6];
function square(array) {
  for (let i = 0; i < array.length; i++) {
    let squareArray = array[i] * array[i];
    console.log(squareArray);
  }
}
square(array);
