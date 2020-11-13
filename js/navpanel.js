window.addEventListener("scroll", navPanel)
let navpanel = document.getElementById("navpanel")
let pageHeader = document.getElementsByTagName('header')
let navPanBtns = document.getElementsByClassName('navpanbtn')
function navPanel(){
    if(pageYOffset>10){
        pageHeader[0].classList.add("active")
    }
    else{
        pageHeader[0].classList.remove("active")
    }


    if(pageYOffset>500){
        navpanel.classList.add("active")
    }
    else{
        navpanel.classList.remove("active")
    }


    if(getCoords('beginningheader')>=0&getCoords('beginningheader')>=-180&getCoords('beginningheader')<80){
        for(let btn of navPanBtns){
            btn.classList.remove('active')
        }
        navPanBtns[0].classList.add('active')
    }
    else if(getCoords('placeheader')>=0&getCoords('placeheader')>=-180&getCoords('placeheader')<80){
        for(let btn of navPanBtns){
            btn.classList.remove('active')
        }
        navPanBtns[1].classList.add('active')
    }
    else if(getCoords('heroesheader')>=0&getCoords('heroesheader')>=-180&getCoords('heroesheader')<80){
        for(let btn of navPanBtns){
            btn.classList.remove('active')
        }
        navPanBtns[2].classList.add('active')
    }
    else if(getCoords('phrasesheader')>=0&getCoords('phrasesheader')>=-180&getCoords('phrasesheader')<80){
        for(let btn of navPanBtns){
            btn.classList.remove('active')
        }
        navPanBtns[3].classList.add('active')
    }
    else if(getCoords('magicobjectsheader')>=0&getCoords('magicobjectsheader')>=-180&getCoords('magicobjectsheader')<80){
        for(let btn of navPanBtns){
            btn.classList.remove('active')
        }
        navPanBtns[4].classList.add('active')
    }
    else if(getCoords('magicheader')>=0&getCoords('magicheader')>=-180&getCoords('magicheader')<80){
        for(let btn of navPanBtns){
            btn.classList.remove('active')
        }
        navPanBtns[5].classList.add('active')
    }
    else if(getCoords('householdheader')>=0&getCoords('householdheader')>=-180&getCoords('householdheader')<80){
        for(let btn of navPanBtns){
            btn.classList.remove('active')
        }
        navPanBtns[6].classList.add('active')
    }

    else if(getCoords('endingheader')>=0&getCoords('endingheader')>=-180&getCoords('endingheader')<80){
        for(let btn of navPanBtns){
            btn.classList.remove('active')
        }
        navPanBtns[7].classList.add('active')
    }
}





function getCoords(elem){
    var box = document.getElementById(elem).getBoundingClientRect()
    return box.top
}
