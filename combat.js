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
        arrayPosition: random(0, 999999999),
    };

    currentAttacks.push(newAttack);
    setTimeout(function(){terminatePlayerAttack(newAttack.arrayPosition)}, castingTime);
}

function terminatePlayerAttack(tag){
    for(i = 0; i < currentAttacks.length; i++){
        if(currentAttacks[i].arrayPosition === tag){
            currentAttacks.splice(i, 1);
        }
    }
}

function displayAttackBoxes(){
    if (currentAttacks.length > 0){
        for (i = 0; i < currentAttacks.length; i++){
            fill(255);
            rect(currentAttacks[i].xOrigin, currentAttacks[i].yOrigin, currentAttacks[i].width, currentAttacks[i].height);
        } 
    }
    
}

//-----------------------------------------------------MONSTERS--------------------------------------------------------

let monsterAttacks = [];

function createMonsterAttack(xOrigin, yOrigin, width, height, damage, castingTime, sprite){
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
            sprite: sprite,
            arrayPosition: random(0, 999999999),
        };

        monsterAttacks.push(newAttack);
        setTimeout(function(){terminateMonsterAttack(newAttack.arrayPosition)}, castingTime);   
    }
    
function terminateMonsterAttack(tag){
    for(i = 0; i < monsterAttacks.length; i++){
        if(monsterAttacks[i].arrayPosition === tag){
            monsterAttacks.splice(i, 1);
        }
    }
}

function displayMonsterAttacks(){
    if (monsterAttacks.length > 0){
        for (i = 0; i < monsterAttacks.length; i++){
            fill(monsterAttacks[i].sprite);
            rect(monsterAttacks[i].xOrigin, monsterAttacks[i].yOrigin, monsterAttacks[i].width, monsterAttacks[i].height);
        } 
    }
    
}
