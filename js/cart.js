let cart = document.getElementById("cart")
let opencartbtn = document.getElementsByClassName('opencart')
let cartOpened = false

let cartPlaces = document.getElementsByClassName('cart-place')

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

    for(let i of cartPlaces){
        i.innerHTML = ""
    }

    all_blocks = document.getElementsByClassName('block')
    for(let i = 0; i<all_blocks.length; ++i){
        if(all_blocks[i].dataset.selected == 1){
           switch(all_blocks[i].dataset.datakey){
                case 'beginnings': 
                    cartPlaces[0].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case 'places':
                    cartPlaces[1].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case 'heroes':
                    cartPlaces[2].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case 'phrases':
                    cartPlaces[3].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case "magicobjects":
                    cartPlaces[4].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case "magic":
                    cartPlaces[5].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case "household":
                    cartPlaces[6].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break;
                case "ending":
                    cartPlaces[7].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`+`</br>`)
                break
           }
        }
    }
}



document.getElementById("generate").addEventListener('click', ()=>{
    generateTable()
})
function generateTable(){
    if(selectedBeginnings>0&selectedHeroes>0&selectedPhrases>0&selectedMagic>0&selectedMagicObjects>0&selectedHousehold>0&selectedEndings>0){
        openCart()
        document.getElementById('section-3').classList.add('active')
        scrollTo(0, getCoords('section-3')+pageYOffset)
        let ResultPlaces = document.getElementsByClassName('r-place')
        all_blocks = document.getElementsByClassName('block')
        for(let i of ResultPlaces){
            i.innerHTML = ""
        }
        for(let i = 0; i<all_blocks.length; ++i){
            if(all_blocks[i].dataset.selected == 1){
               switch(all_blocks[i].dataset.datakey){
                    case 'beginnings': 
                        ResultPlaces[0].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`)
                    break;
                    case 'places':
                        ResultPlaces[1].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`)
                    break;
                    case 'heroes':
                        ResultPlaces[2].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`)
                    break;
                    case 'phrases':
                        ResultPlaces[3].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`)
                    break;
                    case "magicobjects":
                        ResultPlaces[4].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`)
                    break;
                    case "magic":
                        ResultPlaces[5].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`)
                    break;
                    case "household":
                        ResultPlaces[6].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`)
                    break;
                    case "ending":
                        ResultPlaces[7].insertAdjacentHTML('beforeend', `<figure>`+all_blocks[i].dataset.contenttext+`</figure>`)
                    break;
               }
            }
        }
        resetCards()
    }
    else{
        customalert("Please select words in all cetegories to see the results")
    }
    

}