//----------------------------------------------------PLAYERS------------------------------------------------------

let currentAttacks = [];

function createAttackBox(xOrigin, yOrigin, width, height, damage, castingTime){
    let newAttack;

    newAttack = {
        xOrigin: xOrigin,
        yOrigin: yOrigin,
        width: width,
        height: height,
        URCorner: xOrigin + (width),
        DLCorner: yOrigin + (height),
        DRCorner: xOrigin + (width) + (height), 
        damage: damage,
        arrayPosition: currentAttacks.length,
    };

    currentAttacks.push(newAttack);
    setTimeout(function(){currentAttacks.splice(newAttack.arrayPosition, 1)}, castingTime);
}

function displayAttackBoxes(){
    if (currentAttacks.length > 0){
        for (i = 0; i < currentAttacks.length; i++){
            fill(0);
            rect(currentAttacks[i].xOrigin, currentAttacks[i].yOrigin, currentAttacks[i].width, currentAttacks[i].height);
        } 
    }
    
}

//-----------------------------------------------------MONSTERS--------------------------------------------------------

let monsterAttacks = [];

function createMonsterAttack(xOrigin, yOrigin, width, height, damage, castingTime){
    let newAttack;

    newAttack = {
        xOrigin: xOrigin,
        yOrigin: yOrigin,
        width: width,
        height: height,
        URCorner: xOrigin + (width),
        DLCorner: yOrigin + (height),
        DRCorner: xOrigin + (width) + (height), 
        damage: damage,
        arrayPosition: monsterAttacks.length,
    };

    monsterAttacks.push(newAttack);
    setTimeout(function(){monsterAttacks.splice(newAttack.arrayPosition, 1)}, castingTime);
}

function displayMonsterAttacks(){
    if (monsterAttacks.length > 0){
        for (i = 0; i < monsterAttacks.length; i++){
            fill(0);
            rect(monsterAttacks[i].xOrigin, monsterAttacks[i].yOrigin, monsterAttacks[i].width, monsterAttacks[i].height);
        } 
    }
    
}
