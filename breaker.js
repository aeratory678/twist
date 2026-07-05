let playerName = "";

function getPlayerName() {
    playerName = document.getElementById("playerName").value;
    if (playerName.trim() === "") {
        playerName = "Anonymous";
    }
}

function startGame() {
    getPlayerName();
    
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => console.log("Fullscreen blocked or not supported."));
    }

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    
    init(); 
    Text.draw(`Hello, ${playerName}! Click to play!`);
    
    canvas.addEventListener('click', x);
}

document.getElementById("startButton").addEventListener("click", startGame);
