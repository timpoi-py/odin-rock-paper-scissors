
function playRound(playerSelection, computerSelection) {

    // Determines who will win the game

    const list = ['rock', 'paper', 'scissor'];

    playerSelection = prompt("Pick your weapon: Rock, paper, or scissor");
    computerSelection = getComputerChoice();

    while (!list.includes(playerSelection.toLowerCase())){
        playerSelection = prompt("Not in the choices. Enter again.\nRock,Paper, or Scissor");
    }

    console.log(`Computers choice is: ${computerSelection}`);
    console.log(`Your choice is: ${playerSelection}`);

    if (playerSelection.toLowerCase() == "rock") {

        if (computerSelection == "paper"){
            return "You lose! Paper beats rock.";
        } else if (computerSelection == "scissor"){
            return "You win! Rock beats scissor";
        } else {
            return "It's a tie! Both of you chose rock.";
        }
    } else if (playerSelection.toLowerCase() == "paper") {

        if (computerSelection == "paper"){
            return "It's a tie! Both of you chose paper.";
        } else if (computerSelection == "scissor"){
            return "You lose! Scissor beats paper.";
        } else {
            return "You win! Paper beats rock";
        }
    } else if (playerSelection.toLowerCase() == "scissor") {
        if (computerSelection == "paper"){
            return "You win! Scissor beats paper.";
        } else if (computerSelection == "scissor"){
            return "It's a tie! Both of you chose scissor.";
        } else {
            return "You lose! Rock beats scissor.";
        }
    } 

}

function game(){
    
    // Calling this function will play the game in 5 rounds.

    let player = 0;
    let computer = 0;

    for (let i = 1; i < 6; i++){

        console.log(`\nRound ${i}`);
        let result = playRound();

        console.log(result);

        if (result.includes("win")){
            player++;
        } else if (result.includes("lose")){
            computer++;
        } else{
            player = player;
            computer = computer;
        }


        console.log("\nScore board");
        console.log(`You: ${player}`);
        console.log(`Computer: ${computer}`);
        console.log(`\nEnd of round ${i}`);


        
    }

    console.log("\nEND OF GAME");
    console.log("Score board");
    console.log(`You: ${player}`);
    console.log(`Computer: ${computer}`);

    if (player>computer) {
        console.log("\nCONGRATULATIONS! YOU'RE A CHAMP!");
    } else if (computer>player){
        console.log("\nBETTER LUCK NEXT TIME!");
    } else {
        console.log("\nPHEW! THAT'S SO CLOSE!");
    }

}


// Will enter the main page
const welcome_blur = document.querySelector('.welcome-blur');

function letsPlayClicked() {
    const welcome_blur_none = document.querySelector('.welcome-blur-none');
    welcome_blur_none.style.opacity = '0';
    setTimeout( () => welcome_blur_none.style.display = 'none', 500);
    
}


// changing Image
let youImage = document.getElementById('you-image');
const computerImage = document.getElementById('computer-image');

function iterateArrayLength() {
    const weapon_images = ["./images/rock.svg","./images/paper.svg","./images/scissor.svg"];
    let array = weapon_images;
    let length = array.length;

    for (let i=0; i<length; i++){
        setTimeout(() => {
            youImage.src = weapon_images[i];
        }, i*150);
    }

    for (let i=length-1; i>=0; i--){
        setTimeout(() => {
            computerImage.src = weapon_images[i];
        }, i*150);
    }
}    


// enter the Main page (the lets play button is clicked)
const btn = document.querySelector('.btn-lets-play');

function startShuffling() {
    iterateArray = setInterval( iterateArrayLength, 450);
}
   

function stopShuffling() {
    clearInterval(iterateArray);
}

btn.addEventListener('click', () => {
    letsPlayClicked();
    setTimeout(() => {
        startShuffling();
    }, 500);
})


// When a user picked a weapon, the computer will also pick at the same time
// both user and computer will show the weapon picked at the same time
function getComputerChoice() { 
    // Will return a word from the lists randomly
    const weapon_images = ["./images/rock.svg","./images/paper.svg","./images/scissor.svg"];

    let choice = Math.floor(Math.random()* weapon_images.length);
    return weapon_images[choice];
}

let weapons = document.querySelector('.weapons');
let compImage = document.getElementById('computer-image');
let result = document.querySelector('.result')
function pickWeapon() {
    // Both Computer and User will pick a weapon
    for (i=0; i<weapons.children.length ; i++){
        weapons.children[i].addEventListener('click', function(e) {
            stopShuffling()

            youImg = e.target.src;
            compImg = getComputerChoice()

            setTimeout(() => {
                youImage.setAttribute('src', './images/questionmark.svg');
                compImage.setAttribute('src', './images/questionmark.svg');
            }, 300);
            
            setTimeout(() => {
                youImage.setAttribute('src', youImg);
                compImage.setAttribute('src', compImg);
                result.textContent = compareWeapon(youImg,compImg)
                result.style.opacity = '1'
            }, 900);

            
        })
    }
}


// compare the picked weapon of the user and computer
function compareWeapon(you,comp) {

    let rock = weapons.children[0].src
    let paper = weapons.children[1].src
    let scissor = weapons.children[2].src

    if (you == rock) {

        if (comp == paper){
            return "You lose! Paper beats rock";
        } else if (comp == scissor){
            return "You win! Rock beats scissor";
        } else {
            return "It's a tie! Both of you picked rock";
        }
    } else if (you == paper) {

        if (comp == paper){
            return "It's a tie! Both of you picked paper";
        } else if (comp == scissor){
            return "You lose! Scissor beats paper";
        } else {
            return "You win! Paper beats rock";
        }
    } else if (you == scissor) {
        if (comp == paper){
            return "You win! Scissor beats paper";
        } else if (comp == scissor){
            return "It's a tie! Both of you picked scissor";
        } else {
            return "You lose! Rock beats scissor";
        }
    } 
    
}
// show result

pickWeapon()
// console.log(weapons.children);





