
class Kobold{
    constructor(){
        this.maxHealth = 10
        this.currentHealth = 10
        this.width = 20;
        this.height = 30;
        this.sprite = 'red';
        this.xPosition = width /2;
        this.yPosition = height /2;
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
            if (this.xPosition ){

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
        setRandomEncounters();
    }
}

function displayEnemies(){
    if (monsterArray.length > 0){
        console.log(monsterArray.length);
        for (let i = 0; i < monsterArray.length; i++){
            monsterArray[i].display(i);
            monsterArray[i].move();
            monsterArray[i].touchStuff();
        } 
    }
}