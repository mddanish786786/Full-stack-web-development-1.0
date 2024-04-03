function hof(fn){
    fn();
}

hof(function f(){
    console.log("executing....");
})

setTimeout(function f() {
    console.log("done");
}, 2000)
    