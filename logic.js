let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let guessHistory = []; 
const maxAttempts = 10;

let attemptData = document.getElementById("attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");

function check() {
    let userNum = parseInt(userinp.value);

    if (attempt >= maxAttempts) {
        message.innerHTML = `Game Over! You've used all ${maxAttempts} attempts. The correct number was ${cnum}.`;
        message.style.color = "purple";
        subBtn.disabled = true;
        resBtn.style.display = "block";
        return;
    }

    
    if (cnum === userNum) {
        message.innerHTML = "Congratulations! You have guessed the number";
        message.style.color = "green";
        resBtn.style.display = "block";
        subBtn.disabled = true; 
    } else if (cnum < userNum) {
        message.innerHTML = "Too High! Try again";
        message.style.color = "red";
    } else if (cnum > userNum) {
        message.innerHTML = "Too Low! Try again";
        message.style.color = "red";
    }

    attempt++;
    attemptData.innerHTML = attempt;

   
    guessHistory.push(userNum);
    document.getElementById("history").innerHTML = `Past guesses: ${guessHistory.join(", ")}`;

    setTimeout(() => {
        userinp.value = "";
        message.innerHTML = "";
    }, 5000);
}

function restart() {
    cnum = Math.floor(Math.random() * 100) + 1; 
    attempt = 0;
    guessHistory = []; 

    attemptData.innerHTML = attempt;
    document.getElementById("history").innerHTML = ""; 
    message.innerHTML = ""; 
    subBtn.disabled = false; 
    resBtn.style.display = "none"; 
}

// Event listeners for buttons
subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);
