function computerRandomPick() {
    random = Math.floor(Math.random() * 3);
    
    switch (random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
        default:
            break;
    }
}

function updateScore(comparePick) {
    const youPoint = document.getElementById('you-point');
    const computerPoint = document.getElementById('computer-point');
    if (comparePick == 'win') {
        +youPoint.textContent ++;
    } else if (comparePick == 'lost') {
        +computerPoint.textContent ++;
    } else {
        return;
    }
}

function comparePicks(userPick,computerPick) {
    if (userPick == 'rock') {
        if (computerPick == 'rock') {
            return 'tie';
        } else if (computerPick == 'paper') {
            return 'lost';
        } else if (computerPick == 'scissor') {
            return 'win';
        }
    } else if (userPick == 'paper') {
        if (computerPick == 'rock') {
            return 'win';
        } else if (computerPick == 'paper') {
            return 'tie';
        } else if (computerPick == 'scissor') {
            return 'lost';
        }
    } else if (userPick == 'scissor') {
        if (computerPick == 'rock') {
            return 'lost';
        } else if (computerPick == 'paper') {
            return 'win';
        } else if (computerPick == 'scissor') {
            return 'tie';
        }
    }
}

function displayResult(comparePick, yourPick, computerPick) {
    const result = document.querySelector('.parag');
    switch (comparePick) {
        case 'win':
            result.textContent = `You won! ${yourPick.charAt(0).toUpperCase() + yourPick.slice(1)} beats ${computerPick}`;
            break;
        case 'lost':
            result.textContent = `You lost! ${computerPick.charAt(0).toUpperCase() + computerPick.slice(1)} beats ${yourPick}`;
            break;
        case 'tie':
            result.textContent = `It's a tie! You both picked ${yourPick}`;
            break;
        default:
            break;
    }
}

function pickDisplayTransition() {
    let userDisplay = document.querySelector('.you-pick');
    let computerDisplay = document.querySelector('.computer-pick');
    userDisplay.textContent = '✊';
    computerDisplay.textContent = '✊';
    userDisplay.setAttribute('style', 'rotate: 0turn');
    setTimeout(() => {
        userDisplay.removeAttribute('style');
    }, 150);
    computerDisplay.setAttribute('style', 'rotate: 0turn');
    setTimeout(() => {
        computerDisplay.removeAttribute('style');
    }, 150);
}

function changePickDisplay(userDisplay,computerDisplay) {
    let userDisplayAfter = document.querySelector('.you-pick');
    let computerDisplayAfter = document.querySelector('.computer-pick');
    let dict = { 'rock':'✊', 'paper':'✋', 'scissor': '✌'};

    userDisplayAfter.textContent = dict[userDisplay];
    computerDisplayAfter.textContent = dict[computerDisplay];
}

function checkScore() {
    const youPoint = document.getElementById('you-point');
    const computerPoint = document.getElementById('computer-point');
    if (youPoint.textContent == '5' || computerPoint.textContent == '5') {
        return true;
    } else {
        return false;
    }
}

function isGameOver() {
    let gameOverDiv = document.querySelector('.game-over');
    let bgBlur = document.querySelector('.bg-blur');
    let result = document.querySelector('.game-over-result');
    const youPoint = document.getElementById('you-point');
    const computerPoint = document.getElementById('computer-point');

    if (checkScore()) {
        gameOverDiv.style.display = 'flex';
        bgBlur.style.display = 'block';
    } else {
        return;
    }
    
    if (+youPoint.textContent > +computerPoint.textContent) {
        result.textContent = 'Congratulations! You won!';
    } else {
        result.textContent = 'Better luck next time!'
    }
}

function restartGame() {
    let playAgain = document.getElementById('btn-play-again');
    playAgain.addEventListener('click', () => window.location.reload())

}

let weapons = document.querySelector('.weapons');
for (let i=0; i<weapons.children.length; i++) {
    weapons.children[i].addEventListener('click', function(e) {
    
        let computerPick = computerRandomPick();
        let yourPick = e.target.id;
        let comparePick = comparePicks(yourPick,computerPick);
        let repeatTransition = setInterval(pickDisplayTransition, 250);

        setTimeout(() => {
            clearInterval(repeatTransition);
            updateScore(comparePick);
            displayResult(comparePick,yourPick,computerPick);
            changePickDisplay(yourPick,computerPick);
            isGameOver()
            restartGame()
        }, 900);
    });
}





// console.log(computerRandomPick());