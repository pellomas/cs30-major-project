//Let Megaman jump
function jump(){
    if (playerOne.canJump){
        
        playerOne.ySpeed -= (playerCharacters[playerOne.class].jumpHeight);
        playerOne.canJump = false;//needs to touch ground to reset this variable
    }
}

//Change the player's speed either right or left
function moveX(){
    if (isMovingRight) {
    playerOne.xSpeed = (playerCharacters[playerOne.class].moveSpeed);
    }
    if (isMovingLeft) {
    playerOne.xSpeed = (-playerCharacters[playerOne.class].moveSpeed);
    }
}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        isMovingLeft = true;
    }
    if (key === 'd' || key === 'D') {
        isMovingRight = true;
    }
    if (key === ' '){
        jump();
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
    playerOne.xPosition += playerOne.xSpeed;
    playerOne.yPosition += playerOne.ySpeed;

    playerOne.xPosition -= 2;
     
}
    
    
    
    
    //Stops the player from going offstage to the left
function touchingSide(){
    if (playerOne.xPosition <= playerCharacters[playerOne.class].width/2){
        playerOne.xSpeed = 0;
        playerOne.xPosition = playerCharacters[playerOne.class].width/2;
    }
    if (playerOne.xPosition >= width - playerCharacters[playerOne.class].width/2){
        playerOne.xSpeed = 0;
        playerOne.xPosition = width - playerCharacters[playerOne.class].width/2;
    }
    if (playerOne.yPosition >= height - (rects[floor(playerOne.xPosition)].height - playerCharacters[playerOne.class].height/4)-(7)){
        playerOne.ySpeed = 0;
        playerOne.yPosition = height - (rects[floor(playerOne.xPosition)].height - playerCharacters[playerOne.class].height/4) - (1);
        playerOne.canJump = true;
    }
}

// Dampens movement
function cleanUpStep(){

    playerOne.ySpeed += (0.7);

    if (playerOne.xSpeed < 1 && playerOne.xSpeed > -1){ // Totally stops you if you slow down to a speed value from 1 to -1
        playerOne.xSpeed = 0;
    }

    if (playerOne.xSpeed > 0){//Lessens movement in a slightly more gradual way than a total stop
        playerOne.xSpeed -= (1);
    }
    if (playerOne.xSpeed < 0){
        playerOne.xSpeed += (1);
    }
}