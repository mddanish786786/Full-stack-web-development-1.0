class Product { //class is kind of like a template

   /* constructor () {
    (a class can have only one constructor. there is no concept of constructor overloading in java script)
    }*/
    constructor(n, p) {
        console.log("calling the constructor");
        this.name = n; //this keyword actually refers to the same empty object we created(these properties are also called as data members)
        this.price = p;
        //return "Danish" (in any constructor return type will be ignored)
        //instead returning this return an abject
        return {x: 10, y: 20}
    }
    display(){// class methods are nothing but functions, they represent behaviour -> (Also called as member functions)
        console.log("displaying a product", this.name, this.price);

    }

}

const p = new Product("iPhone 14", 100000); // new -> creates an empty object
console.log(p);
p.display();
const p1 = new Product();