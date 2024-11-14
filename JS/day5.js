// switch

let day = "Sunday"
switch (day) {
    case "Monday":
        console.log(1);
        break;
    case "Tuesday":
        console.log(2);   
    // default:
    //     console.log(7);
}

// Loops: is a data presentation untill a condition is met

//for loops

// initialization, condition, increment or decrement

// 1, true
// 2, true
// 3, true
// 4, true
// 5, true

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }


// while loops

let j = 1 // initialization

while (j <= 5) { // condition
    console.log("Hello");
    j++  // increment or decrement
}


// for each loop:

let numbers = [1,2,3,4,5]

numbers.forEach((num, index, array)=>{
    console.log(num, index, array); 
})

// Exercise

let fruit = ["mango, guava, pawpaw, pear"]

    fruit.forEach((fruit)=>{
    console.log(fruit.toUpperCase())

    })

    let num = [1, 2, 3, 5 ]
    let sum = 0
    num.forEach((num)=>{
        let square = 0
        square = num * num
        sum += square
        console.log(
        `The square of ${num} ${square}`
        );  
    })
    console.log(`The sum of squares is ${sum}`);
    
    // 0, 1, 1, 2, 4, 8
    // n*(n-1)
    // 5: 5*4*3

    let n = 5
    let fact = 1

    // n * (n-1)
    // 2! = 2 * 1 
    // 3! = 3*2*1
    // 5! = 5 * 4 * 3 * 2 * 1

    // i = 1
    // fact = 1 * 1 = 1
    // i = 2
    // fact = 1 * 2 = 2
    // i = 3
    // fact = 2 * 3 = 6
    // i = 4
    // fact = 6 * 4 = 24
    // i = 5
    // fact 24 * 5 = 120
    for(let i = 1; i <= n; i++){
        fact = fact * i
        console.log(`Factorial of ${n} is ${fact}`);
}

