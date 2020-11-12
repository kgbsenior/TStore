let beginningplace = document.getElementById("select-beginning") 
let placesplace = document.getElementById("select-place")
let heroesplace = document.getElementById("select-heroes")
let phrasesplace = document.getElementById("select-phrases")
let magicplace = document.getElementById("select-magic")
let magicobjectsplace = document.getElementById("select-magicobjects")
let householdplace = document.getElementById("select-household")
let endingplace =  document.getElementById("select-ending")



outputData("beginnings", beginningplace, "select-beginning")
outputData("places", placesplace, "select-place")
outputData("heroes", heroesplace, "select-heroes")
outputData("phrases", phrasesplace, "select-phrases")
outputData("magic", magicplace, "select-magic")
outputData("magicobjects", magicobjectsplace, "select-magicobjects")
outputData("household", householdplace, "select-household")
outputData("ending", endingplace, "select-ending")



function outputData(datakey, place, selectid){
    for(let i = 0; i<data[datakey].length; ++i){
        place.insertAdjacentHTML('beforeend', '<article class="block" data-contentid="'+i+'"'+'data-selected="0" data-datakey="'+datakey+'" data-contenttext="'+data[datakey][i]+'" data-contentkey="'+datakey+'"'+'>'+data[datakey][i]+'</article>')
    }
    configBlocks(document.getElementById(selectid).querySelectorAll('.block'))
}



let beginning_blocks_limit = document.getElementById("select-beginning").querySelectorAll(".block").length-1
let place_blocks_limit = document.getElementById("select-place").querySelectorAll(".block").length-1
let heroes_blocks_limit = document.getElementById("select-heroes").querySelectorAll(".block").length-1
let phrases_blocks_limit = document.getElementById("select-phrases").querySelectorAll(".block").length-1
let magic_blocks_limit = document.getElementById("select-magic").querySelectorAll(".block").length-1
let magicobjects_blocks_limit = document.getElementById("select-magicobjects").querySelectorAll(".block").length-1
let household_blocks_limit = document.getElementById("select-household").querySelectorAll(".block").length-1
let ending_blocks_limit = document.getElementById("select-ending").querySelectorAll(".block").length
















let all_blocks = document.getElementsByClassName('block')





let selectedblocks = {}




let selectedBeginnings = 0
let selectedPlace = 0
let selectedHeroes = 0
let selectedPhrases = 0
let selectedMagic = 0
let selectedMagicObjects = 0
let selectedHousehold = 0
let selectedEndings = 0


var selectedTotal = 0



let limitBeginnings = 3
let limitPlace = 1
let limitHeroes = 3
let limitPhrases = 3
let limitMagic = 3
let limitMagicObjects = 2
let limitHousehold = 3
let limitEndings = 1

selectedblocks.length = all_blocks.length


for(let i = 0; i<selectedblocks.length; ++i){
    selectedblocks[i] = 0
}



function lockBlocks(array, limit1, limit2){
    for(let i = limit1; i<array.length; ++i){
        array[i].classList.add('blocked')
    }
}
function unlockBlocks(array, limit1, limit2){
    for(let i = limit1; i<array.length; ++i){
        array[i].classList.remove('blocked')
    }
}

