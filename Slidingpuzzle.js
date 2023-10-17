let rows = 3; 
let columns = 3; 

// Tile which we click 
let currentTile; 
// Tile which we want to move on 
let otherTile; 

var turns = 0; 


var ImgOrder = ['4','2','8','5','1','6','7','9','3']



//  for more about the drag event refer mdn ; 



window.onload = function(){
    for(let r= 0 ; r<rows; r++){
        for( let c = 0 ; c<columns; c++){
            let tile =document.createElement("img");
            // set id of the tile 
            tile.id = r.toString() + '-' + c.toString(); 
            // add src attribute in the the by which we can acess the tile 
            // here imgOrder.shift() is use to move out the element from the array : 
            tile.src = ImgOrder.shift() + ".jpg"

            // Add drag functionality: 
            // while clicking a image
                tile.addEventListener("dragstart",dragStart);
                // move an image over an another image
                tile.addEventListener("dragenter",dragEnter);
                // // move an image while clicking 
                tile.addEventListener("dragover",dragOver);
                // // leave to its previous position 
                tile.addEventListener("dragleave",dragLeave)
                // drop to the new position 
                tile.addEventListener("drop",Drop)
                // end will swap the current position img with the droped positoned image: 
                tile.addEventListener("dragend",dragEnd)

            document.getElementById("box").append(tile);
        }
    }
}

function dragStart(){
// set event to currently dragged element; 
    currentTile = this;
    // otherTile = this; 
}
function dragEnter(e){
    // here this function will not do any this as such in that case but dragEnter 
    e.preventDefault();
    // otherTile= this; 
}
function dragOver(e){
    e.preventDefault();
    // otherTile = this; 
}



function dragLeave(){
// in this we have to write the condition of not  : 
}
// otherTile = this; 
function Drop(){
    otherTile = this;
}


let box1 = document.createElement("p")
box1.innerHTML =`Number of turns:  ${turns}` ; 
mainbx = document.getElementById("box")
mainbx.after(box1)


function dragEnd(){
// if other tile is not 9.jpg it return it move out from the loop ; this is because we want only swap with blank tile not with other one; 
    if(!otherTile.src.includes("9.jpg")){
        return 
    }

    // this will set the rule that currenttile is replace or change with its adjacent tile only 
    let currcode = currentTile.id.split("-");
    let r = parseInt(currcode[0]);
    let c = parseInt(currcode[1]);

    let othercode = otherTile.id.split("-");
    let r2 = parseInt(othercode[0]);
    let c2 = parseInt(othercode[1]);

    let moveLeft = r ==r2 && c2==c-1;
    let moveRight = r ==r2 && c2==c+1;

    let moveUp = r2 == r-1 && c ==c2; 
    let moveDown = r2 = r+1 && c == c2; 

    let isAdjacent = moveDown|| moveLeft|| moveRight||moveUp;

    if(isAdjacent){
        let currImg = currentTile.src;
        let otherImg = otherTile.src; 

        currentTile.src = otherImg; 
        otherTile.src = currImg; 


        turns +=1; 
        box1.innerHTML =`Number of turns:  ${turns}` ; 
        

    }
// ocument.currentScript.url)


}