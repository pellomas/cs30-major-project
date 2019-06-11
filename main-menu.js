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

class Player{
    constructor(tag){
      this.tag = tag

      this.job = 0;
      this.xPosition = width/2;
      this.yPosition = height/2;
      this.direction = 1
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.currentHealth = 30;
      this.isCasting = false;
      this.isStunned = false;
      this.canJump = false;
      this.invincible = false;
    }


  checkDamage(){
    if(!this.invincible){
        for (i=0; i < monsterAttacks.length; i++){
            if (this.xPosition + playerCharacters[this.job].width/2 >= monsterAttacks[i].xOrigin && 
                this.xPosition - playerCharacters[this.job].width/2 <= monsterAttacks[i].URCorner &&
                this.yPosition + playerCharacters[this.job].height/2 >= monsterAttacks[i].yOrigin &&
                this.yPosition - playerCharacters[this.job].height/2 <= monsterAttacks[i].DLCorner){

                this.perish(monsterAttacks[i].damage);     
            }
        }   
    }
    
  }

  perish(damage){
    this.currentHealth -= damage;

    this.invincible = true;
    setTimeout(refreshInvincibility, 1000);

    if(this.currentHealth <= 0){
        console.log('oops you ded');
        gameMode = 0;
        monsterArray = [];
    }
  }
}

function refreshInvincibility(){
  if(playerArray[0].invincible === true){
      playerArray[0].invincible = false;
  }
}

function refreshPlayerCasting(){
  if (playerArray[0].isCasting === true){
      playerArray[0].isCasting = false;
  }
}

function mainMenuClick(){
  //Checks if the mouse is within the grid
  if (mouseX > menuPosition && mouseX < (menuPosition + 3*menuCellSize)){
    newPlayer = new Player(chooseNewTag());
    //Adds one to player.job  for each column from right to left
    if (mouseX > menuPosition + menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
      newPlayer.job += 1;
      if (mouseX > menuPosition + 2*menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
        newPlayer.job += 1;  
      }
    }
    //then adds three to player.job for each row from top to bottom.
    if (mouseY > menuCellSize && mouseY < 2*menuCellSize){
      newPlayer.job += 3;
    }
    if (mouseY > 2*menuCellSize){
      newPlayer.job += 6;  
    }
    gameMode = 1;
    cursor(CROSS);
    newPlayer.currentHealth = playerCharacters[newPlayer.job].maxHealth;
    playerArray.push(newPlayer);
  }
}

function chooseNewTag(){
  let tag = random(0, 999999999);

  if (playerArray.length > 0){
    for(i = 0; i < playerArray.length; i++){
      if (tag === playerArray[i].tag){
        chooseNewTag();
      }
    }
  }

  return tag;
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
