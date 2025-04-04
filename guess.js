const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true;

let inp = document.getElementById('number');
let btn = document.getElementById('guess');
let result = document.getElementById('result');
let attempt = document.getElementById('attempts');


function playAgain() {
    btn.innerHTML = "Play Again";
    inp.style.display = 'none';

        btn.onclick = function() {
            window.location.reload();
            btn.innerHTML = "Guess";
    }
}

function play() {
    if(inp.value !== '') {
        if(inp.value < answer) {
            result.innerHTML = 'TOO LOW!TRY AGAIN!';
        }else if(inp.value > answer) {
            result.innerHTML = 'TOO HIGH!TRY AGAIN!';
        }else {
            result.innerHTML = `CORRECT! THE ANSWER WAS ${answer}. It took you ${attempts + 1} attempts`;
            playAgain();
        }
        attempts++;
        attempt.innerHTML = attempts + " / " + "10";
        if(attempts == 10) {
            playAgain();
        document.getElementById('correctAns').innerHTML = `the correct answer (${answer})`;
    
        }
        inp.value = '';
    }else {
        window.alert('Please enter a vaild number');
    }
}

inp.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        play();
    }
});

