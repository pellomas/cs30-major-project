function inventoryClick(){
    if (mouseX > inventory.xPosition && mouseY > inventory.yPosition && mouseY < inventory.yPosition + inventory.cellNumber*inventory.cellSize && mouseX < inventory.xPosition + inventory.cellNumber*inventory.cellSize){
        let xcoord = floor(mouseX - (width - 245) / inventory.cellSize);
        let ycoord = floor(mouseY / inventory.cellSize);

        console.log(xcoord, ycoord);
        inventory.assets[ycoord * 4 + xcoord].use();
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
    constructor(){
        this.colour = 'green';
    }

    use(){
        if (playerOne.currentHealth < playerCharacters[playerOne.job].maxHealth){
            if(playerCharacters[playerOne.job].maxHealth - playerOne.currentHealth < 20){
                playerOne.currentHealth = playerCharacters[playerOne.job].maxHealth;
            }
            else{
                playerOne.currentHealth += 20;
            }
        }
    }
}

let inventoryGrid = [];
let inventory;

let inventorySlot1 = new HealthPotion();
let inventorySlot2 = new HealthPotion();
let inventorySlot3 = new HealthPotion();
let inventorySlot4 = new HealthPotion();
let inventorySlot5 = new HealthPotion();
let inventorySlot6 = new HealthPotion();
let inventorySlot7 = new HealthPotion();
let inventorySlot8 = new HealthPotion();
let inventorySlot9 = new HealthPotion();

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
    inventoryGrid[0][1] += 1;
}
