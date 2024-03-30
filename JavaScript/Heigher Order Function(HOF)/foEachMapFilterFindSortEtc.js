let arr = [2, 3, 4]

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr )=>{
    console.log("arrow", index, element, arr);

})

const heros = ["naagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el) => console.log(el.toUpperCase()));

const heroWithRaj = heros.filter((h) => {
   return h.endsWith('raj')
})
console.log(heroWithRaj);


//cart example
const cartBill = [20, 30, 40]

const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfCartBill);

//Type checker or value checker
const gameScore = [200, 300, 310, 100, 250, 150, true]
console.log(typeof gameScore[0]);
const gameScoreCheck = gameScore.every((v) => typeof v ===
"Number")
console.log("check: ", gameScoreCheck);


//check if any score is above 200
const above200 = gameScore.find((score) => score > 200)
console.log("above: ", above200);