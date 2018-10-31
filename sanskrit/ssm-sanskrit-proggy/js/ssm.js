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