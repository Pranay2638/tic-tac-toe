console.log("hello");
let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector(".reset-btn");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnX=true;

const winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("botton was clicked");
        if(turnX){
        box.innerText="X";
        turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
const disableBoxes=()=>{
    for(let box of boxes){
     box.disabled=true;
    }
 };
const enableBoxes=()=>{
   for(let box of boxes){
    box.disabled=false;
    box.innerText="";
   }
};
resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);

const checkWinner=()=>{
    for(let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
    if(pos1Val==pos2Val&&pos2Val==pos3Val){
        console.log("winner",pos1Val);
        showWinner(pos1Val);
    } 
    }
    }
};
const showWinner=(winner) =>{
       msg.innerText=`congratulations, winner is ${winner}`;
       msgContainer.classList.remove("hide");
       disableBoxes();
      
}
