// Assignment operator in js
let x = 2
console.log(x);

x = 25
console.log(x);

// increment and decrement
let y = 7
// y = + 1
// y += 1
// y -= 1
// y++
y--
console.log(y);

// Comparison

// 5 < 3 : n0

let a = '3'
let b = 4
// 4 == 5

console.log(
    // a === b
    a <= b
    // a !== b
);

// Logical operations

// AND &&, OR ||

// 1, 0

// AND 

// let c = true
// let d = false

let c = 5 > 3  //true
let d = 4 === '4' // false

console.log(
    c && d
)

// OR

let e = true
let f = false

console.log(
    e || f
)

// tenary or conditional operators
let age = 12

console.log(
    age >= 18 ? "You can vote" : "Nope you cannot vote"
)

// String methods

// concatenation
let h = "John"
let i = "Doe"

console.log(
    h + " " + i
)

// legnth
let j = "Earlycode"
let k = "COMPUTER"

console.log(j.length)

console.log(
    j.toUpperCase()
);

console.log(
    k.toLowerCase()
)

// slice
// indexing

console.log(
    j.slice(0, 5)
)

// math module
// abs return absolute value
let l = -20

console.log(
    Math.abs(l)
);

// round
console.log(
    // 3.942
    // Math.round(3.942)
    // Math.ceil(7.142)
    // Math.floor(7.742)

    Math.random()*100000
);

let m = Math.random()*100000
console.log(
    Math.floor(m)
)