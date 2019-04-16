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
      if (menuGrid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize + gridX, y*cellSize + gridY, cellSize, cellSize);
    }
  }
}

function mainMenuClick(){
  if (mouseX > menuPosition && mouseX < (menuPosition + 3*menuCellSize)){
    if (mouseX > menuPosition + menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
      playerOne.class += 1;
      if (mouseX > menuPosition + 2*menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
        playerOne.class += 1;  
      }
    }
    if (mouseY > menuCellSize && mouseY < 2*menuCellSize){
      playerOne.class += 3;
    }
    if (mouseY > 2*menuCellSize){
      playerOne.class += 6;  
    }
    gameMode = 1;
  }
}
