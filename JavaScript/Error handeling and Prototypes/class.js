class product {

    constructor(n, p, d){
        console.log("called constructor");
        this.name = n;
        this.price = p;
        this.discount = d;
    }
    display(){
        console.log("name of the product is", this.name, "and price is", this.price);
    }
    discountPrice(){
        let newPrice = this.price*(math.floor(100-this.discount)/100)
        return newPrice;
    }
}

const i1 = new Product("iPhone", 100000, 10);
console.log(i1.discountPrice());

const i2 = new Product("samsung s23", 60000, 10);
console.log(i2.discountPrice());

console.log(i1, i2);