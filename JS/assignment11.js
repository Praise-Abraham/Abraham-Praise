const icon = document.querySelector(".viet")
const glow = document.querySelector(".glow")

glow.textContent = "ON"
glow.addEventListener("click", ()=>{
    icon.classList.toggle("bulb")  

    if (glow.textContent == 'ON') {
        glow.textContent = "OFF"
    } else {
        glow.textContent = "ON"
    }

});