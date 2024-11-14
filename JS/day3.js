// Arrays

let x = 12

console.log(x)

let a = [12, 32, "hello", true, null,]

console.log(a)

console.log(
    a[4]
)

console.log(
    a.push(3001), a
);

// pop removes from the last
console.log(
    a.pop(), a
);

// shift removes from the first
console.log(
    a.shift(), a
);

console.log(
    a.unshift(2001), a
);

console.log(
    a.includes("hello")
);

// object: key value holder
let car = {
    name:"Toyota",
    size:"large",
    color:"black"
}

console.log(car);
console.log(car.color)

// functions
function greet() { // defining
    console.log("universe");
}

greet() // calling

// arrow / callback functions

let greet2 = () => {
    console.log("Hello world 2");   
}

greet2()

// parameters and arguements

let greeting = (user)=>{
    console.log("Helo" + user);  
}

greeting(" wick")


let greetings = (name)=>{
    console.log(`Welcome ${name}`)
}
let xy = prompt("Enter your name:") 

greetings(xy)

console.log(
    typeof(xy), xy
)