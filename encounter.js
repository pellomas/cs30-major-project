
class Kobold{
    constructor(){
        this.arrayPosition = 0;
        this.maxHealth = 20;
        this.currentHealth = this.maxHealth;
        this.width = 20;
        this.height = 30;
        this.sprite = 'red';
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 4000;
        this.attackLength = 50;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
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
            if (this.xPosition + this.width/2 >= currentAttacks[i].xOrigin && 
                this.xPosition - this.width/2 <= currentAttacks[i].URCorner &&
                this.yPosition + this.height/2 >= currentAttacks[i].yOrigin &&
                this.yPosition - this.height/2 <= currentAttacks[i].DLCorner){

                this.perish(currentAttacks[i].damage);     
            }
        } 
    }

    move(){
        if(!this.casting){
            if (playerOne.xPosition < this.xPosition){
                this.xPosition -= random(3);
            }
            else{
                this.xPosition += random(3);
            }
        }
        
        this.xPosition -= 1;
    }

    
    refreshCasting(){
        this.casting = false;
        console.log(this.casting);
    }

    attack(){
        if(!this.casting){
           if(this.xPosition - this.attackLength <= playerOne.xPosition && this.xPosition >= playerOne.xPosition){
                this.casting = true;
                window.setTimeout(function(){createMonsterAttack(this.xPosition, this.yPosition, this.attackLength, 30, 5, this.castTime)}, this.prepTime);
                window.setTimeout(this.refreshCasting, this.castTime + this.prepTime);
            }
            if(this.xPosition + this.attackLength >= playerOne.xPosition && this.xPosition <= playerOne.xPosition){
                this.casting = true;
                window.setTimeout(function(){createMonsterAttack(this.xPosition, this.yPosition, this.attackLength, 30, 5, this.castTime)}, this.prepTime);
                window.setTimeout(this.refreshCasting, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }

    checkCasting(){
        console.log(this.casting);
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
    kobold2 = new Kobold();
    encounterArray = [kobold2];
}

function getEncounter(){
    if (encounterArray.length > 0){
            let currentSpace;
        currentSpace = encounterArray.shift();
        if (currentSpace !== 'no encounter'){
            let newMonster = currentSpace;
            if(floor(random(0, 3)) === 0){
                newMonster.xPosition = 1;
            }
            else{
                newMonster.xPosition = width - 1;
            }
            monsterArray.push(newMonster);
        }
    }
    else{
        encounterRate += 5;
        //setRandomEncounters(0, encounterRate);
    }
}

function displayEnemies(){
    if (monsterArray.length > 0){
        for (let i = 0; i < monsterArray.length; i++){
            monsterArray[i].setArrayPosition(i);
            monsterArray[i].display(i);
            monsterArray[i].move();
            monsterArray[i].attack();
            monsterArray[i].touchStuff();
        } 
    }
}