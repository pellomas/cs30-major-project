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
            this.attackOneCastTime = 20;
            this.attackOneHeight = 30;
            this.attackOneYPosition = 20;
            this.attackOneMoveSpeedBuff = 0;
            this.attackOneDamageRes = 0;
            this.AttackOneHealing = 10;

            this.description = 'Rogue -=- Swift and light on your feet, you use dagger and dexterity to dispatch your enemies.'
        }

        attackOne(){
            if(playerArray[0].direction === 1){
                createAttackBox(playerArray[0].xPosition, playerArray[0].yPosition - this.attackOneYPosition, this.attackOneLength, this.attackOneHeight, this.AttackOneHealing, this.attackOneMoveSpeedBuff, this.attackOneDamageRes, this.attackOneCastTime); 
            }
            else if(playerArray[0].direction === -1){
                createAttackBox(playerArray[0].xPosition - this.attackOneLength, playerArray[0].yPosition - this.attackOneYPosition, this.attackOneLength, this.attackOneHeight, this.AttackOneHealing, this.attackOneMoveSpeedBuff, this.attackOneDamageRes, this.attackOneCastTime);  
            }
        }
        attackTwo(){
            if(playerArray[0].xPosition > mouseX){
                playerArray[0].xPosition = mouseX;
            }
            if(playerArray[0].yPosition > mouseY && mouseY < height - rects[floor(mouseX)].height){
                playerArray[0].yPosition = mouseY;
            }
        }
    }
    
    class Paladin{
        constructor(){
            this.jumpHeight = 10;
            this.maxHealth = 50;
            this.height = 65;
            this.width = 52;
            this.moveSpeed = 5;
            this.sprite = 'red';  

            this.attackOneLength = 80;
            this.attackOneCastTime = 20;
            this.attackOneHeight = 60;
            this.attackOneYPosition = 40;
            this.AttackOneDamage = 20;

            this.description = 'Paladin -=- Slow and heavily armored, you use the blessing of your god and your heavy mace to smite your foes.'
        }
        
        attackOne(){
            if(playerArray[0].direction === 1){
                createAttackBox(playerArray[0].xPosition, playerArray[0].yPosition - this.attackOneYPosition, this.attackOneLength, this.attackOneHeight, this.AttackOneDamage, this.attackOneCastTime); 
            }
            else if(playerArray[0].direction === -1){
                createAttackBox(playerArray[0].xPosition - this.attackOneLength, playerArray[0].yPosition - this.attackOneYPosition, this.attackOneLength, this.attackOneHeight, this.AttackOneDamage, this.attackOneCastTime);  
            }
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Mage{
        constructor(){
            this.jumpHeight = 14;
            this.maxHealth = 20;
            this.height = 65;
            this.width = 52;
            this.moveSpeed = 7;
            this.sprite = 'cyan'; 
            
            this.attackOneLength = 60;
            this.attackOneCastTime = 20;
            this.attackOneHeight = 30;
            this.AttackOneDamage = 10;

            this.description = 'Mage -=- A brilliant and well-educated magic user, you can use arcane magic to dispatch enemies.'
        }
        
        attackOne(){
            createAttackBox(mouseX - (this.attackOneLength/2), mouseY - (this.attackOneLength/2), this.attackOneLength, this.attackOneLength, this.AttackOneDamage, this.attackOneCastTime);
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
            this.attackOneCastTime = 1000;
            this.attackOneHeight = 25;
            this.attackOneYPosition = 20;
            this.AttackOneDamage = 1;

            this.description = 'Cleric -=- Pious and just, you use the favour of your god to smite your enemies.'
        }
        
        attackOne(){
            playerArray[0].isCasting = true;
            setTimeout(refreshPlayerCasting, this.attackOneCastTime);
            createAttackBox(mouseX - (this.attackOneLength/2), 0, this.attackOneLength, height, this.AttackOneDamage, this.attackOneCastTime);
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

            this.attackOneLength = 100;
            this.attackOneCastTime = 20;
            this.attackOneHeight = 30;
            this.attackOneYPosition = 20;
            this.AttackOneDamage = 5;

            this.attackTwoDamage = 10;
            this.attackTwoLength = 120;
            this.attackTwoCastTime = 30;

            this.description = 'Pyromancer -=- Destructive and hotheaded, you use fire magic to blow your enemies away.'
        }
        
        attackOne(){
            createAttackBox(mouseX - (this.attackOneLength/2) + random(-20, 20), mouseY - (this.attackOneLength/2)+ random(-20, 20),
             this.attackOneLength + random(-20, 20), this.attackOneLength + random(-20, 20), this.AttackOneDamage + random(-5, 5),
              this.attackOneCastTime);
        }
        attackTwo(){
            let tempMouseX = mouseX;
            let tempMouseY = mouseY;
            playerArray[0].isCasting = true;
            setTimeout(refreshPlayerCasting, 2000);

            for(i=0; i<5; i++){
                setTimeout(createAttackBox(tempMouseX - (this.attackTwoLength/2) + random(-20, 20),
                 tempMouseY - (this.attackTwoLength/2)+ random(-20, 20), this.attackTwoLength + random(-20, 20),
                  this.attackTwoLength + random(-20, 20), this.attackTwoDamage + random(-5, 5), this.attackTwoCastTime), i * 40)
            }
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
            this.attackOneCastTime = 100;
            this.attackOneHeight = 30;
            this.attackOneYPosition = 20;
            this.AttackOneDamage = 25;
            
            this.description = 'Lancer -=- Tough and strong, you absorb enemy attacks with thick armour and stab enemies with your mighty lance.'
        }
        
        attackOne(){
            if (playerArray[0].isCasting === false){
                playerArray[0].isCasting = true;
                setTimeout(refreshPlayerCasting, this.attackOneCastTime)
                if(playerArray[0].direction === 1){
                    createAttackBox(playerArray[0].xPosition, playerArray[0].yPosition - this.attackOneYPosition, this.attackOneLength, this.attackOneHeight, this.AttackOneDamage, this.attackOneCastTime); 
                }
                else if(playerArray[0].direction === -1){
                    createAttackBox(playerArray[0].xPosition - this.attackOneLength, playerArray[0].yPosition - this.attackOneYPosition, this.attackOneLength, this.attackOneHeight, this.AttackOneDamage, this.attackOneCastTime);  
                } 
            }
            
        }
        attackTwo(){

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

            this.attackOneLength = 120;
            this.attackOneCastTime = 100;
            this.attackOneHeight = 30;
            this.attackOneYPosition = 20;
            this.AttackOneDamage = 25;
            
            this.description = 'Healer -=- Kind and generous, you use healing magic and medicine to keep your allies in fighting shape.\n \n MULTIPLAYER ONLY'
        }
        
        attackOne(){
            if(playerArray[0].direction === 1){
                createEffectBox(playerArray[0].xPosition, playerArray[0].yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
             else if(playerArray[0].direction === -1){
                createEffectBox(playerArray[0].xPosition - this.attackOneLength, playerArray[0].yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
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

            this.description = 'Trapper -=- Crafty and resourceful, you use traps and nets to keep enemies out of the fight.\n \n MULTIPLAYER ONLY'
        }
        
        attackOne(){
            if(playerArray[0].direction === 1){
                createAttackBox(playerArray[0].xPosition, playerArray[0].yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
             else if(playerArray[0].direction === -1){
                 createAttackBox(playerArray[0].xPosition - this.attackOneLength, playerArray[0].yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
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

            this.description = 'Bard -=- Light-footed and joyful, you use the power of music to invigorate and fortify your allies.\n \n MULTIPLAYER ONLY'
        }
        
        attackOne(){
            if(playerArray[0].direction === 1){
                createAttackBox(playerArray[0].xPosition, playerArray[0].yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
             }
            else if(playerArray[0].direction === -1){
                createAttackBox(playerArray[0].xPosition - this.attackOneLength, playerArray[0].yPosition - 20, this.attackOneLength, 20, 10, this.attackOneCastTime) 
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
    playerArray = []; 
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

function displayPlayerHealth(){
    fill(0);
    rect(10, 10, 200, 50);
    fill('green');
    rect(10, 10, 200 * (playerArray[0].currentHealth / playerCharacters[playerArray[0].job].maxHealth), 50);

    fill(255);
    textAlign(CENTER, CENTER);
    text(playerArray[0].currentHealth + '/' + playerCharacters[playerArray[0].job].maxHealth, 100, 35, 20, 20);
}