let isAlertOn = false
let alertBlock = document.getElementById("alert")

alertBlock.addEventListener('click', ()=>{
    customalert()
})

function customalert(a){
    let time = 3000
    if(!isAlertOn){
        alertBlock.classList.add('active')
        alertBlock.innerHTML = ""
        alertBlock.insertAdjacentHTML('beforeend', `<p>`+a+`</p>`)
        isAlertOn = true
        t = setTimeout(() => {
            alertBlock.classList.remove('active')
            isAlertOn = false
        }, time)
    }
    else{
        clearTimeout(t)
        alertBlock.innerHTML = ""
        alertBlock.insertAdjacentHTML('beforeend', `<p>`+a+`</p>`)
        alertBlock.classList.add('active')
        alertBlock.addEventListener('click', ()=>{
            alertBlock.classList.remove('active')
            isAlertOn = false
            clearTimeout(t)
        })
        isAlertOn = true

        t = setTimeout(() => {
            alertBlock.classList.remove('active')
            isAlertOn = false
        }, time)
    }
}