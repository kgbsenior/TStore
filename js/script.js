let beginningplace = document.getElementById("select-beginning") 
let placesplace = document.getElementById("select-place")
let heroesplace = document.getElementById("select-heroes")
let phrasesplace = document.getElementById("select-phrases")
let magicplace = document.getElementById("select-magic")
let magicobjectsplace = document.getElementById("select-magicobjects")
let householdplace = document.getElementById("select-household")
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
    outputData("ending", endingplace)
}

function outputData(datakey, place){
    for(let i = 0; i<data[datakey].length; ++i){
        place.insertAdjacentHTML('beforeend', '<article class="block" data-contentid="'+i+'"'+'data-selected="0" data-datakey="'+datakey+'" data-contenttext="'+data[datakey][i]+'" data-contentkey="'+datakey+'"'+'>'+data[datakey][i]+'</article>')
    }
    configBlocks(place.querySelectorAll('.block'))
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









let selectedBeginnings = 0
let selectedPlace = 0
let selectedHeroes = 0
let selectedPhrases = 0
let selectedMagic = 0
let selectedMagicObjects = 0
let selectedHousehold = 0
let selectedEndings = 0


var selectedTotal = 0



let limitBeginnings = beginning_blocks_limit
let limitPlace = place_blocks_limit
let limitHeroes = heroes_blocks_limit
let limitPhrases = phrases_blocks_limit
let limitMagic = magic_blocks_limit
let limitMagicObjects = magicobjects_blocks_limit
let limitHousehold = household_blocks_limit
let limitEndings = ending_blocks_limit

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
                case "ending":
                    selectedEndings = checkBlock(selectedEndings, limitEndings, "select-ending", "ending")
                break
            }


            
 
            selectedTotal = selectedBeginnings+selectedPlace+selectedHeroes+selectedPhrases+selectedMagic+selectedHousehold+selectedEndings+selectedMagicObjects
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
    endingplace.innerHTML = ""
    selectedTotal = 0
    selectedBeginnings = 0
    selectedPlace = 0
    selectedHeroes = 0
    selectedPhrases = 0
    selectedMagic = 0
    selectedHousehold = 0
    selectedEndings = 0
    document.getElementById('section-3').classList.remove('active')
    outputallData()
    changeCart()
}
