function inventoryClick(){
    if (mouseX > inventory.xPosition && mouseY > inventory.yPosition && mouseY < inventory.yPosition + inventory.cellNumber*inventory.cellSize && mouseX < inventory.xPosition + inventory.cellNumber*inventory.cellSize){
        let xcoord = floor(mouseX / inventory.cellSize);
        let ycoord = floor(mouseY / inventory.cellSize);

        if (inventoryGrid[ycoord][xcoord] > 0){
            inventoryGrid[ycoord][xcoord] -= 1;
        }
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
