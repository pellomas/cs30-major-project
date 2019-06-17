
class Kobold{
    constructor(){
        this.arrayPosition = 0;
        this.level = 1;
        this.maxHealth = 20;
        this.currentHealth = this.maxHealth;

        this.width = 20;
        this.height = 30;
        this.sprite = 'red';
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 400;
        this.attackLength = 50;
        this.attackWidth = 15;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(3);
            }
            else{
                this.xPosition += random(3);
            }
        }
        
        this.xPosition -= 1;
    }

    


    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = this.xPosition;
            let tempYPos = this.yPosition;
            let tempAttackLength = this.attackLength;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempWidth = this.width;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackLength - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}


class Whelp{
    constructor(){
        this.arrayPosition = 0;
        this.level = 1;
        this.maxHealth = 20;
        this.currentHealth = this.maxHealth;

        this.width = 35;
        this.height = 30;
        this.sprite = 'blue';
        this.xPosition = width /2;
        this.yPosition = height /2;
        this.ySpeed = 10;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 300;
        this.attackLength = 300;
        this.attackWidth = 40;
        this.attackDamage = 5;
        this.attackSprite = 'orange';
        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
        }
    }

    touchStuff(){
        if (this.yPosition < height - (rects[floor(this.xPosition)].height - this.height/4 - (1))){
              this.yPosition = height - (rects[floor(this.xPosition)].height - this.height/4) - (1)
        }
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(3);
            }
            else{
                this.xPosition += random(3);
            }
        }

        this.yPosition -= this.ySpeed;
        
        this.xPosition -= 1;
    }

    


    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = playerArray[0].xPosition;
            let tempYPos = playerArray[0].yPosition;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackWidth + random(-25, 25), tempYPos + random(-25, 25), tempAttackWidth, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackWidth + random(-25, 25), tempYPos + random(-25, 25), tempAttackWidth, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}


class Goblin{
    constructor(){
        this.arrayPosition = 0;
        this.level = 2;
        this.maxHealth = 25;
        this.currentHealth = this.maxHealth;

        this.width = 40;
        this.height = 60;
        this.sprite = color(191, 244, 70);
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 600;
        this.attackLength = 80;
        this.attackWidth = 30;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(4);
            }
            else{
                this.xPosition += random(4);
            }
        }
        
        this.xPosition -= 1;
    }

    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = this.xPosition;
            let tempYPos = this.yPosition;
            let tempAttackLength = this.attackLength;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempWidth = this.width;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackLength - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}

class Bat{
    constructor(){
        this.arrayPosition = 0;
        this.level = 2;
        this.maxHealth = 25;
        this.currentHealth = this.maxHealth;

        this.width = 40;
        this.height = 60;
        this.sprite = 'brown';
        this.xPosition = width /2;
        this.yPosition = height /3;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 300;
        this.attackLength = 80;
        this.attackWidth = 30;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
        }
    }

    touchStuff(){
        if(this.yPosition >= height - (rects[floor(this.xPosition)].height - this.height/4) - (1)){
            this.yPosition = height - (rects[floor(this.xPosition)].height - this.height/4) - (1);
        }
        

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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(4);
            }
            else{
                this.xPosition += random(4);
            }
        }
        
        this.xPosition -= 1;
    }

    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = playerArray[0].xPosition;
            let tempYPos = playerArray[0].yPosition;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackWidth + random(-25, 25), tempYPos + random(-25, 25), tempAttackWidth, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackWidth + random(-25, 25), tempYPos + random(-25, 25), tempAttackWidth, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}

class AxeThrower{
    constructor(){
        this.arrayPosition = 0;
        this.level = 2;
        this.maxHealth = 25;
        this.currentHealth = this.maxHealth;

        this.width = 40;
        this.height = 60;
        this.sprite = 'indigo';
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 600;
        this.attackLength = 80;
        this.attackWidth = 30;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(4);
            }
            else{
                this.xPosition += random(4);
            }
        }
        
        this.xPosition -= 1;
    }

    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = this.xPosition;
            let tempYPos = this.yPosition;
            let tempAttackLength = this.attackLength;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempWidth = this.width;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackLength - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}

class Berserker{
    constructor(){
        this.arrayPosition = 0;
        this.level = 2;
        this.maxHealth = 10;
        this.currentHealth = this.maxHealth;

        this.width = 20;
        this.height = 30;
        this.sprite = 'yellow';
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 80;
        this.prepTime = 10;
        this.attackLength = 80;
        this.attackWidth = 30;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(7);
            }
            else{
                this.xPosition += random(7);
            }
        }
        
        this.xPosition -= 1;
    }

    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = this.xPosition;
            let tempYPos = this.yPosition;
            let tempAttackLength = this.attackLength;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempWidth = this.width;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackLength - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}

