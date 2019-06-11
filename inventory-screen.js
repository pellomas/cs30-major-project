function inventoryClick(){
    if (mouseX > inventory.xPosition && mouseY > inventory.yPosition && mouseY < inventory.yPosition + inventory.cellNumber*inventory.cellSize && mouseX < inventory.xPosition + inventory.cellNumber*inventory.cellSize){
        let xcoord = floor((mouseX - (width - 245)) / inventory.cellSize);
        let ycoord = floor(mouseY / inventory.cellSize);

        inventory.assets[ycoord * inventory.cellNumber + xcoord].use();
    }   
}

function displayInventoryGrid(grid, cellSize, gridX, gridY) {
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid.length; x++) {
        
        if (grid[y][x] === 0){
            fill(0);
        }
        else{
            fill(inventory.assets[y * 4 + x].colour); 
        }
        
  
        stroke(30);
        rect(x*cellSize + gridX, y*cellSize + gridY, cellSize, cellSize);
        

        fill(255);
        textSize(30);
        textAlign(LEFT, TOP);
        text(grid[y][x], x*cellSize + gridX, y*cellSize + gridY);
        noStroke();
      }
    }
  }

class HealthPotion{
    constructor(gridX, gridY){
        this.colour = 'green';
        this.gridX = gridX;
        this.gridY = gridY;
    }

    use(){
        if(inventoryGrid[this.gridY][this.gridX] > 0){
            if (playerOne.currentHealth < playerCharacters[playerOne.job].maxHealth){
                if(playerCharacters[playerOne.job].maxHealth - playerOne.currentHealth < 20){
                    playerOne.currentHealth = playerCharacters[playerOne.job].maxHealth;
                    inventoryGrid[this.gridY][this.gridX] -= 1;
                }
                else{
                    playerOne.currentHealth += 20;
                    inventoryGrid[this.gridY][this.gridX] -= 1;
                }
            }
        }
    }
}

class Bomb{
    constructor(gridX, gridY){
        this.colour = 'red';
        this.gridX = gridX;
        this.gridY = gridY;
    }

    use(){
        if(inventoryGrid[this.gridY][this.gridX] > 0){
            honk();
            for(i = 0; i < monsterArray.length; i++){
                monsterArray[i].perish(20);
            }
            
            inventoryGrid[this.gridY][this.gridX] -= 1;
             
        }
    }
}

let inventoryGrid = [];
let inventory;

let inventorySlot1 = new HealthPotion(0,0);
let inventorySlot2 = new HealthPotion(1, 0);
let inventorySlot3 = new HealthPotion(2, 0);
let inventorySlot4 = new Bomb(1, 0);
let inventorySlot5 = new HealthPotion(1, 1);
let inventorySlot6 = new HealthPotion(1, 2);
let inventorySlot7 = new HealthPotion(2, 0);
let inventorySlot8 = new HealthPotion(2, 1);
let inventorySlot9 = new HealthPotion(2, 2);

function initializeInventoryVariables(){
    inventory = {
        xPosition: width - 245,
        yPosition: 5,
        cellSize: 80,
        cellNumber: 3,
        assets: [inventorySlot1, inventorySlot2, inventorySlot3,
                inventorySlot4, inventorySlot5, inventorySlot6,
                inventorySlot7, inventorySlot8, inventorySlot9],
    };
    inventoryGrid = create2DArray(inventory.cellNumber, inventory.cellNumber);

    //Give the player some starting items.
    inventoryGrid[0][0] += 3;
    inventoryGrid[1][0] += 1;
}
