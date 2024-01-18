let boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector("#reset");


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

const checkWinner



