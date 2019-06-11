// Jane Austen's Adventure and Aggression
// Patrick Lomas
// April 2, 2019
//
// Extra for Experts:
// Used a bit of text, used Perlin Noise to make a collision landscape, used some interesting 
// class-value-th grid element logic

let gameMode = 0; //0 is Main Menu, 1 is Game, 2 is Inventory

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

  encounterRate = 100;
  setRandomEncounters(100000, encounterRate);

}

function draw() {
  //Main Menu
  if (gameMode === 0){
    
    background(0);
    setUpMainMenu();
    displayGrid(menuGrid, menuCellSize, menuPosition, 0);
    fill(255);
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
    if (gameMode === 1 && playerArray[0].isCasting === false){
      moveX();
    }
    fill(playerCharacters[playerArray[0].job].sprite);
    ellipse(playerArray[0].xPosition, playerArray[0].yPosition, playerCharacters[playerArray[0].job].width, playerCharacters[playerArray[0].job].height)
    if (playerArray[0].invincible === true){
      fill(255);
      ellipse(playerArray[0].xPosition, playerArray[0].yPosition, playerCharacters[playerArray[0].job].width/3, playerCharacters[playerArray[0].job].height/3)
    }
    
    for(i=0; i<playerArray.length; i++){
      playerArray[0].checkDamage();
    }
    
    displayEnemies();
    displayAttackBoxes();
    displayEffectBoxes();
    displayMonsterAttacks();
    getEncounter();
    displayPlayerHealth();
  }
}


function mousePressed(){
  if (gameMode === 0){
    if (mouseButton === LEFT){
      mainMenuClick();
    }
  }
  if (gameMode === 1 && playerArray[0].isCasting === false){
    if (mouseButton === LEFT){
      playerCharacters[playerArray[0].job].attackOne();
    }
    if (mouseButton === RIGHT){
      playerCharacters[playerArray[0].job].attackTwo();
    }
  }
  if (gameMode === 2){
     inventoryClick();
  }
}
