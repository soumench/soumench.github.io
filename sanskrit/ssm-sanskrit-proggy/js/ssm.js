 "use strict";
 var showenglish = false;
 var QUIZMODE = false;

 const cb = ["#fbb", "#afa", "#adf"];
 const cB = ["red", "green", "blue"];


 const sasentence = e("sasentence");

 const trace1 = e("trace1");
 const trace2 = e("trace2");
 const unsandhi = e("unsandhi");


var grid = [[], [], []];

initgrid();

function initgrid() {
var x; var y;
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 6; y++) {
            let B = e("b" + x + "" + y);
            B.xxx = x; B.yyy = y;
            grid[x].push(B);
        }
    }
}

const en = e("en");
const qz = e("qz");
const qz2 = e("qz2");
const nqz = e("noquiz");

var perm=[0,1,2];

var dn = 0,  vn = 0,   on = 0;

var ode, ove, ooe;

var ndn, nvn, non;


function flip() {
    showenglish = !showenglish;
    if (showenglish) {
        pass(grid[0], edoers, 0);
        pass(grid[1], everbs, 1);
        pass(grid[2], eobjects, 2);
        qz.setAttribute('class', "san");
    } else {
        pass(grid[0], doers, 0);
        pass(grid[1], verbs, 1);
        pass(grid[2], objects, 2);
        qz.setAttribute('class', "eng");
    }
    output();
}



function quiz() {
    if (!QUIZMODE) QUIZMODE = true;
    do {
        ndn = Math.floor((Math.random() * doers.length));
        nvn = Math.floor((Math.random() * verbs.length));
        non = Math.floor((Math.random() * objects.length));
    } while (ndn == dn || nvn == vn || non == on);

    swapr();
}

function noquiz() {
    if (!QUIZMODE) return;
    QUIZMODE = false;
    qz.innerHTML = "&nbsp;";
    qz2.innerHTML = "&nbsp;";
}