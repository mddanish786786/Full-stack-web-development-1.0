let arr = [10, 11, 12, 13];
console.log(arr); //opt: 10, 11, 12, 13

//push method: it is ussed to adding the element in a array
arr.push(9);
arr.push(19);

console.log(arr); //opt: 10, 11, 12, 13, 9, 19

// pop method: to remove an element from the last
arr.pop();
console.log(arr); //opt: 10, 11, 12, 13, 9

// shift method: it is used to remove an element from the start
arr.shift();
console.log(arr); //opt: 11, 12, 13, 9

// unshift method: it is used to add a element in start 
arr.unshift(76);
console.log(arr); //opt: 76, 11, 12, 13, 9

const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7, 8];

//concat method: to return a new array with elements of a1 followed by elements of a2
const res = a1.concat(a2);

console.log(res);

//slice method: to fetch data from start to end-1
const x = [1,2,3,4,5,6,7];
const s = x.slice(2, 4)
console.log(s);

//join method: to club all the elements together to for a string separated by a given char
const str = x.join("#");
console.log(str);

//reverse method: 
const rev = x.reverse();
console.log(rev, x);

//indexOf method
const a = [1,2,3,4,5,6,7]
console.log(a.indexOf(16));