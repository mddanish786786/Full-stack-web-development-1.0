function isEvenOrOdd(){

    try {
        if (x % 2 == 0){
            console.log("Even");
        }else {
            console.log("add");
        }
        console.log("Ending");
    } catch {
        console.log("handled");
    } finally {
        console.log("finally");
    }
}


isEvenOrOdd(11)