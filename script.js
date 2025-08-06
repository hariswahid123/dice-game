
let dice1 = "<div class=container><div></div><div></div><div></div><div></div><div class=special></div><div></div><div></div><div></div><div></div></div>";

let dice2 = "<div class=container><div class=special></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class=special></div></div>";

let dice3 = "<div class=container><div class=special></div><div></div><div></div><div></div><div class=special></div><div></div><div></div><div></div><div class=special></div></div>"

let dice4 = "<div class=container><div class=special></div><div></div><div  class=special></div><div></div><div></div><div></div><div  class=special></div><div></div><div class=special></div></div>"

let dice5 = "<div class=container><div class=special></div><div></div><div  class=special></div><div></div><div class=special></div><div></div><div  class=special></div><div></div><div class=special></div></div>"

let dice6 = "<div class=container><div class=special></div><div class=special></div><div class=special></div><div ></div><div></div><div ></div><div class=special></div><div class=special></div><div class=special></div></div>"

let resultDice = document.getElementById("resultDice");


function play() {
   let diceRoll = Math.ceil(Math.random() * 6);


   if (diceRoll === 1) {
      resultDice.innerHTML = dice1;
   } else if (diceRoll === 2) {
      resultDice.innerHTML = dice2;
   } else if (diceRoll === 3) {
      resultDice.innerHTML = dice3;
   } else if (diceRoll === 4) {
      resultDice.innerHTML = dice4;
   } else if (diceRoll === 5) {
      resultDice.innerHTML = dice5;
   } else if (diceRoll === 6) {
      resultDice.innerHTML = dice6;
   }


};














