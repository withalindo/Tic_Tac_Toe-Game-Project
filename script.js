let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-button");
let new_game = document.querySelector(".newbutton");
let messagecontainer = document.querySelector(".msg_container");
let message = document.querySelector(".msg");

let player_X = true; // For player X
const winning_pattern = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"],
];
boxes.forEach((box)=>
{
    box.addEventListener("click",() =>{
        if (player_X) //Player X
        {
            box.innerText = "X";
            player_X = false;            
        } 
        else {
            box.innerText = "O";
            player_X = true;
        }
        box.disabled = true;
        winnerCheck();
    });
});
const enableButtons = () =>
{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>
{
    message.innerText = `Congratulations, Player ${winner} have won the game.`;
    messagecontainer.classList.remove("hidden");
}
/*const showDraw = (winner) =>
{
    message.innerText = "It's a draw.";
    messagecontainer.classList.remove("hidden");
}*/
const disableButtons = () =>
{
    for (let box of boxes) {
        box.disabled = true;
    }
}
const winnerCheck = () =>
{
    for (let pattern of winning_pattern) {
        let valPos1 = boxes[pattern[0]].innerText;
        let valPos2 = boxes[pattern[1]].innerText;
        let valPos3 = boxes[pattern[2]].innerText;
        if (valPos1 != "" && valPos2 != "" && valPos3 != "") {
            if (valPos1 === valPos2 && valPos2 === valPos3 && valPos1 === valPos3) {
                showWinner(valPos1);
                disableButtons();
            }
        
        }
       /* else
        {
            showDraw(valPos1);
        }*/
    }

 
}
const resetGame = () =>
{
    player_X = true;
    enableButtons();
    messagecontainer.classList.add("hidden");
}
reset.addEventListener("click",resetGame);
new_game.addEventListener("click",resetGame);