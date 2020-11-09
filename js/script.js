let beginningplace = document.getElementById("select-beginning") 
let placesplace = document.getElementById("select-place")
let heroesplace = document.getElementById("select-heroes")
let phrasesplace = document.getElementById("select-phrases")
let magicplace = document.getElementById("select-magic")
let householdplace = document.getElementById("select-household")
let endingplace =  document.getElementById("select-ending")



var data = {
    beginnings: 
    [
        "Once upon a time there was…",
        "One fine summer's day…",
        "Long years ago, there lived …who…",
        "Once upon a time, and a very good time it was, though it wasn't in my time, nor in your time, nor anyone else's time…",
        "It chanced that once upon a time long years ago, in the days when strange things used to happen in the world…",
        "A girl once went",
        "There once lived a … and a … as many a one has been.",
        "A lad named … was once so unhappy…",
        "Near a pixy field in the neighbourhood of Dartmoor, there lived, on a time …",
        "This, O my Best Beloved, is a story—a new and a wonderful story—a story quite different from the other stories…",
        "Long before Arthur and the Knights of the Round Table…",
        "There was once a man who…",
        "In the days of the great King Arthur there lived…",
        "Once upon a time when pigs spoke",
        "rhyme…"
    ],
    places:
    [
        "Place1",
        "Place2",
        "Place3"
    ],
    heroes:
    [
        "Hero1",
        "Hero2",
        "Hero3"
    ],
    phrases:
    [
        "Phrase1",
        "Phrase2",
        "Phrase3",
        "Phrase4",
        "Phrase5"
    ],
    magic:
    [
        "Magic1",
        "Magic2",
        "Magic3",
        "Magic4",
        "Magic5"
    ],
    household:
    [
        "Household1",
        "Household2",
        "Household3",
        "Household4",
        "Household5"
    ],
    ending:
    [
        '…and they all lived happy and died happy, and never drank out of a dry cappy.',
        '…and they lived happy ever afterwards.',
        "… till the day of her death.",
        "…and they all lived happy as could be ever afterwards.",
        "And they were married, and he and she are living happy to this day for aught I know.",
        "That's all",
        "…and was never seen again.",
        "And they lived happy all their days."   
    ]

  };

outputData("beginnings", beginningplace, "select-beginning")
outputData("places", placesplace, "select-place")
outputData("heroes", heroesplace, "select-heroes")
outputData("phrases", phrasesplace, "select-phrases")
outputData("magic", magicplace, "select-magic")
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
let household_blocks_limit = document.getElementById("select-household").querySelectorAll(".block").length-1
let ending_blocks_limit = document.getElementById("select-ending").querySelectorAll(".block").length
















let all_blocks = document.getElementsByClassName('block')





let selectedblocks = {}




let selectedBeginnings = 0
let selectedPlace = 0
let selectedHeroes = 0
let selectedPhrases = 0
let selectedMagic = 0
let selectedHousehold = 0
let selectedEndings = 0


var selectedTotal = 0



let limitBeginnings = 3
let limitPlace = 1
let limitHeroes = 3
let limitPhrases = 3
let limitMagic = 3
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