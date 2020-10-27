var heroes_container = document.getElementById("select-heroes")
var heroes_blocks = heroes_container.querySelectorAll(".block")
let selectedblocks = {}
let cart = document.getElementById("cart")
let blockcounter = 0
let heroesplace = document.getElementById("heroes-place")
let opencartbtn = document.getElementsByClassName('opencart')
let cartOpened = false
let closecartbtn = document.getElementById("closecartbtn")

document.getElementById('darkscreen').addEventListener('click', ()=>{
    openCart()
})
document.getElementById('closecartbtn').addEventListener('click', ()=>{
    openCart()
})
function openCart(){
    if(!cartOpened){
        cart.classList.add("active-cart")
        document.getElementById('darkscreen').classList.add('active')
        cartOpened = !cartOpened
        document.body.style.overflowY = 'hidden'
    }
    else{
        cart.classList.remove("active-cart")
        document.getElementById('darkscreen').classList.remove('active')
        cartOpened = !cartOpened
        document.body.style.overflowY = 'scroll'
    }
}


for(i of opencartbtn){
    i.addEventListener('click', ()=>{
        openCart()
    })
}

selectedblocks.length = heroes_blocks.length
for(let i = 0; i<selectedblocks.length;++i){
    selectedblocks[i] = 0
}

for(let block of heroes_blocks){
    block.addEventListener("click", (elem)=>{
        console.log(block.dataset.hero)
        let checkbox = block.querySelector("input")
        if(!checkbox.checked){
            block.classList.add('selected')
            checkbox.checked = true
            selectedblocks[block.dataset.hero] = 1
            console.log(checkbox.checked)
            ++blockcounter
        }
        else{
            block.classList.remove('selected')
            checkbox.checked = false
            selectedblocks[block.dataset.hero] = 0
            console.log(checkbox.checked)
            --blockcounter
        }
        if(selectedblocks[0]==1){
            if(!document.getElementById("hero1")){
                heroesplace.insertAdjacentHTML("beforeend", "<h2 id='hero1'>Asilak</h2>")
            }
        }
        else{
            if(document.getElementById("hero1")){
                document.getElementById("hero1").remove()
            } 
        }

        if(selectedblocks[1]==1){
            if(!document.getElementById("hero2")){
                heroesplace.insertAdjacentHTML("beforeend", "<h2 id='hero2'>Dzedka</h2>")
            }
        }
        else{
            if(document.getElementById("hero2")){
                document.getElementById("hero2").remove()
            } 
        }

        if(selectedblocks[2]==1){
            if(!document.getElementById("hero3")){
                heroesplace.insertAdjacentHTML("beforeend", "<h2 id='hero3'>Balamuten</h2>")
            }
        }
        else{
            if(document.getElementById("hero3")){
                document.getElementById("hero3").remove()
            } 
        }

        if(selectedblocks[3]==1){
            if(!document.getElementById("hero4")){
                heroesplace.insertAdjacentHTML("beforeend", "<h2 id='hero4'>Fish Tsar</h2>")
            }
        }
        else{
            if(document.getElementById("hero4")){
                document.getElementById("hero4").remove()
            } 
        }

        if(selectedblocks[4]==1){
            if(!document.getElementById("hero5")){
                heroesplace.insertAdjacentHTML("beforeend", "<h2 id='hero5'>Zhiten</h2>")
            }
        }
        else{
            if(document.getElementById("hero5")){
                document.getElementById("hero5").remove()
            } 
        }

        if(selectedblocks[5]==1){
            if(!document.getElementById("hero6")){
                heroesplace.insertAdjacentHTML("beforeend", "<h2 id='hero6'>Hatnik</h2>")
            }
        }
        else{
            if(document.getElementById("hero6")){
                document.getElementById("hero6").remove()
            } 
        }
    })
}