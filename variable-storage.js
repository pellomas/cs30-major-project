let playerCharacters;
let isMovingRight;
let isMovingLeft;

function initializeVariables(){
    class Rogue{
        constructor(){
            this.jumpHeight = 20;
            this.maxHealth = 30;
            this.height = 60;
            this.width = 45;
            this.moveSpeed = 10;
            this.sprite = 'purple';

            this.attackOneLength = 110;
            this.attackOneHeight = 30;
            this.attackOneYPosition = 20;
            this.attackOneCastTime = 20;
            this.AttackOneDamage = 10;

            this.description = 'Rogue -=- Swift and light on your feet, you use dagger and dexterity to dispatch your enemies.'
        }

        attackOne(){
            if(playerOne.direction === 1){
               createAttackBox(playerOne.xPosition, playerOne.yPosition - this.attackOneYPosition, this.attackOneLength, this.attackOneHeight, this.AttackOneDamage, this.attackOneCastTime); 
            }
            else if(playerOne.direction === -1){
                createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - this.attackOneYPosition, this.attackOneLength, this.attackOneHeight, this.AttackOneDamage, this.attackOneCastTime);  
            }
        }
        attackTwo(){
            if(playerOne.xPosition > mouseX){
                playerOne.xPosition = mouseX;
            }
            if(playerOne.yPosition > mouseY && mouseY < height - rects[floor(mouseX)].height){
                playerOne.yPosition = mouseY;
            }
        }
    }
    
    class Paladin{
        constructor(){
            this.jumpHeight = 10;
            this.maxHealth = 60;
            this.height = 65;
            this.width = 52;
            this.moveSpeed = 5;
            this.sprite = 'red';  

            this.attackOneLength = 80;
            this.attackOneCastTime = 20;

            this.description = 'Paladin -=- Slow and heavily armored, you use the blessing of your god and your heavy mace to smite your foes.'
        }
        
        attackOne(){
            if(playerOne.direction === 1){
                createAttackBox(playerOne.xPosition, playerOne.yPosition - 20, this.attackOneLength, 20, 20, this.attackOneCastTime) 
             }
             else if(playerOne.direction === -1){
                 createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Mage{
        constructor(){
            this.jumpHeight = 14;
            this.maxHealth = 30;
            this.height = 65;
            this.width = 52;
            this.moveSpeed = 7;
            this.sprite = 'cyan'; 
            
            this.attackOneLength = 80;
            this.attackOneCastTime = 20;

            this.description = 'Mage -=- A brilliant and well-educated magic user, you can use arcane magic to dispatch enemies.'
        }
        
        attackOne(){
            if(playerOne.direction === 1){
                createAttackBox(playerOne.xPosition, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
             else if(playerOne.direction === -1){
                 createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Cleric{
        constructor(){
            this.jumpHeight = 12;
            this.maxHealth = 30;
            this.height = 65;
            this.width = 52;
            this.moveSpeed = 6;
            this.sprite = 'yellow'; 
            
            this.attackOneLength = 80;
            this.attackOneCastTime = 20;

            this.description = 'Cleric -=- Pious and just, you use the favour of your god to smite your enemies.'
        }
        
        attackOne(){
            if(playerOne.direction === 1){
                createAttackBox(playerOne.xPosition, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
             else if(playerOne.direction === -1){
                 createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Pyromancer{
        constructor(){
            this.jumpHeight = 12;
            this.maxHealth = 20;
            this.height = 75;
            this.width = 47;
            this.moveSpeed = 6;
            this.sprite = 'orange';  

            this.attackOneLength = 80;
            this.attackOneCastTime = 20;

            this.description = 'Pyromancer -=- Destructive and hotheaded, you use fire magic to blow your enemies away.'
        }
        
        attackOne(){
            if(playerOne.direction === 1){
                createAttackBox(playerOne.xPosition, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
             else if(playerOne.direction === -1){
                createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Lancer{
        constructor(){
            this.jumpHeight = 8;
            this.maxHealth = 65;
            this.height = 70;
            this.width = 67;
            this.moveSpeed = 4;
            this.sprite = color(191, 244, 66); 

            this.attackOneLength = 120;
            this.attackOneCastTime = 30;
            
            this.description = 'Lancer -=- Tough and strong, you absorb enemy attacks with thick armour and stab enemies with your mighty lance.'
        }
        
        attackOne(){
            if(playerOne.direction === 1){
                createAttackBox(playerOne.xPosition, playerOne.yPosition - 20, this.attackOneLength, 30, 25, this.attackOneCastTime) 
            }
            else if(playerOne.direction === -1){
                createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - 20, this.attackOneLength, 30, 25, this.attackOneCastTime) 
            }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Healer{
        constructor(){
            this.jumpHeight = 12;
            this.maxHealth = 30;
            this.height = 67;
            this.width = 52;
            this.moveSpeed = 7.5;
            this.sprite = 'chartreuse'; 

            this.attackOneLength = 80;
            this.attackOneCastTime = 20;
            
            this.description = 'Healer -=- Kind and generous, you use healing magic and medicine to keep your allies in fighting shape.'
        }
        
        attackOne(){
            if(playerOne.direction === 1){
                createAttackBox(playerOne.xPosition, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
             else if(playerOne.direction === -1){
                 createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Trapper{
        constructor(){
            this.jumpHeight = 12;
            this.maxHealth = 30;
            this.height = 63;
            this.width = 53;
            this.moveSpeed = 6;
            this.sprite = 'brown';  

            this.attackOneLength = 80;
            this.attackOneCastTime = 20;

            this.description = 'Trapper -=- Crafty and resourceful, you use traps and nets to keep enemies out of the fight.'
        }
        
        attackOne(){
            if(playerOne.direction === 1){
                createAttackBox(playerOne.xPosition, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
             else if(playerOne.direction === -1){
                 createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Bard{
        constructor(){
            this.jumpHeight = 12;
            this.maxHealth = 30;
            this.height = 55;
            this.width = 44;
            this.moveSpeed = 9;
            this.sprite = 'pink';  

            this.attackOneLength = 110;
            this.attackOneCastTime = 20;

            this.description = 'Bard -=- Light-footed and joyful, you use the power of music to invigorate and fortify your allies.'
        }
        
        attackOne(){
            if(playerOne.direction === 1){
                createAttackBox(playerOne.xPosition, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
             else if(playerOne.direction === -1){
                 createAttackBox(playerOne.xPosition - this.attackOneLength, playerOne.yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    rogue = new Rogue();
    paladin = new Paladin();
    mage = new Mage();
    cleric = new Cleric();
    pyromancer = new Pyromancer();
    lancer = new Lancer();
    healer = new Healer();
    trapper = new Trapper();
    bard = new Bard();

    playerCharacters = [rogue, paladin, lancer, cleric, pyromancer, mage, healer, trapper, bard];

    class Player{
        constructor(){
            this.job = 0;
            this.xPosition = width/2;
            this.yPosition = height/2;
            this.direction = 1
            this.xSpeed = 0;
            this.ySpeed = 0;
            this.currentHealth = 30;
            this.isCasting = false;
            this.isStunned = false;
            this.canJump = false;
            this.invincible = false;
        }
    

    checkDamage(){
        if(!this.invincible){
            for (i=0; i < monsterAttacks.length; i++){
                if (this.xPosition + playerCharacters[this.job].width/2 >= monsterAttacks[i].xOrigin && 
                    this.xPosition - playerCharacters[this.job].width/2 <= monsterAttacks[i].URCorner &&
                    this.yPosition + playerCharacters[this.job].height/2 >= monsterAttacks[i].yOrigin &&
                    this.yPosition - playerCharacters[this.job].height/2 <= monsterAttacks[i].DLCorner){

                    this.perish(monsterAttacks[i].damage);     
                }
            }   
        }
        
    }

    perish(damage){
        this.currentHealth -= damage;

        this.invincible = true;
        setTimeout(refreshInvincibility, 1000);

        if(this.currentHealth <= 0){
            console.log('oops you ded');
            gameMode = 0;
            monsterArray = [];
        }
    }
}

function refreshInvincibility(){
    if(playerOne.invincible === true){
        playerOne.invincible = false;
    }
}

playerOne = new Player();

    
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

let inventoryGrid = [];
let inventory;

function initializeInventoryVariables(){
    inventory = {
        xPosition: width - 245,
        yPosition: 5,
        cellSize: 80,
        cellNumber: 3,
        assets: [HealthPotion, HealthPotion, HealthPotion, HealthPotion, HealthPotion, HealthPotion, HealthPotion, HealthPotion, HealthPotion],
    };
    inventoryGrid = create2DArray(inventory.cellNumber, inventory.cellNumber);

    //Give the player some starting items.
    inventoryGrid[0][0] += 3;
    inventoryGrid[0][1] += 1;
}

function displayPlayerHealth(){
    fill(0);
    rect(10, 10, 200, 50);
    fill('green');
    rect(10, 10, 200 * (playerOne.currentHealth / playerCharacters[playerOne.job].maxHealth), 50);

    fill(255);
    textAlign(CENTER, CENTER);
    text(playerOne.currentHealth + '/' + playerCharacters[playerOne.job].maxHealth, 100, 35, 20, 20);
}