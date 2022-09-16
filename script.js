function getComputerChoice() {
    
    // Will return a word from the lists randomly
    
    const list = ['rock', 'paper', 'scissor'];

    let choice = Math.floor(Math.random()* list.length);
    return list[choice];
}



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

// game()

// function changing_image() {
//     const weapon_images = ["./images/rock.svg","./images/paper.svg","./images/paper.svg"]

//     do {
//         console.log(1);
//     } while()
// }

const you = document.querySelector('.you img')