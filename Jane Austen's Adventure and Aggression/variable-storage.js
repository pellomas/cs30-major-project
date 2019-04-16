let playerCharacters;
let isMovingRight;
let isMovingLeft;

function initializeVariables(){
    
    rogue = {       
        jumpHeight: 20,
        maxHealth: 30,
        height: 60,
        width: 45,
        moveSpeed: 10,
        sprite: 'purple',
    };
    paladin = {
        jumpHeight: 10,
        maxHealth: 30,
        height: 65,
        width: 52,
        moveSpeed: 5,
        sprite: 'red',
    };
    mage = {
        jumpHeight: 15,
        maxHealth: 30,
        height: 70,
        width: 45,
        moveSpeed: 8,
        sprite: 'cyan',
    };
    cleric = {
        jumpHeight: 12,
        maxHealth: 30,
        height: 67,
        width: 50,
        moveSpeed: 6,
        sprite: 'yellow',
    };

    playerCharacters = [rogue, paladin, mage, cleric, rogue, rogue, paladin, mage, cleric];

    playerOne = {
        class: 0,
        xPosition: width/2,
        yPosition: height/2,
        xSpeed: 0,
        ySpeed: 0,
        currentHealth: 30,
        isCasting: false,
        isStunned: false,
        canJump: false,
    }
}

let menuCellSize;
let menuPosition;

function initializeWindowVariables(){
    if (width > height) {
        menuCellSize = height / 3;
    }
    else {
        menuCellSize = width / 3
    }
    menuPosition = ((width - 3*menuCellSize) / 2);
}