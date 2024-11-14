
// let a = Number(prompt("Enter number1"))
// let b = Number(prompt("Enter number2"))

// let sum = (a, b) =>{
//     console.log(a+b)
//  };

//  sum(a,b)

//  const greet = ()=> {
//     return("Hello")
//  };

//  console.log(greet());
 
// alert("Hello")

let z = 10

const NumCheck = ()=>{
    if (z % 2 == 1) {
        console.log("Odd number");
        
    } else{
       console.log("evennumber") 
    }
};

NumCheck()



let drink = "coke"

if (drink == "coke") {
    console.log("Buy coke")
} else if (drink == "Sprite") {
    console.log("Buy sprite")
} else {
    console.log("Buy water");
    
}

// Assignment


// let a = 0-39 - F
// let b = 40-49 - D
// let c = 50-60 - C
// let d = 61-69 - B
// let e = 70-100 - A

let score = prompt("Enter your score")

if (score >= 0 && score <= 39) {
    console.log("F");  
}
else if(score >= 40 && score <= 49){
    console.log("D");   
}
else if(score >= 50 && score <=60){
    console.log("C"); 
}
else if(score >=61 && score <=69){
    console.log("B");   
} else if(score >= 70 && score <=100){
    console.log("A");
    
}else{
    console.log("Invalid input");   
}