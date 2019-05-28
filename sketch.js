// Jane Austen's Adventure and Aggression
// Patrick Lomas
// April 2, 2019
//
// Extra for Experts:
// Used a bit of text, used Perlin Noise to make a collision landscape, used some interesting 
// class-value-th grid element logic

let gameMode = 0; //0 is Main Menu, 1 is Game, 2 is Inventory
let playerOne;

let encounterRate;


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

  encounterRate = 50;
  setRandomEncounters(100000, encounterRate);
}

function draw() {
  //Main Menu
  if (gameMode === 0){
    background(0);
    setUpMainMenu();
    displayGrid(menuGrid, menuCellSize, menuPosition, 0);
  }
  //Game
  else if (gameMode === 1 || gameMode === 2){
    background(66, 206, 244);
    if (gameMode === 2){
      displayInventoryGrid(inventoryGrid, inventory.cellSize, inventory.xPosition, inventory.yPosition);
    }
    moveTerrain();
    moveStep();
    cleanUpStep();
    touchingSide();
    if (gameMode === 1){
      moveX();
    }
    fill(playerCharacters[playerOne.job].sprite);
    ellipse(playerOne.xPosition, playerOne.yPosition, playerCharacters[playerOne.job].width, playerCharacters[playerOne.job].height)
    displayEnemies();
    displayAttackBoxes();
    getEncounter();
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
     inventoryClick();
  }
}
