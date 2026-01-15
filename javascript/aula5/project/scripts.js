// <! -- 🎲 -->
// <! -- 🃏 -->

const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,

};


function rollDice() {
    const roll = Math.floor(Math.random()* 6) + 1;
    console.log("roll =", roll); 
    scoreTracker[roll]++ 
    console.log(`🎲 You rolled a ${roll}`);
} 

function displayScores() {
    console.log(`🃏 Dice Roll Soce;`);
    for (const number in scoreTracker) {
        console.log(`${roll}; ${scoreTracker[roll]} times`);
    }
}

for (let i = 0; i <1000; i++) {
    rollDice();
} 
displayScores();