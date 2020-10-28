let cart = document.getElementById("cart")
let heroesplace = document.getElementById("heroes-place")
let opencartbtn = document.getElementsByClassName('opencart')
let cartOpened = false


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


function changeCart(){

    document.getElementsByClassName('cartcounter')[0].innerHTML = selectedTotal.toString()
    document.getElementsByClassName('cartcounter')[1].innerHTML = selectedTotal.toString()
    
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

}