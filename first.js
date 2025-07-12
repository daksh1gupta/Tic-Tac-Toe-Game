let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");
let newGame = document.querySelector(".new-game");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container"); 

let turnO = true;

let arr = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
    box.disabled = true;
    checkWinner ();
    });
});


const checkWinner = () => {
    for (let pattern of arr){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
        }
      }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newGame.addEventListener("click", resetGame);
restart.addEventListener("click", resetGame);

