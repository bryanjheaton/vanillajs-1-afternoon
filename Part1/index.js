console.log("test")

let tracker = []
let progress = []


function play(squareNum) {
    const player = document.getElementById('player')
    const xo = document.getElementById(squareNum)
    if (!tracker.includes(document.getElementById(squareNum))) {
        tracker.push(document.getElementById(squareNum))
    } else {return}
    // console.log(tracker)
    progress[squareNum] = player.innerText
    if (player.innerText === "X") {
        player.innerText = "O";
        xo.innerText = "X";
    } else {
        player.innerText = "X";
        xo.innerText = "O";
    }
    if ((progress[0] === "X" && progress[1] === "X" && progress[2] === "X") || 
    (progress[3] === "X" && progress[4] === "X" && progress[5] === "X") || 
    (progress[6] === "X" && progress[7] === "X" && progress[8] === "X") ||
    (progress[0] === "X" && progress[3] === "X" && progress[6] === "X") || 
    (progress[1] === "X" && progress[4] === "X" && progress[7] === "X") || 
    (progress[2] === "X" && progress[5] === "X" && progress[8] === "X") ||
    (progress[0] === "X" && progress[4] === "X" && progress[8] === "X") ||
    (progress[2] === "X" && progress[4] === "X" && progress[6] === "X")) {
        alert("Congratulations player X!  You've won!")
        return;
    } else if ((progress[0] === "O" && progress[1] === "O" && progress[2] === "O") || 
    (progress[3] === "O" && progress[4] === "O" && progress[5] === "O") || 
    (progress[6] === "O" && progress[7] === "O" && progress[8] === "O") ||
    (progress[0] === "O" && progress[3] === "O" && progress[6] === "O") || 
    (progress[1] === "O" && progress[4] === "O" && progress[7] === "O") || 
    (progress[2] === "O" && progress[5] === "O" && progress[8] === "O") ||
    (progress[0] === "O" && progress[4] === "O" && progress[8] === "O") ||
    (progress[2] === "O" && progress[4] === "O" && progress[6] === "O")) {
        alert("Congratulations player O!  You've won!")
        return;
    } 
    let boardfull = true
        for (var i = 0; i < 8; i++) {
            if (progress[i] === undefined) {
                boardfull = false;
                return boardfull;
            }
        }   
        if (boardfull === true) {
            alert("CAT's game")
    }

    // console.log(document.getElementById(squareNum))
    console.log(progress)
}


