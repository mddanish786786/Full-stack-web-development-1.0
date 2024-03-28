let emp = {
    id: 101,
    name: 'Alex',
    age: 29,
    salary: 10000
};

//object.keys
const keys = object.keys(emp);
//returns an array of an object's own keys

console.log(keys);

//object.values
const values = object.values(emp);
//return an array of an object's own values
console.log(values);

//object.entries
const entries = object.entries(emp);
// return an array of an objects own key value pairs
console.log(entries);

//freeze function allows nothing to object manupulation
object.freeze(emp);
emp.id = 100;
delete emp.name;
console.log(emp);

//seal function only allowes updation not deletion
object.seal(emp);
emp.id = 100;
delete emp.name;
console.log(emp);

//assign function
const x = object.assign({}, emp);
console.log(x);