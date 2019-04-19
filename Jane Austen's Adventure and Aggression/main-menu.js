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

function displayGrid(grid, gridAssets, cellSize, gridX, gridY) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid.length; x++) {
      
      fill(gridAssets[grid[y][x]]);

      stroke(20);
      rect(x*cellSize + gridX, y*cellSize + gridY, cellSize, cellSize);
      noStroke();
    }
  }
}

function mainMenuClick(){
  if (mouseX > menuPosition && mouseX < (menuPosition + 3*menuCellSize)){
    if (mouseX > menuPosition + menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
      playerOne.job += 1;
      if (mouseX > menuPosition + 2*menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
        playerOne.job += 1;  
      }
    }
    if (mouseY > menuCellSize && mouseY < 2*menuCellSize){
      playerOne.job += 3;
    }
    if (mouseY > 2*menuCellSize){
      playerOne.job += 6;  
    }
    gameMode = 1;
  }
}
