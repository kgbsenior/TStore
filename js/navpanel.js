window.addEventListener("scroll", navPanel)
let navpanel = document.getElementById("navpanel")
let pageHeader = document.getElementsByTagName('header')
function navPanel(){
    if(pageYOffset>10){
        pageHeader[0].classList.add("active")
    }
    else{
        pageHeader[0].classList.remove("active")
    }


    if(pageYOffset>300){
        navpanel.classList.add("active")
    }
    else{
        navpanel.classList.remove("active")
    }


    if(getCoords('beginningheader')>=0&getCoords('beginningheader')>=-180&getCoords('beginningheader')<80){
        document.getElementById('navpan1').classList.add('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
        document.getElementById('navpan8').classList.remove('active')
    }
    else if(getCoords('placeheader')>=0&getCoords('placeheader')>=-180&getCoords('placeheader')<80){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.add('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
        document.getElementById('navpan8').classList.remove('active')
    }
    else if(getCoords('heroesheader')>=0&getCoords('heroesheader')>=-180&getCoords('heroesheader')<80){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.add('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
        document.getElementById('navpan8').classList.remove('active')
    }
    else if(getCoords('phrasesheader')>=0&getCoords('phrasesheader')>=-180&getCoords('phrasesheader')<80){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.add('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
        document.getElementById('navpan8').classList.remove('active')
    }
    else if(getCoords('magicobjectsheader')>=0&getCoords('magicobjectsheader')>=-180&getCoords('magicobjectsheader')<80){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.add('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
        document.getElementById('navpan8').classList.remove('active')
    }
    else if(getCoords('magicheader')>=0&getCoords('magicheader')>=-180&getCoords('magicheader')<80){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.add('active')
        document.getElementById('navpan7').classList.remove('active')
        document.getElementById('navpan8').classList.remove('active')
    }
    else if(getCoords('householdheader')>=0&getCoords('householdheader')>=-180&getCoords('householdheader')<80){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.add('active')
        document.getElementById('navpan8').classList.remove('active')
    }

    else if(getCoords('endingheader')>=0&getCoords('endingheader')>=-180&getCoords('endingheader')<80){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
        document.getElementById('navpan8').classList.add('active')
    }
}





function getCoords(elem){
    var box = document.getElementById(elem).getBoundingClientRect()
    return box.top
}