let menuGrid;

function create2DArray(cols, rows) {
    let emptyArray = [];
    for (let i = 0; i < rows; i++) {
      emptyArray.push([]);
      for (let j = 0; j < cols; j++) {
        emptyArray[i].push(0);
      }
    }
    return emptyArray;
  }

function setUpMainMenu(){
    menuGrid = create2DArray(3, 3);
}

function displayGrid(grid, cellSize, gridX, gridY) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid.length; x++) {
      
      fill(playerCharacters[y*3 + x].sprite);

      stroke(20);
      rect(x*cellSize + gridX, y*cellSize + gridY, cellSize, cellSize);
      fill(0);
      textSize(20);
      text(playerCharacters[y*3 + x].description,x*cellSize + gridX + 10, y*cellSize + gridY + 10, cellSize - 10, cellSize - 10);
      noStroke();

    }
  }
}

function honk(){
  console.log('honk');
}

function mainMenuClick(){
  //Checks if the mouse is within the grid
  if (mouseX > menuPosition && mouseX < (menuPosition + 3*menuCellSize)){
    //Adds one to player.job  for each column from right to left
    if (mouseX > menuPosition + menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
      playerOne.job += 1;
      if (mouseX > menuPosition + 2*menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
        playerOne.job += 1;  
      }
    }
    //then adds three to player.job for each row from top to bottom.
    if (mouseY > menuCellSize && mouseY < 2*menuCellSize){
      playerOne.job += 3;
    }
    if (mouseY > 2*menuCellSize){
      playerOne.job += 6;  
    }
    gameMode = 1;
    cursor(CROSS);
    playerOne.currentHealth = playerCharacters[playerOne.job].maxHealth;
  }
}

function displayToolTip(message){
  noCursor();
  fill(255);
  rect(mouseX, mouseY, 200, 150)
  fill(0);
  textAlign(LEFT, TOP);
  textSize(20)
  text(message, mouseX, mouseY, 200,150);
}