class Bruiser{
    constructor(){
        this.arrayPosition = 0;
        this.level = 2;
        this.maxHealth = 50;
        this.currentHealth = this.maxHealth;

        this.width = 40;
        this.height = 60;
        this.sprite = 'gray';
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 1000;
        this.attackLength = 80;
        this.attackWidth = 45;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(3);
            }
            else{
                this.xPosition += random(3);
            }
        }
        
        this.xPosition -= 1;
    }

    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = this.xPosition;
            let tempYPos = this.yPosition;
            let tempAttackLength = this.attackLength;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempWidth = this.width;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackLength - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}

class Bowman{
    constructor(){
        this.arrayPosition = 0;
        this.level = 2;
        this.maxHealth = 25;
        this.currentHealth = this.maxHealth;

        this.width = 40;
        this.height = 60;
        this.sprite = color(200, 100, 50);
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 600;
        this.attackLength = 80;
        this.attackWidth = 30;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(4);
            }
            else{
                this.xPosition += random(4);
            }
        }
        
        this.xPosition -= 1;
    }

    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = this.xPosition;
            let tempYPos = this.yPosition;
            let tempAttackLength = this.attackLength;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempWidth = this.width;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackLength - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}

class Ninja{
    constructor(){
        this.arrayPosition = 0;
        this.level = 2;
        this.maxHealth = 25;
        this.currentHealth = this.maxHealth;

        this.width = 30;
        this.height = 50;
        this.sprite = 'black';
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 600;
        this.attackLength = 80;
        this.attackWidth = 30;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(5);
            }
            else{
                this.xPosition += random(5);
            }
        }
        
        this.xPosition -= 1;
    }

    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = this.xPosition;
            let tempYPos = this.yPosition;
            let tempAttackLength = this.attackLength;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempWidth = this.width;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackLength - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}

class Jumper{
    constructor(){
        this.arrayPosition = 0;
        this.level = 2;
        this.maxHealth = 25;
        this.currentHealth = this.maxHealth;

        this.width = 35;
        this.height = 50;
        this.sprite = 'pink';
        this.xPosition = width /2;
        this.yPosition = height /2;

        this.casting = false;
        this.castTime = 200;
        this.prepTime = 700;
        this.attackLength = 90;
        this.attackWidth = 30;
        this.attackDamage = 5;
        this.attackSprite = 'orange';

        this.attackID = 0;
        this.refreshCastingID = 0;
    }

    setArrayPosition(i){
        this.arrayPosition = i;
    }

    perish(damage){
        this.currentHealth -= damage;
        if (this. currentHealth <= 0){
            monsterArray.splice(this.arrayPosition, 1);
            clearTimeout(this.attackID);
            clearTimeout(this.refreshCastingID);
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
            if (playerArray[0].xPosition < this.xPosition){
                this.xPosition -= random(4);
            }
            else{
                this.xPosition += random(4);
            }
        }
        
        this.xPosition -= 1;
    }

    attack(){
        if(!this.casting){
            let tempArrayPosition = this.arrayPosition;
            let tempXPos = this.xPosition;
            let tempYPos = this.yPosition;
            let tempAttackLength = this.attackLength;
            let tempAttackWidth = this.attackWidth;
            let tempCastTime = this.castTime;
            let tempDamage = this.attackDamage;
            let tempWidth = this.width;
            let tempSprite = this.attackSprite;

            //attack left
            if(this.xPosition - this.attackLength <= playerArray[0].xPosition && this.xPosition >= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempAttackLength - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            }

            //attack right
            if(this.xPosition + this.attackLength >= playerArray[0].xPosition && this.xPosition <= playerArray[0].xPosition){
                this.casting = true;
                this.attackID = setTimeout(function(){createMonsterAttack(tempXPos - tempWidth, tempYPos, tempAttackLength, tempAttackWidth, tempDamage, tempCastTime, tempSprite)}, this.prepTime);
                this.refreshCastingID = setTimeout(function(){refreshCasting(tempArrayPosition)}, this.castTime + this.prepTime);
            } 
        }
    }

    display(i){
        fill(this.sprite);
        ellipse(monsterArray[i].xPosition, monsterArray[i].yPosition, monsterArray[i].width, monsterArray[i].height);
    }
}


function refreshCasting(arrayPosition){
    monsterArray[arrayPosition].casting = false;
}


let allMonsters = [Kobold, Whelp, Goblin, Berserker, Ninja, Jumper, Bowman, Bruiser, Bat, AxeThrower];

let encounterArray = [];
let monsterArray = [];

function setRandomEncounters(encounterAmount, encounterRate){
    for (i = 0; i < encounterAmount; i++){
        if (floor(random(0, encounterRate)) === 0){
            let newEncounter;

            newEncounter = new allMonsters[floor(random(0, allMonsters.length))];

            encounterArray.push(newEncounter);
            
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
        if (encounterRate > 1){
            encounterRate -= 1;
        }
        else{
            encounterRate = 1;
        }
        
        totalEncounterLevel += 2;
        setRandomEncounters(1000, encounterRate);
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