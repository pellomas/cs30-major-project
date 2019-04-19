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
        }

        attackOne(){
            console.log('attack One');
        }
        attackTwo(){
            console.log('attack Two');
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
        }
        
        attackOne(){
            console.log('attack One');
        }
        attackTwo(){
            console.log('attack Two');
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
        }
        
        attackOne(){
            console.log('attack One');
        }
        attackTwo(){
            console.log('attack Two');
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
        }
        
        attackOne(){
            console.log('attack One');
        }
        attackTwo(){
            console.log('attack Two');
        }
    }

    rogue = new Rogue();
    paladin = new Paladin();
    mage = new Mage();
    cleric = new Cleric();

    playerCharacters = [rogue, paladin, mage, cleric, rogue, rogue, paladin, mage, cleric];

    class Player{
        constructor(){
            this.job = 0;
            this.xPosition = width/2;
            this.yPosition = height/2;
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
let menuGridAssets;

function initializeWindowVariables(){
    if (width > height) {
        menuCellSize = height / 3;
    }
    else {
        menuCellSize = width / 3
    }
    menuPosition = ((width - 3*menuCellSize) / 2);

    menuGridAssets = ['purple', 'red', 'cyan', 'yellow', 'green', 'brown'];
}

let inventoryGrid = [];
let inventory;

function initializeInventoryVariables(){
    inventory = {
        xPosition: 5,
        yPosition: 5,
        cellSize: 80,
        cellNumber: 4,
    };
    inventoryGrid = create2DArray(inventory.cellNumber, inventory.cellNumber);
}