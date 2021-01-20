let isBel = (readCookie('isBel') == 'true');

if(isBel){
    changeLanguage("bel")
}
else if(!isBel){
    changeLanguage("eng")
}

document.getElementById("englang").addEventListener('click', ()=>{
    changeLanguage("eng")
})

document.getElementById("bellang").addEventListener('click', ()=>{
    changeLanguage("bel")
})

function changeLanguage(a){
    if(a == "bel"){
        document.body.classList.add("bellang");
        document.body.classList.remove("englang");
        document.getElementById("bellang").classList.add("langselected")
        document.getElementById("englang").classList.remove("langselected")
        isBel = true;
        createCookie('isBel', true, '10');
        data = databel
        document.body.classList.remove('englang');
        document.body.classList.add('bellang');
        resetCards()
        resetLimits()
    }
    else if(a == "eng"){
        document.body.classList.remove("bellang");
        document.body.classList.add("englang");
        document.getElementById("bellang").classList.remove("langselected")
        document.getElementById("englang").classList.add("langselected")
        document.body.classList.add('englang');
        document.body.classList.remove('bellang');
        isBel = false;
        createCookie('isBel', false, '10');
        data = dataeng
        resetCards()
        resetLimits()
    }
}
