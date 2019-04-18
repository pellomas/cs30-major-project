// Jane Austen's Adventure and Aggression
// Patrick Lomas
// April 2, 2019
//
// Extra for Experts:
// 

let gameMode = 0; //0 is Main Menu, 1 is Game, 2 is Inventory
let rogue;
let paladin;
let mage;
let cleric;
let playerOne;


function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
  ellipseMode(CENTER);
  initializeVariables();
  initializeWindowVariables();
  initializeInventoryVariables();
  time = 0;
  numberOfRects = width;
  rectWidth = width / numberOfRects;
  generateInitialTerrain();
  setRandomEncounters(1000, 5);
}

function draw() {
  //Main Menu
  if (gameMode === 0){
    background(0);
    setUpMainMenu();
    displayGrid(menuGrid, menuCellSize, menuPosition, 0);
  }
  //Game
  else if (gameMode === 1){
    background(66, 206, 244);
    moveTerrain();
    moveTerrain();
    moveStep();
    cleanUpStep();
    touchingSide();
    moveX();
    fill(playerCharacters[playerOne.job].sprite);
    ellipse(playerOne.xPosition, playerOne.yPosition, playerCharacters[playerOne.job].width, playerCharacters[playerOne.job].height)
  }
  else if (gameMode === 2){
    displayGrid(inventoryGrid, 40, 5, 5);
  }
 
}


function mousePressed(){
  if (gameMode === 0){
    if (mouseButton === LEFT){
      mainMenuClick();
    }
  }
  if (gameMode === 1){
    if (mouseButton === LEFT){
      playerCharacters[playerOne.job].attackOne();
    }
    if (mouseButton === RIGHT){
      playerCharacters[playerOne.job].attackTwo();
    }
  }
  if (gameMode === 2){
     if (mouseX > inventory.xPosition, mouseY > inventory.yPosition, mouseX < inventory.xPosition + inventory.cellNumber*inventory.cellSize){
        let xcoord = floor(mouseX / inventory.cellSize);
        let ycoord = floor(mouseY / inventory.cellSize);

        if (inventoryGrid[ycoord][xcoord] === 1) {
          inventoryGrid[ycoord][xcoord] = 0;
        }
        else {
          inventoryGrid[ycoord][xcoord] = 1;
        }
     }
  }
}
