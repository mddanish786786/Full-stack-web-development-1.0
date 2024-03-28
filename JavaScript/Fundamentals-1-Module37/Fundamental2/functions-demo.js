function calculateSquare(x) { //here x is a parameter
    return x*x;
}

function multiply(x, y){
    return x*y;
}

function addElements([num1, num2, num3, num4]){
    return num1 + num2 + num3 + num4;

}

console.log(calculateSquare(10));
console.log(multiply(9, 8));
let arr = [1,2,3,4,5,6];
console.log(addElements(arr));