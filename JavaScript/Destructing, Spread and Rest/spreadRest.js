//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//use of "SPREAD" operator

const one = [1, 2, 3, 4]
const two = [5, 6, 7, 8]

//const three = one.concat(two)

//how to combine these arrays if we dont knoe this concat  method is applicable in JS or not
//const three = [one, two]
const three = [...one, ...two] //spread operator
// const three = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(three);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Rest Operator

function manyArguments(){
    let args = Array.from(arguments)
    const myArr = args.map(el => el * 2)
    console.log(myArr);
}

function manyArgumentsv2(...args){
    let args = Array.from(arguments)
    const myArr = args.map(el => el * 2)
    console.log("V2", myArr);
}


manyArguments(2, 4) //output should[4,6]
manyArguments(2, 3, 4) // output should[4, 6, 8]

manyArgumentsv2(2,3) //[4, 6]



const heros = ["spiderman", "hulk"]

const newHeros = ["ironman", ...heros, "thor"]

const teacherName = "hitesh choudhary"
console.log([...teacherName]); //here we are spreading a string

function twoTest(...values){
    console.log(values);
}

console.log(twoTest("hitesh", "pw"));