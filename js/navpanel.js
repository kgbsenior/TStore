window.addEventListener("scroll", navPanel)
let navpanel = document.getElementById("navpanel")
let pageHeader = document.getElementsByTagName('header')
function navPanel(){
    var scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop
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


    if(pageYOffset>300&pageYOffset<1200){
        document.getElementById('navpan1').classList.add('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
    }
    else if(pageYOffset>1200&pageYOffset<2000){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.add('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
    }
    else if(pageYOffset>2000&pageYOffset<3000){
        document.getElementById('navpan3').classList.add('active')
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
    }
    else if(pageYOffset>3000&pageYOffset<3900){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.add('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
    }
    else if(pageYOffset>3900&pageYOffset<4800){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.add('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.remove('active')
    }
    else if(pageYOffset>4800&pageYOffset<5700){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.add('active')
        document.getElementById('navpan7').classList.remove('active')
    }
    else if(pageYOffset>5700){
        document.getElementById('navpan1').classList.remove('active')
        document.getElementById('navpan2').classList.remove('active')
        document.getElementById('navpan3').classList.remove('active')
        document.getElementById('navpan4').classList.remove('active')
        document.getElementById('navpan5').classList.remove('active')
        document.getElementById('navpan6').classList.remove('active')
        document.getElementById('navpan7').classList.add('active')
    }
}