function configBlocks(blocks){
    for(let block of blocks){
        block.addEventListener("click", (elem)=>{
            console.log(block.dataset.contentid)
            let contentId = parseInt(block.dataset.contentid)
            let contentkey = block.dataset.contentkey
            
            function checkBlock(selected, limit, selectid, datakey){
                if(selected<limit){
                    if(!block.classList.contains('selected')){
                        block.classList.add('selected')
                        selectedblocks[block.dataset.contentid] = 1
                        block.dataset.selected = 1
                        ++selected
                        if(selected==limit){
                            lockBlocks(document.getElementById(selectid).querySelectorAll(".block"),0, data[datakey].length-1)
                            customalert("You have selected all cards in this category.")
                        }
                    }
                    else if(block.classList.contains('selected')){
                        --selected
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                        block.dataset.selected = 0
                        unlockBlocks(document.getElementById(selectid).querySelectorAll(".block"),0, data[datakey].length-1)
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selected
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                        block.dataset.selected = 0
                        unlockBlocks(document.getElementById(selectid).querySelectorAll(".block"),0, data[datakey].length-1)
                    }
                    else{
                        customalert("Try another category.")
                    }
                }
                return selected
            }
            switch(contentkey){
                case 'beginnings': 
                    selectedBeginnings = checkBlock(selectedBeginnings, limitBeginnings, "select-beginning","beginnings")
                break;
                case 'places':
                    selectedPlace = checkBlock(selectedPlace, limitPlace, "select-place", "places")
                break;
                case 'heroes':
                    selectedHeroes = checkBlock(selectedHeroes, limitHeroes, "select-heroes", "heroes")
                break;
                case 'phrases':
                    selectedPhrases = checkBlock(selectedPhrases, limitPhrases, "select-phrases", "phrases")
                break;
                case "magic":
                    selectedMagic = checkBlock(selectedMagic, limitMagic, "select-magic", "magic")
                break;
                case "magicobjects":
                    selectedMagicObjects = checkBlock(selectedMagicObjects, limitMagicObjects, "select-magicobjects", "magicobjects")
                break;
                case "household":
                    selectedHousehold = checkBlock(selectedHousehold, limitHousehold, "select-household", "household")
                break;
                case "ending":
                    selectedEndings = checkBlock(selectedEndings, limitEndings, "select-ending", "ending")
                break
            }


            
 
            selectedTotal = selectedBeginnings+selectedPlace+selectedHeroes+selectedPhrases+selectedMagic+selectedHousehold+selectedEndings
            console.log(selectedTotal)
            changeCart()
        })
    }   
}






let language = "eng"
document.getElementById("englang").addEventListener('click', ()=>{
    changeLanguage("eng")
})

document.getElementById("bellang").addEventListener('click', ()=>{
    changeLanguage("bel")
})

function changeLanguage(a){
    if(a == "eng" & language == "eng"){

    }
    else if(a == "bel" & language == "bel"){

    }
    else if(a == "bel" & language == "eng"){
        document.getElementById("bellang").classList.add("langselected")
        document.getElementById("englang").classList.remove("langselected")

        language = "bel"
        data = databel
        beginningplace.innerHTML = ""
        placesplace.innerHTML = ""
        heroesplace.innerHTML = ""
        phrasesplace.innerHTML = ""
        magicplace.innerHTML = ""
        householdplace.innerHTML = ""
        endingplace.innerHTML = ""
        selectedTotal = 0
        selectedBeginnings = 0
        selectedPlace = 0
        selectedHeroes = 0
        selectedPhrases = 0
        selectedMagic = 0
        selectedHousehold = 0
        selectedEndings = 0
        outputData("beginnings", beginningplace, "select-beginning")
        outputData("places", placesplace, "select-place")
        outputData("heroes", heroesplace, "select-heroes")
        outputData("phrases", phrasesplace, "select-phrases")
        outputData("magic", magicplace, "select-magic")
        outputData("magicobjects", magicobjectsplace, "select-magicobjects")
        outputData("household", householdplace, "select-household")
        outputData("ending", endingplace, "select-ending")
        changeCart()
    }
    else if(a == "eng" & language == "bel"){
        document.getElementById("bellang").classList.remove("langselected")
        document.getElementById("englang").classList.add("langselected")

        language = "eng"
        data = dataeng
        beginningplace.innerHTML = ""
        placesplace.innerHTML = ""
        heroesplace.innerHTML = ""
        phrasesplace.innerHTML = ""
        magicplace.innerHTML = ""
        householdplace.innerHTML = ""
        endingplace.innerHTML = ""
        selectedTotal = 0
        selectedBeginnings = 0
        selectedPlace = 0
        selectedHeroes = 0
        selectedPhrases = 0
        selectedMagic = 0
        selectedHousehold = 0
        selectedEndings = 0
        outputData("beginnings", beginningplace, "select-beginning")
        outputData("places", placesplace, "select-place")
        outputData("heroes", heroesplace, "select-heroes")
        outputData("phrases", phrasesplace, "select-phrases")
        outputData("magic", magicplace, "select-magic")
        outputData("magicobjects", magicobjectsplace, "select-magicobjects")
        outputData("household", householdplace, "select-household")
        outputData("ending", endingplace, "select-ending")
        changeCart()
    }
}