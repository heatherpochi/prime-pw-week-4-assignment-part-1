console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name +'!' ;
}
// Remember to call the function to test
console.log(helloName('Heather'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}

console.log('Expecting 13',addNumbers(6,7));


// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}

console.log('Expecting 5562',multiplyThree( 6, 309, 3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if( number > 0 ){
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length > 0){
    return array[array.length-1];
  }
  return 'undefined';
}

let fruits = ['apples', 'strawberries', 'pears', 'oranges', 'bananas'];
let arrayOfNumbers = [ 4, 6, 3, 8, 10, 54];
let veggies = [ ];
console.log('Expecting bananas',getLast(fruits));
console.log('Expecting 54',getLast(arrayOfNumbers));
console.log('Expecting undefined',getLast(veggies));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ){
  for (let i = 0; i < array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}

let numbers = [ 0.1, 3, 59, 7899, 5, 67]
console.log('find - should say false',find(100, numbers));
console.log('find - should say true',find(7899, numbers));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(string.charAt(0) === letter){
    return true;
  }
  return false;
};
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  // TODO: loop to add items
  return sum;
}

 let numberList = [ 1, 5, 7, 0.25, 78];

 console.log('Expecting 91.25',sumAll(numberList));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let positiveNumbers = [ ];
const inputArray = [5, -0.1, 97, -87, 153, 0.1]

function positive(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
      positiveNumbers.push(array[i]);
    }
  }
  return positiveNumbers;
};

console.log(positive(inputArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Create a function that takes a "base number" as an argument.
//This function should return another function which takes a new argument,
//and returns the sum of the "base number" and the new argument.

 function makePlusFunction(baseNum){
   return function (baseTwo){
     return baseNum + baseTwo;
   };
 }

let addTwo = makePlusFunction(2);

console.log('Expecting 12',addTwo(10));
