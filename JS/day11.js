let car = {
    name:"Toyota",
    size:"large",
    color:"black" 
}

console.log(car.name);


// destructuring = breakdown

const {size, color} = car

console.log(size, color);

let array = [12, null, {name: "john wick", dog: true, age: 30}, "hello"]

const {name} = array[2]

console.log(name);

const [a] = array

console.log(a);

// spread operator = gives us access to all the value in an array without getting the array

 let score = [70, 40, 50, 20, 100]
 let array3 = [...array, ...score]

 console.log(array3);

 // modular programming

 export const name1 = "john wick"
 
 const ball = "bladder"
 export default ball
 
 