let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "flash", "superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.danish = function(){
    console.log('Danish is present in all objects');
}

console.log(myHeros.danish);

Array.prototype.heydanish = function(){
    console.log('Danish says hello to Array');
}


const User ={
    name: "top name",
    email: "top@gmail.com"
}

const Teach ={
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAAssistant = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    _proto_: TeachingSupport
}

//Teacher._proto_ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

String.prototype.truelength = function(){
    console.log(`True length is: ${this.trim().length}`);
}

console.log("danish.   ".truelength);
//"hitesh.   ".truelength