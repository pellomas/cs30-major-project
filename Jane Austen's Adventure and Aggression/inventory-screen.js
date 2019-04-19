function inventoryClick(){
    if (mouseX > inventory.xPosition && mouseY > inventory.yPosition && mouseY < inventory.yPosition + inventory.cellNumber*inventory.cellSize && mouseX < inventory.xPosition + inventory.cellNumber*inventory.cellSize){
        let xcoord = floor(mouseX / inventory.cellSize);
        let ycoord = floor(mouseY / inventory.cellSize);

        if (inventoryGrid[ycoord][xcoord] < menuGridAssets.length -1){
            inventoryGrid[ycoord][xcoord] += 1;
        }
    }   
}

