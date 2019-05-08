let currentAttacks = [];

function createAttackBox(xOrigin, yOrigin, width, height, damage){
    let newAttack;

    newAttack = {
        xOrigin: xOrigin,
        yOrigin: yOrigin,
        width: width,
        height: height,
        ULCorner: origin - (width/2) - (height/2),
        URCorner: origin + (width/2) - (height/2),
        DLCorner: origin - (width/2) + (height/2),
        DRCorner: origin + (width/2) + (height/2),
        damage: damage,
    };

    currentAttacks.push(newAttack);
}

function displayAttackBoxes(){
    if (currentAttacks.length > 0){
        for (i = 0; i < currentAttacks.length; i++){
            fill(0);
            rect(currentAttacks[i].xOrigin, currentAttacks[i].yOrigin, currentAttacks[i].width, currentAttacks[i].height);
        } 
    }
    
}
