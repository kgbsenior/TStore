let beginningplace = document.getElementById("select-beginning") 
let placesplace = document.getElementById("select-place")
let heroesplace = document.getElementById("select-heroes")
let phrasesplace = document.getElementById("select-phrases")
let magicplace = document.getElementById("select-magic")
let magicobjectsplace = document.getElementById("select-magicobjects")
let householdplace = document.getElementById("select-household")
let actionsplace = document.getElementById("select-actions")
let endingplace =  document.getElementById("select-ending")

outputallData()

function outputallData(){
    outputData("beginnings", beginningplace)
    outputData("places", placesplace)
    outputData("heroes", heroesplace)
    outputData("phrases", phrasesplace)
    outputData("magic", magicplace)
    outputData("magicobjects", magicobjectsplace)
    outputData("household", householdplace)
    outputData("actions", actionsplace)
    outputData("ending", endingplace)
}

function outputData(datakey, place){
    for(let i = 0; i<data[datakey].length; ++i){
        place.insertAdjacentHTML('beforeend', '<article class="block" data-contentid="'+i+'"'+'data-selected="0" data-datakey="'+datakey+'" data-contenttext="'+data[datakey][i]+'" data-contentkey="'+datakey+'"'+'>'+data[datakey][i]+'</article>')
    }
    configBlocks(place.querySelectorAll('.block'))
}

var beginnings_blocks_limit = 0
var place_blocks_limit = 0
var heroes_blocks_limit = 0
var phrases_blocks_limit = 0
var magic_blocks_limit = 0
var magicobjects_blocks_limit = 0
var household_blocks_limit = 0
var actions_blocks_limit = 0
var ending_blocks_limit = 0

var all_blocks = 0

var selectedBeginnings = 0
var selectedPlace = 0
var selectedHeroes = 0
var selectedPhrases = 0
var selectedMagic = 0
var selectedMagicObjects = 0
var selectedHousehold = 0
var selectedActions = 0
var selectedEndings = 0


var selectedTotal = 0



var limitBeginnings = 0
var limitPlace = 0
var limitHeroes = 0
var limitPhrases = 0
var limitMagic = 0
var limitMagicObjects = 0
var limitHousehold = 0
var limitActions = 0
var limitEndings = 0

resetLimits()

function resetLimits(){
    beginnings_blocks_limit = document.getElementById("select-beginning").querySelectorAll(".block").length
    place_blocks_limit = document.getElementById("select-place").querySelectorAll(".block").length
    heroes_blocks_limit = document.getElementById("select-heroes").querySelectorAll(".block").length
    phrases_blocks_limit = document.getElementById("select-phrases").querySelectorAll(".block").length
    magic_blocks_limit = document.getElementById("select-magic").querySelectorAll(".block").length
    magicobjects_blocks_limit = document.getElementById("select-magicobjects").querySelectorAll(".block").length
    household_blocks_limit = document.getElementById("select-household").querySelectorAll(".block").length
    actions_blocks_limit = document.getElementById("select-actions").querySelectorAll(".block").length
    ending_blocks_limit = document.getElementById("select-ending").querySelectorAll(".block").length

    all_blocks = document.getElementsByClassName('block')

    selectedBeginnings = 0
    selectedPlace = 0
    selectedHeroes = 0
    selectedPhrases = 0
    selectedMagic = 0
    selectedMagicObjects = 0
    selectedHousehold = 0
    selectedActions = 0
    selectedEndings = 0


    selectedTotal = 0



    limitBeginnings = beginnings_blocks_limit
    limitPlace = place_blocks_limit
    limitHeroes = heroes_blocks_limit
    limitPhrases = phrases_blocks_limit
    limitMagic = magic_blocks_limit
    limitMagicObjects = magicobjects_blocks_limit
    limitHousehold = household_blocks_limit
    limitActions = actions_blocks_limit
    limitEndings = ending_blocks_limit
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
                        block.dataset.selected = 0
                        unlockBlocks(document.getElementById(selectid).querySelectorAll(".block"),0, data[datakey].length-1)
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selected
                        block.classList.remove('selected')
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
                case "actions":
                    selectedActions = checkBlock(selectedActions, limitActions, "select-actions", "actions")
                break;
                case "ending":
                    selectedEndings = checkBlock(selectedEndings, limitEndings, "select-ending", "ending")
                break
            }


            
 
            selectedTotal = selectedBeginnings+selectedPlace+selectedHeroes+selectedPhrases+selectedMagic+selectedHousehold+selectedActions+selectedEndings+selectedMagicObjects
            console.log(selectedTotal)
            changeCart()
        })
    }   
}







function resetCards(){
    beginningplace.innerHTML = ""
    placesplace.innerHTML = ""
    heroesplace.innerHTML = ""
    phrasesplace.innerHTML = ""
    magicplace.innerHTML = ""
    magicobjectsplace.innerHTML = ""
    householdplace.innerHTML = ""
    actionsplace.innerHTML = ""
    endingplace.innerHTML = ""
    selectedTotal = 0
    selectedBeginnings = 0
    selectedPlace = 0
    selectedHeroes = 0
    selectedPhrases = 0
    selectedMagic = 0
    selectedHousehold = 0
    selectedActions = 0
    selectedEndings = 0
    outputallData()
    changeCart()
}
