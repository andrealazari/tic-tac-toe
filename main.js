//selec DOM objects
var boardSelection = document.querySelector('.board')
var allBoxes = document.querySelectorAll('.individual-box')
var resetBtn = document.querySelector('.reset-btn')
var resetBoardBtn = document.querySelector('.reset-board')
var p1Display = document.querySelector('.p1-score')
var p2Display = document.querySelector('.p2-score')
var resultDisplay = document.querySelector('.result')

//define initial values
var countClick = 1
var player1Counter = 0
var player2Counter = 0
var tieGamesCounter = 0
var isGameOver = false

//sounds
var luigiSound = new Audio('./sounds/luigi_07_Im-a Luigi_number_one.wav')
var marioSound = new Audio('./sounds/mario-itsme.wav')
var tieSound = new Audio('./sounds/smb_bowserfalls.wav')

//activate clicks
boardSelection.addEventListener('click', runGame)
resetBtn.addEventListener('click', resetAll)
resetBoardBtn.addEventListener('click', resetBoard)

function runGame(event) {
    var boxClicked = event.target
    if(boxClicked.tagName === 'DIV') {
        if(!boxClicked.classList.contains('clicked')) {
            if(countClick % 2 === 0) {
                boxClicked.classList.add('clicked', 'player2')
                checkWinner()
            } else {
                boxClicked.classList.add('clicked', 'player1')
                checkWinner()
            }
            countClick++
            keepScore()
            drawGame()
            gameOver()
        }
    }
}


function checkWinner(){
    var player = ['player1', 'player2']
    var carachter = ['mario', 'luigi']
    var sounds = [marioSound, luigiSound]
    for(let i = 0 ; i < player.length; i++){
        var winner = `${carachter[i].toUpperCase()} is the winner!`
        var box1 = document.querySelector('.box1').classList.contains(player[i])
        var box2 = document.querySelector('.box2').classList.contains(player[i])
        var box3 = document.querySelector('.box3').classList.contains(player[i])
        var box4 = document.querySelector('.box4').classList.contains(player[i])
        var box5 = document.querySelector('.box5').classList.contains(player[i])
        var box6 = document.querySelector('.box6').classList.contains(player[i])
        var box7 = document.querySelector('.box7').classList.contains(player[i])
        var box8 = document.querySelector('.box8').classList.contains(player[i])
        var box9 = document.querySelector('.box9').classList.contains(player[i])

        if(box1 && box2 && box3) {
            resultDisplay.textContent = winner
            sounds[i].play()
            isGameOver = true
            break
        } else if(box4 && box5 && box6){
            resultDisplay.textContent = winner
            sounds[i].play()
            isGameOver = true
            break
        } else if(box7 && box8 && box9){
            resultDisplay.textContent = winner
            sounds[i].play()
            isGameOver = true
            break
        } else if(box1 && box4 && box7){
            resultDisplay.textContent = winner
            sounds[i].play()
            isGameOver = true
            break
        } else if(box2 && box5 && box8){
            resultDisplay.textContent = winner
            sounds[i].play()
            isGameOver = true
            break
        } else if(box3 && box6 && box9){
            resultDisplay.textContent = winner
            sounds[i].play()
            isGameOver = true
        } else if(box1 && box5 && box9){
            resultDisplay.textContent = winner
            sounds[i].play()
            isGameOver = true
            break
        } else if(box3 && box5 && box7){
            resultDisplay.textContent = winner
            sounds[i].play()
            isGameOver = true
            break
        }
    }
}

function drawGame() {
    if(document.querySelectorAll('.clicked').length === 9) {
        if(!isGameOver){
        tieGamesCounter++
        resultDisplay.textContent = `It's a tie!`
        tieSound.play()
        }
    }
}

function gameOver() {
    if(isGameOver) {
        boardSelection.removeEventListener('click', runGame)
    }
}

function keepScore() {
    if(isGameOver) {
        if(document.querySelectorAll('.player1').length > document.querySelectorAll('.player2').length) {
            player1Counter++   
            p1Display.textContent = player1Counter
        } else {
            player2Counter++
            p2Display.textContent = player2Counter
       } 
    }
}

function resetAll() {
    resetBoard()
    tieGamesCounter = 0
    player1Counter = 0
    player2Counter = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
}

function resetBoard() {
    isGameOver = false
    countClick = 1
    resultDisplay.textContent = ''
    for(let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].textContent = ''
        allBoxes[i].classList.remove('clicked', 'player2', 'player1')
    }
    boardSelection.addEventListener('click', runGame)
}
