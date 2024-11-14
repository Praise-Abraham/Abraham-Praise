// advance array methods

let numbers = [45, 82, 1 , 4,]

console.log(numbers);

// mapping functions

// let newArray = numbers.map((num)=>{
//     return num * num
// })

// console.log(newArray);

// let newArray = numbers.map((num)=>(
//     num * num
// ))

// console.log(newArray);

// SYNHRONOUS, ASYNCHRONOUS-ASYNC, CLIENT, SERVER, API, JSON, REQUEST, AWAIT, PROMISE

// APIs- ENDPOINT - URL

// function to display products

const fetchDisplayProduct = async () => {
    const URL = 'https://fakestoreapi.com/products'
    try {       // runs when fetch is successful
        const response = await fetch(URL)

        const products = await response.json()
        
        displayProducts(products)

    } catch (error) {   // runs when fetch is unsucessful
       console.log("Error message", error) 
       alert("Error Displaying product, check console for more information")
    }
}

// function to display on our document
const displayProducts = (products) => {
    const productList = document.querySelector('.product-list')
    let productHTML = ""

    products.forEach(product => {
    
        productHTML += `<div class="w-full rounded-md shadow p-3 m-2 ">
                <h1 class="text-4xl font-bold text-black/80 uppercase text-center mb-5">${product.title}</h1>
                <img src="${product.image}" alt="${product.title.slice(0,3)}" class="w-[15rem] h-[15rem] mx-auto mb-3">
                
                    <p class="text-center">${product.description}</p>
                    <p class="text-md mt-3">${product.category}</p>
                    <p class="text-red-500 font-bold text-md">${product.price}</p>
                    <span class="font-semibold">Rating: <span>${product.rating.rate} (${product.rating.count} reviews)</span></span>  
            </div>`;
        
            productList.innerHTML = productHTML
    })
    
    
};

fetchDisplayProduct()
