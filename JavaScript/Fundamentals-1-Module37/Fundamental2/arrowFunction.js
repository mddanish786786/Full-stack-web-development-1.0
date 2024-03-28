// 1. one parameter and a single return statement
const square = (x) => x * x;

// 2. Multiple parameter and a single return expression
const sumOftwoNumbers = (x, y) => x + y;

// 3. Multiple statements in function expression
const sum = (x, y) => {
    console.log(`adding ${y}`);
    return x + y;
};

// Returning an object
const sumAndDifference = (x, y) => ({sum: x + y, difference: x - y});

//Calling a function

let output1 = square(5); //opt: 25
let output2 = sumOftwoNumbers(1, 2); //opt: 3
let output3 = sum(1, 2); //opt: adding 1 and 2 is 3
let output4 = sumAndDifference(5, 3) //opt: {sum: 8, difference: 2}