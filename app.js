let boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgDiv = document.querySelector(".message");
let msg = document.querySelector("#msg")


 let turnO = true;  //playerX, playerO
 const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ]; 

 boxes.forEach(function(boxey){
    boxey.addEventListener("click", ()=>{
        console.log("clicked")
        if (turnO){      //same as turnO === true
            boxey.innerText = "O";
            turnO = false;
        }
        else{
            boxey.innerText = "X";
            turnO = true;
        }
//disables the interactivity of the boxey element, 
//typically used to prevent further clicks or interactions on that element.
//prevent repetitive clicks in the game so that players cannot change their value again
        boxey.disabled=true;  

        checkWinner();
    });
});





//disabling the boxes so that after winner is confirmed player cannot continue the same game.
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
}
const whoisWinner= (winner)=>{
    msg.innerHTML = `Hooray, Winner is ${winner}`;
    msgDiv.classList.remove("hide");
    disableBoxes();
}


const checkWinner = ()=>{
    for(let pattern of winningPatterns){

        //checking the wining pattern and the boxes
       /*  console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]); */

        let position1Value = boxes[pattern[0]].innerText;
        let position2Value = boxes[pattern[1]].innerText;
        let position3Value = boxes[pattern[2]].innerText;

        if(position1Value != "" && position2Value != "" && position3Value !=""){
            if(position1Value === position2Value && position2Value === position3Value){                
              whoisWinner(position1Value);
            }
        }


    }
};



const resetGame =()=>{
    turnO = true;
    enableBoxes();
    msgDiv.classList.add("hide");

};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


