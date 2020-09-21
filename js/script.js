var heroes_container = document.getElementById("select-heroes")
var heroes_blocks = heroes_container.querySelectorAll(".block")
let selectedblocks = {}
let cart = document.getElementById("cart")
let blockcounter = 0

selectedblocks.length = heroes_blocks.length-1
for(let i = 0; i<selectedblocks.length-1;++i){
    selectedblocks[i] = 0
}

for(let block of heroes_blocks){
    block.addEventListener("click", (elem)=>{
        console.log(block.dataset.hero)
        let checkbox = block.querySelector("input")
        cart.classList.add("active-cart")
        if(!checkbox.checked){
            checkbox.checked = true
            selectedblocks[block.dataset.hero] = 1
            console.log(checkbox.checked)
            cart.querySelector("p").innerHTML=selectedblocks
            ++blockcounter
        }
        else{
            checkbox.checked = false
            selectedblocks[block.dataset.hero] = 0
            console.log(checkbox.checked)
            cart.querySelector("p").innerHTML=selectedblocks
            --blockcounter
            if(blockcounter==0){
                cart.classList.remove("active-cart")
            }
        }
    })
}