
class Kobold{
    constructor(){
        this.arrayPosition = 0;
        this.maxHealth = 10;
        this.currentHealth = 10;
        this.width = 20;
        this.height = 30;
        this.sprite = 'red';
        this.xPosition = width /2;
        this.yPosition = height /2;
        this.invincible = false;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    resetInvincibility(){
        this.invincible = false;
    }

    perish(damage){
        this.currentHealth -= damage;
        this.invincible = true;
        window.setTimeout(this.resetInvincibility, 10);
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
        }
    }

    touchStuff(){
        this.yPosition = height - (rects[floor(this.xPosition)].height - this.height/4) - (1)

        if (this.xPosition <= this.width/2){
            this.xPosition = this.width/2;
        }
        if (this.xPosition >= width - this.width/2){
            this.xPosition = width - this.width/2;
        }

        for (i=0; i < currentAttacks.length; i++){
            if (this.xPosition >= currentAttacks[i].xOrigin && this.xPosition <= currentAttacks[i].URCorner && this.yPosition >= currentAttacks[i].yOrigin && this.yPosition <= currentAttacks[i].DLCorner){
                if (!this.invincible){
                  this.perish(currentAttacks[i].damage);  
                }    
            }
        } 
    }

    move(){
        if (playerOne.xPosition < this.xPosition){
            this.xPosition -= random(3);
        }
        else{
            this.xPosition += random(3);
        }

        this.xPosition -= 1;
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}


let encounterArray = [];
let monsterArray = [];

function setRandomEncounters(encounterAmount, encounterRate){
    for (i = 0; i < encounterAmount; i++){
        if (floor(random(0, encounterRate)) === 0){
            kobold1 = new Kobold();
            encounterArray.push(kobold1);
        }
        else{
            encounterArray.push('no encounter');
        }
    }
}

function getEncounter(){
    if (encounterArray.length > 0){
            let currentSpace;
        currentSpace = encounterArray.shift();
        if (currentSpace !== 'no encounter'){
            let newMonster = currentSpace;
            newMonster.xPosition = random(width);
            monsterArray.push(newMonster);
        }
    }
    else{
        encounterRate += 5;
        setRandomEncounters(10000, encounterRate);
    }
}

function displayEnemies(){
    if (monsterArray.length > 0){
        for (let i = 0; i < monsterArray.length; i++){
            monsterArray[i].setArrayPosition(i);
            monsterArray[i].display(i);
            monsterArray[i].move();
            monsterArray[i].touchStuff();
        } 
    }
}