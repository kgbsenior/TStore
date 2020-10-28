let beginning_blocks_limit = document.getElementById("select-beginning").querySelectorAll(".block").length-1
let place_blocks_limit = document.getElementById("select-place").querySelectorAll(".block").length+beginning_blocks_limit
let heroes_blocks_limit = document.getElementById("select-heroes").querySelectorAll(".block").length+place_blocks_limit
let phrases_blocks_limit = document.getElementById("select-phrases").querySelectorAll(".block").length+heroes_blocks_limit
let magic_blocks_limit = document.getElementById("select-magic").querySelectorAll(".block").length+phrases_blocks_limit
let household_blocks_limit = document.getElementById("select-household").querySelectorAll(".block").length+magic_blocks_limit
let ending_blocks_limit = document.getElementById("select-ending").querySelectorAll(".block").length+heroes_blocks_limit





let all_blocks = document.getElementsByClassName('contentblock')





let selectedblocks = {}




let selectedBeginnings = 0
let selectedPlace = 0
let selectedHeroes = 0
let selectedPhrases = 0
let selectedMagic = 0
let selectedHousehold = 0
let selectedEndings = 0


var selectedTotal = 0



let limitBeginnings = 1
let limitPlace = 1
let limitHeroes = 3
let limitPhrases = 5
let limitMagic = 5
let limitHousehold = 5
let limitEndings = 1

configBlocks(all_blocks)

selectedblocks.length = all_blocks.length


for(let i = 0; i<selectedblocks.length;++i){
    selectedblocks[i] = 0
}


function configBlocks(blocks){
    for(let block of blocks){
        block.addEventListener("click", (elem)=>{
            console.log(block.dataset.contentid)
            let contentId = parseInt(block.dataset.contentid)
            if(contentId<=beginning_blocks_limit){
                if(selectedBeginnings<limitBeginnings){
                    if(!block.classList.contains('selected')){
                        ++selectedBeginnings
                        block.classList.add('selected')
                        selectedblocks[block.dataset.contentid] = 1
                    }
                    else{
                        --selectedBeginnings
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selectedBeginnings
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
            }

            else if(contentId>beginning_blocks_limit&contentId<=place_blocks_limit){
                if(selectedPlace<limitPlace){
                    if(!block.classList.contains('selected')){
                        ++selectedPlace
                        block.classList.add('selected')
                        selectedblocks[block.dataset.contentid] = 1
                    }
                    else{
                        --selectedPlace
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selectedPlace
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
            }

            else if(contentId>place_blocks_limit&contentId<=heroes_blocks_limit){
                if(selectedHeroes<limitHeroes){
                    if(!block.classList.contains('selected')){
                        ++selectedHeroes
                        block.classList.add('selected')
                        selectedblocks[block.dataset.contentid] = 1
                    }
                    else{
                        --selectedHeroes
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selectedHeroes
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
            }

            else if(contentId>heroes_blocks_limit&contentId<=phrases_blocks_limit){
                if(selectedPhrases<limitPhrases){
                    if(!block.classList.contains('selected')){
                        ++selectedPhrases   
                        block.classList.add('selected')
                        selectedblocks[block.dataset.contentid] = 1
                    }
                    else{
                        --selectedPhrases
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selectedPhrases
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
            }

            else if(contentId>phrases_blocks_limit&contentId<=magic_blocks_limit){
                if(selectedMagic<limitMagic){
                    if(!block.classList.contains('selected')){
                        ++selectedMagic
                        block.classList.add('selected')
                        selectedblocks[block.dataset.contentid] = 1
                    }
                    else{
                        --selectedMagic
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selectedMagic
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
            }

            else if(contentId>magic_blocks_limit&contentId<=household_blocks_limit){
                if(selectedHousehold<limitHousehold){
                    if(!block.classList.contains('selected')){
                        ++selectedHousehold
                        block.classList.add('selected')
                        selectedblocks[block.dataset.contentid] = 1
                    }
                    else{
                        --selectedHousehold
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selectedHousehold
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
            }

            else if(contentId>ending_blocks_limit&contentId<=blocks.length-1){
                if(selectedEndings<limitEndings){
                    if(!block.classList.contains('selected')){
                        ++selectedEndings
                        block.classList.add('selected')
                        selectedblocks[block.dataset.contentid] = 1
                    }
                    else{
                        --selectedEndings
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
                else{
                    if(block.classList.contains('selected')){
                        --selectedEndings
                        block.classList.remove('selected')
                        selectedblocks[block.dataset.contentid] = 0
                    }
                }
            }
            selectedTotal = selectedBeginnings+selectedPlace+selectedHeroes+selectedPhrases+selectedMagic+selectedHousehold+selectedEndings
            console.log(selectedTotal)
            changeCart()
        })
    }   
}