var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 1;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        // console.log(p1Score, winningScore);
        console.log("Player 1 score: " + p1Score);
        p1Display.textContent = p1Score;
        if (p1Score >= winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
            console.log("Game Over! Player 1 wins!");
        }
    }
});

p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        console.log("Player 2 score: " + p2Score);
        p2Display.textContent = p2Score;
        if (p2Score >= winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
            console.log("Game Over! Player 2 wins!");
        }
    }
});

numInput.addEventListener("change", function(){
    if (this.value > p1Score && this.value > p2Score) {
    console.log("Changed the target score to " + "\"" + this.value + "\"");
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    winningScore = Number(this.value);
    winningScoreDisplay.textContent = Number(this.value);
    } else {
        this.value = winningScore;
        console.log("The target score must be higher than the current scores!")
    }
    //reset();
})

// could also reset classes, logical and visual score, and game status using: "window.location.href = window.location.href;"
resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    winningScoreDisplay.textContent = winningScore;
    numInput.value = winningScore;
    console.clear();
}