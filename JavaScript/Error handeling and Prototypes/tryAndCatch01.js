function isPrime(x){
    try {
        for (let i = 2; i < x-1; i++) {
            if(x% i == 0){
                throw new Error("not a prime")
            }
        }
        return "prime";
    } catch (err) {
        console.log("handled", err);
    } finally {
        console.log("end");
    }
}

isPrime(10)