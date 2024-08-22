let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let score = 0;
let highScore = 0;
let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {

    if (started == false) {
        started = true;
        console.log("Game started");

        levelUp();
    }
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}


function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);
}


function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randbtn);
}


function checkAns(idx) {

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        highS();
        h2.innerHTML = `Game Over! your score is <b>${level}</b> and high score is ${highScore}<br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        score = level;

        reset();
    }
}


function btnPress() {
    let btn = this
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function highS() {
    if (score < level) {
        highScore = level;
    }
    else {
        highScore = score;
    }
}