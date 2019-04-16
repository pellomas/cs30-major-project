let encounterArray = [];
function setRandomEncounters(encounterAmount, encounterRate){
    for (i = 0; i < encounterAmount; i++){
        if (floor(random(0, encounterRate)) === 0){
            encounterArray.push('monster');
        }
        else{
            encounterArray.push('no encounter');
        }
    }
}

function getEncounter(){
    let currentSpace;
    currentSpace = encounterArray.unshift();
    if (currentSpace !== 'no encounter'){
        console.log(currentSpace);
    }
}