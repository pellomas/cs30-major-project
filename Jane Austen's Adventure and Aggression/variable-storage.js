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

            this.description = 'Rogue -=- Swift and light on your feet, you use dagger and deception to dispatch your enemies.'
        }

        attackOne(){
            createAttackBox(playerOne.xPosition, playerOne.yPosition, 100, 20, 10)
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }
    
    class Paladin{
        constructor(){
            this.jumpHeight = 10;
            this.maxHealth = 30;
            this.height = 65;
            this.width = 52;
            this.moveSpeed = 5;
            this.sprite = 'red';  

            this.description = 'Paladin -=- Slow and heavily armored, you use the blessing of your god and your heavy mace to smite your foes.'
        }
        
        attackOne(){
            //console.log('attack One');
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

            this.description = 'Mage -=- A brilliant and well-educated magic user, you can use arcane magic to dispatch enemies.'
        }
        
        attackOne(){
            //console.log('attack One');
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

            this.description = 'Cleric -=-'
        }
        
        attackOne(){
            //console.log('attack One');
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

            this.description = 'Pyromancer -=-'
        }
        
        attackOne(){
            //console.log('attack One');
        }
        attackTwo(){
            //console.log('attack Two');
        }
    }

    class Lancer{
        constructor(){
            this.jumpHeight = 8;
            this.maxHealth = 40;
            this.height = 70;
            this.width = 67;
            this.moveSpeed = 4;
            this.sprite = color(191, 244, 66); 
            
            this.description = 'Lancer -=-'
        }
        
        attackOne(){
            //console.log('attack One');
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
            
            this.description = 'Healer -=-'
        }
        
        attackOne(){
            //console.log('attack One');
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

            this.description = 'Trapper -=-'
        }
        
        attackOne(){
            //console.log('attack One');
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

            this.description = 'Bard -=-'
        }
        
        attackOne(){
            //console.log('attack One');
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

    playerCharacters = [rogue, paladin, mage, cleric, pyromancer, lancer, healer, trapper, bard];

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
        xPosition: 5,
        yPosition: 5,
        cellSize: 80,
        cellNumber: 4,
        assets: ['green', 'red', 'blue', 'gray', 'green', 'red', 'blue', 'gray', 'beige', 'beige', 'beige', 'beige', 'beige', 'beige', 'beige', 'beige' ],
    };
    inventoryGrid = create2DArray(inventory.cellNumber, inventory.cellNumber);

    //Give the player some starting items.
    inventoryGrid[0][0] += 3;
    inventoryGrid[0][1] += 1;
}