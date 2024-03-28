function Emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;

}

const e = new Emp(101, "Alex", 10000);
console.log(e);