//Let the player jump
function jump(){
    if (playerArray[0].canJump && !playerArray[0].isCasting){
        
        playerArray[0].ySpeed -= (playerCharacters[playerArray[0].job].jumpHeight);
        playerArray[0].canJump = false;//needs to touch ground to reset this variable
    }
}

function keyPressed() {
    if (gameMode === 1){
        if (key === 'a' || key === 'A') {
            isMovingLeft = true;
            playerArray[0].direction = -1;
        }
        if (key === 'd' || key === 'D') {
            isMovingRight = true;
            playerArray[0].direction = 1;
        }
        if (key === ' '){
          jump();
        }  
    }
    if (key === 'e' || key === 'E'){
        if (gameMode === 1){
            gameMode = 2;  
        }
        else if (gameMode === 2){
            gameMode = 1;
        }
    }
}

//Change the player's speed either right or left
function moveX(){
    if (isMovingRight) {
    playerArray[0].xSpeed = (playerCharacters[playerArray[0].job].moveSpeed + playerArray[0].moveBuff);
    }
    if (isMovingLeft) {
    playerArray[0].xSpeed = -(playerCharacters[playerArray[0].job].moveSpeed + playerArray[0].moveBuff);
    }
}

function keyReleased() {
    if (key === 'a' || key === 'A') {
        isMovingLeft = false;
    }
    if (key === 'd' || key === 'D') {
        isMovingRight = false;
    }
}

function moveStep(){
    playerArray[0].xPosition += playerArray[0].xSpeed; 
    playerArray[0].yPosition += playerArray[0].ySpeed; 

    playerArray[0].xPosition -= 1;   
}
    
    
    
    
    //Stops the player from going offstage (except for up)
function touchingSide(){
    if (playerArray[0].xPosition <= playerCharacters[playerArray[0].job].width/2){
        playerArray[0].xSpeed = 0;
        playerArray[0].xPosition = playerCharacters[playerArray[0].job].width/2;
    }
    if (playerArray[0].xPosition >= width - playerCharacters[playerArray[0].job].width/2){
        playerArray[0].xSpeed = 0;
        playerArray[0].xPosition = width - playerCharacters[playerArray[0].job].width/2;
    }
    if (playerArray[0].yPosition >= height - (rects[floor(playerArray[0].xPosition)].height - playerCharacters[playerArray[0].job].height/4)-(7)){
        playerArray[0].ySpeed = 0;
        playerArray[0].yPosition = height - (rects[floor(playerArray[0].xPosition)].height - playerCharacters[playerArray[0].job].height/4) - (1);
        playerArray[0].canJump = true;
    }
}

// Dampens movement
function cleanUpStep(){

    playerArray[0].ySpeed += (0.7);

    if (playerArray[0].xSpeed < 1 && playerArray[0].xSpeed > -1){ // Totally stops you if you slow down to a speed value from 1 to -1
        playerArray[0].xSpeed = 0;
    }

    if (playerArray[0].xSpeed > 0){//Lessens movement in a slightly more gradual way than a total stop
        playerArray[0].xSpeed -= (1);
    }
    if (playerArray[0].xSpeed < 0){
        playerArray[0].xSpeed += (1);
    }
}