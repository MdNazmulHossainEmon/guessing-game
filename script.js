
    // Initialize some value
    let totalAttempts = 5;
    let attempt = 0;
    let totalWon = 0;
    let totalLost = 0;

    // Finding Elements
    const cardBody = document.querySelector(".card-body") ;
    const form = cardBody.querySelector("form");
    const guessingNumber =  cardBody.querySelector("#guessingNumber");
    const checkButton = cardBody.querySelector("#check-button");
    const resultText = cardBody.querySelector(".result-text");
    const remainingAttempt = cardBody.querySelector(".remaining-attempt");
    const lostWonMessage =  document.createElement("p");

    checkButton.addEventListener("click", function(event){
        event.preventDefault();
        attempt++;

        if(attempt==5){
    guessingNumber.disabled = true;
    checkButton.disabled = true;
        }
        if(attempt<6){
            checkResult(guessingNumber.value);
            remainingAttempt.innerHTML = `
            Total Attempts: ${totalAttempts-attempt}
            `;
        }

        guessingNumber.value = '';
    })
    // check result
    const checkResult = (guessingNumber) =>{
        let randomNumber = getRandomNumber(5);
        if(guessingNumber==randomNumber){
    resultText.innerHTML=`
    You have won
    `;
    totalWon++;
        }else{
            resultText.innerHTML = `
            You have lost random number was: ${randomNumber}
            `
            totalLost++;
        }
        lostWonMessage.innerHTML = `
        Won: ${totalWon} Lost: ${totalLost}
        `
        lostWonMessage.classList.add("largest-text");
        cardBody.appendChild(lostWonMessage);
    }

    // get random number
    const getRandomNumber = (number)=>{
        return Math.floor(Math.random()*number) + 1;

    }
    