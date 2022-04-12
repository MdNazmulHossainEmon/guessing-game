
// Initializing some values
let totalAttempt = 5;
let attempt = 0;
let totalWon = 0;
let totalLost = 0;

//  Finding Elements
 const cardBody =  document.querySelector(".card-body");
 const form = document.querySelector('form');
 const guessingNumber = form.querySelector('#guessingNumber');
 const checkButton =  document.querySelector("#check-button");
 const resultText =  document.querySelector(".result-text");
 const remainingAttempt = document.querySelector(".remaining-attempt");
 const p = document.createElement("p");

 document.getElementById('check-button').addEventListener("click",function(event){
     event.preventDefault();
    //  console.log (typeof guessingNumber.value);

//   console.log(guessingNumber.value)
attempt++;
if(attempt===5){
    guessingNumber.disabled = true;
    checkButton.disabled = true;
}if(attempt<6){
    checkResult(guessingNumber.value)  ;
    remainingAttempt.innerHTML = `
    Remaining Attempts : ${totalAttempt-attempt}`;

}
  guessingNumber.value = '';

 })

 function checkResult(guessingNumber){
    //  console.log(guessingNumber)
     let randomNumber =  getRandomNumber(5);
    //  console.log(randomNumber);
    if( guessingNumber==randomNumber){
        resultText.innerHTML = `
        you have won
        `
        totalWon++;
    }else{
        resultText.innerHTML = `
        you have lost. and random number was: ${randomNumber}
        `
        totalLost++;
    }
    p.innerHTML = `
    won: ${totalWon} Lost: ${totalLost}
    `;
    p.classList.add("largest-text");
    cardBody.appendChild(p);

 }

 function getRandomNumber (number){
  return  Math.floor(Math.random() *number) +1;
 }