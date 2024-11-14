// Date & Time
let date = new Date()

console.log(date);

console.log(
    date.getFullYear()
);

console.log(
    date.getMonth()
);

console.log(
    date.getDate()
);

console.log(
    date.getDay()
);

console.log(
    date.getMilliseconds()
);


// timestamp, jan 1 1970

let timestamp = date.getTime()

console.log(timestamp);

let date2 = new Date(1730297866737)

console.log(date2);


// timeout, intervals


//timeout

// setTimeout(()=>{
//     console.log("Set timeout");
    
// }, 3000)


// // intervals 

// const interval1 = setInterval(() => {
//     console.log("interval");
    
// }, 4000);

// // clear interval

// setTimeout(()=>{
//     clearInterval(interval1)
//     console.log("interval cleared");   
// }, 10000)

// Exercise in class

let date3 = new Date()


setTimeout(()=>{
    console.log(date3);
}, 4000)

