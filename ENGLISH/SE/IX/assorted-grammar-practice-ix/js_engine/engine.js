/*
Copyright: Soumen Chakraborty 2018
https://soumen-here.blogspot.com/
Strictly for Educational and Non-commercial Purpose
*/
const blinkSound = new Audio("audio/blinksound.oga");
const gameover = new Audio("audio/gameOver.oga");
const success = new Audio("audio/success.oga");
const idk = new Audio("audio/idk.oga");

const bankLength = bank.length;

let i = 0;
let someString = bank[i];
let t;

function init() {
    const heading = e("heading");
    const question = e("question");
    const answer = e("answer");
    const bar = e("bar");
    bar.max = bankLength;
    
    fisherYates(bank);
    toggle();
    split();
    e("year").innerHTML = creation_year;  
}

function advance() {
    ++i;
    if (i >= bankLength) {
        gameover.play();
        i = 0;
    }
    split();
}

function receed() {
    if (i <= 0) {
        i = bankLength;
    }--i;
    split();
}

function split() {
    clearTimeout(flashcontrol);
    someString = bank[i];
    let index = someString.indexOf("~");
    let q = someString.substr(0, index);
    let a = someString.substr(index + 1);
    question.innerHTML = q;  answer.innerHTML = a;
    t = 0;
    toggle();
    bar.value = i + 1;
    f = 7;
    flashcontrol = setInterval(flashenglish, 100);
    success.play();
}

function toggle() {
    answer.style.color = (t = t ^ 1) ? "white" : "blue";
}

function clicktoggle() {
    toggle();
    idk.play();
}


var f;
var flashcontrol;

function flashenglish() {
    --f;
    question.style.backgroundColor = (f % 2) ? "purple" : "white";
    question.style.color = (f % 2) ? "white" : "purple";
    if (f < 1) {
        clearTimeout(flashcontrol);
        blinkSound.play();
        question.style.backgroundColor = "white";
        question.style.color = "black";
    }
}