function myFirstFunction() {
    //all the logic goes inside the pair of this curly braces
    console.log("this is");
    console.log("my first function");
}

myFirstFunction();
myFirstFunction();
myFirstFunction();

function addFourNumbers(a, b, c, d) {
    // 4 parameters passed a, b, c, d
    let result = a + b + c +d;
    console.log(result);
}

function isEvenOrOdd(){ // it takes a value x and tells whether it is even or odd
     //x -> parameter
     if(x % 2 ==0){
        console.log("Even");
     } else {
        console.log("Odd");
     }
}

isEvenOrOdd(12); //12 -> arguments
isEvenOrOdd(17); 
isEvenOrOdd(76); 