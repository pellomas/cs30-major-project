let currentAttacks = [];

function createAttackBox(xOrigin, yOrigin, width, height, damage){
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
    setTimeout(currentAttacks.splice, 10, newAttack.arrayPosition, 1);
}

function displayAttackBoxes(){
    if (currentAttacks.length > 0){
        for (i = 0; i < currentAttacks.length; i++){
            fill(0);
            rect(currentAttacks[i].xOrigin, currentAttacks[i].yOrigin, currentAttacks[i].width, currentAttacks[i].height);
        } 
    }
    
}
