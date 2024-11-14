// DOM - Document Object Model

document.write("Hello Praise")

console.log(document.getElementsByTagName('h1'));

let x = document.getElementsByTagName('h1')

console.log(x);

console.log(
    document.getElementsByClassName('.two')
);

console.log(
    document.getElementById('one')
);

let y = document.querySelector('h1')
console.log(
    y.classList.toggle('box')

);

console.log(y);

// let z = z[0]

// console.log(z0);

// let z1 = z0.innerText

// console.log(z1);


// console.log(
//     z[0].innerText
// );


let p = document.querySelector('.four')

p.textContent = "Updated text"

p.innerHTML = `<span>Hello Again</span>`

console.log(p);


// Date Constructor

console.log(
    new Date().getMonth()
);
console.log(
    document.getElementById("date").innerHTML = new Date()   
)

// console.log(
//     new Date().convertNumberToWords(getdate())
// );


if (new Date().getMonth() == 1) {
    console.log("January");   
}  else if (new Date().getMonth() == "10") {
    console.log("September")
} else if (new Date().getMonth() == "8"){
    console.log("August");  
} else if (new Date().getMonth() == "2"){
    console.log("February");  
} else if (new Date().getMonth() == "3"){
    console.log("March");  
} else if (new Date().getMonth() == "4"){
    console.log("April");  
} else if (new Date().getMonth() == "5"){
    console.log("May");  
} else if (new Date().getMonth() == "6"){
    console.log("June");  
} else if (new Date().getMonth() == "7"){
    console.log("July");  
} else if (new Date().getMonth() == "9"){
    console.log("October");  
} else if (new Date().getMonth() == "11"){
    console.log("November");  
} else if (new Date().getMonth() == "12"){
    console.log("December");  
} else{
    console.log("invalid code");  
}
