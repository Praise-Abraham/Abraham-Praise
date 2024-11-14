// ADVANCED ARRAY METHODS

// map - forEach loop

let numbers = [1, 2, 3, 4, 5]
 
// numbers.forEach((x,y,z)=> {
//     console.log(x);
//     document.write(x)
// });

// numbers.map((num)=>{
//     return(
//         console.log(num)
//     )
// document.write()
// })

// numbers.map(num=>console.log(num)
    // document.write()
// )

numbers.map((num)=>{
    console.log(num);
    document.write(num)
})

// filter

let oddNumbers = numbers.filter(x => x % 2 !== 0)

console.log(oddNumbers);

// find

let two = numbers.find(x => x % 2 === 0)

console.log(two);
// sort

// let words = ["banna", "guava", "pear", "avocado", "mango"]
let words = [56, 100, 34, 79]

let sortedWords = words.sort(
    (a,b) => a - b
)

console.log(sortedWords);

//
let num = [34, 85, 25, 56, 78]

let result = num.map(x => x * x).filter(x => x <= 2000).sort((a,b)=> b-a)

console.log(result);


