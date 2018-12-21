let deck = [
    {
        name: "Bulbasaur",
        damage: 60
    }, {
        name: "Caterpie",
        damage: 40
    }, {
        name: "Charmander",
        damage: 60
    }, {
        name: "Clefairy",
        damage: 50
    }, {
        name: "Jigglypuff",
        damage: 60
    }, {
        name: "Mankey",
        damage: 30
    }, {
        name: "Meowth",
        damage: 60
    }, {
        name: "Nidoran - female",
        damage: 60
    }, {
        name: "Nidoran - male",
        damage: 50
    }, {
        name: "Oddish",
        damage: 40
    }, {
        name: "Pidgey",
        damage: 50
    }, {
        name: "Pikachu",
        damage: 50
    }, {
        name: "Poliwag",
        damage: 50
    }, {
        name: "Psyduck",
        damage: 60
    }, {
        name: "Rattata",
        damage: 30
    }, {
        name: "Squirtle",
        damage: 60
    }, {
        name: "Vulpix",
        damage: 50
    }, {
        name: "Weedle",
        damage: 40
    }
]

// jQuery
// create a div for reach round
// use h2 to list out the round number
// create ul
// create li items with matchup and who won
// h3 to say the score
// h1 to say the game winner
//const makeDiv = $('.game').append(`<div class='theRound'>${round}</div>`);








function dealCards(contestant) {
    for (let i = 0; i < 3; i++) {
        let randomCard = deck[Math.floor(Math.random() * 18)];
        contestant.cards.unshift(randomCard);
        //console.log(contestant.cards);
    }
}
// make choose card method in each const
const player1 = {
    cards: [],
    points: 0,
    chooseCard(cardToPlay) {
    },
   // chosenCard: this.cards[Math.floor(Math.random() * 3)]
}
// dealCards(player1);
// console.log(player1.randomCard);
const cpu = {
    cards: [],
    points: 0,
}


let round = 1;
function battle() {
    // const makeH3 = $('<h3></h3>');
    // const makeH1 = $('<h1></h1>');  
    const makeDiv = $('.game').append(`<div class='theRound'>Pokemon Battle!</div>`)
    $('.theRound').append('<ul></ul>');
   while (player1.points < 5 && cpu.points < 5){  
            dealCards(player1);
            dealCards(cpu);
            console.log(`%c Round ${round}`, `color: red`);
            //jQuery
            // const makeDiv = $('.game').append(`<div class='theRound'>${round}</div>`)
            // $('.theRound').append('<ul></ul>');

            console.log(`${player1.cards[0].name} ${player1.cards[0].damage} vs. ${cpu.cards[0].name} ${cpu.cards[0].damage}`);
            $('ul').append(`<li class ='fight'>${player1.cards[0].name} ${player1.cards[0].damage} vs. ${cpu.cards[0].name} ${cpu.cards[0].damage}</li>`);

            if(player1.cards[0].damage > cpu.cards[0].damage){
                console.log(`%c Player 1 wins the point!`, `color: blue; font-size: 12px;`);
                player1.points += 1;
                round += 1;
                $('ul').append(`<li class='point'>Player 1 wins the point!</li><br>`);
            }
            else if (cpu.cards[0].damage > player1.cards[0].damage){
                console.log(`%c The computer wins the point!`, 'color: blue; font-size: 12px');
                cpu.points += 1;
                round += 1;
                $('ul').append(`<li class='point'>The Computer wins the point!</li><br>`);
            }
            else {
                console.log(`%c Tie, no points awarded`, `color: blue; font-size: 12px`);
                round += 1;
                $('ul').append(`<li class='point'>Tie, no points awarded</li><br>`);
            }
            console.log(`%c Player: ${player1.points} Computer: ${cpu.points}`, `color: green; font-size: 12px;`);
            $('ul').append(`Player: ${player1.points} Computer: ${cpu.points}`);

        } // end of the while loop
        if(player1.points == 5){
            console.log(`%c Player 1 Wins!`, `color: orange; font-size: 20px;`);
            $('.theRound').append(`<div class='champion'>Player 1 Wins!</div>`);
        }
        else if(cpu.points == 5){
            console.log(`%c Computer Wins!`, `color: orange; font-size: 20px;`);
            $('.theRound').append(`<div class='champion'>Computer Wins!</div>`);
        }
    }//end of function
battle();



// jQuery 
















