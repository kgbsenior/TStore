let cart = document.getElementById("cart")
//let heroesplace = document.getElementById("heroes-place")
let opencartbtn = document.getElementsByClassName('opencart')
let cartOpened = false


let cartbeginnings = document.getElementById("cart-beginnings")
let cartplaces = document.getElementById("cart-places")
let cartheroes = document.getElementById("cart-heroes")
let cartphrases = document.getElementById("cart-phrases")
let cartmagic = document.getElementById("cart-magic")
let carthousehold = document.getElementById("cart-household")
let cartendings = document.getElementById("cart-endings")


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


    cartbeginnings.innerHTML = ""
    cartplaces.innerHTML = ""
    cartheroes.innerHTML = ""
    cartphrases.innerHTML = ""
    cartmagic.innerHTML = ""
    carthousehold.innerHTML = ""
    cartendings.innerHTML = ""

    //heroesplace.innerHTML = ''
    all_blocks = document.getElementsByClassName('block')
    for(let i = 0; i<all_blocks.length; ++i){
        if(all_blocks[i].dataset.selected == 1){
           switch(all_blocks[i].dataset.datakey){
                case 'beginnings': 
                    cartbeginnings.insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case 'places':
                    cartplaces.insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case 'heroes':
                    cartheroes.insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case 'phrases':
                    cartphrases.insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case "magic":
                    cartmagic.insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case "household":
                    carthousehold.insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case "ending":
                    cartendings.insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break
           }
        }
    }

    /*
    if(selectedBeginnings!=0){
        for(let i = 0; i<data['beginnings'].length;++i){
            alert(data["beginnings"][i])
        }
    }
    if(selectedPlace!=0){
        for(let i = 0; i<data['places'].length;++i){
            
        }
    }
    if(selectedHeroes){
        for(let i = 0; i<data['heroes'].length;++i){
            
        }
    }
    if(selectedPhrases!=0){
        for(let i = 0; i<data['phrases'].length;++i){
            
        }
    }
    if(selectedMagic){
        for(let i = 0; i<data['magic'].length;++i){
            
        }
    }
    if(selectedHousehold>0){
        for(let i = 0; i<data['household'].length;++i){
            
        }
    }
    if(selectedEndings>0){
        for(let i = 0; i<data['ending'].length;++i){
            
        }
    }
    */
}