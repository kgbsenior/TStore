let cart = document.getElementById("cart")
//let heroesplace = document.getElementById("heroes-place")
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
        document.body.style.overflowY = "hidden"
    }
    else{
        cart.classList.remove("active-cart")
        document.getElementById('darkscreen').classList.remove('active')
        cartOpened = !cartOpened
        document.body.style.overflowY = "scroll"
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
    heroesplace.innerHTML = ''
    for(let i = 0; i < selectedblocks.length;++i){
        if(selectedblocks[i] == 1){
            heroesplace.insertAdjacentHTML('beforeend', all_blocks[i].innerHTML+"<br/>")
        }
        else{

        }
    }

}