const emp = {
    id: 101,
    name: "Alex",
    salary: 10000
};

console.log(emp.id);
console.log(emp['id']);
emp.items = 10;
emp['type'] = 'intern';

emp.id = 12;
emp['salary'] = 11000;
console.log(emp);


//how to delete

delete emp.name; //using delete keyword we can delete the key value pairs
console.log(emp);