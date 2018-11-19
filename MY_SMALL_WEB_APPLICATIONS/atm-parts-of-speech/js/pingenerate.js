/*Created by Soumen Chakraborty - 2018 - Strictly For Educational, Non-profit and Non-Commercial Purpose */
function generatePin(num){var gpin = (Math.floor(Math.random()*num)).toString();
while(gpin<=1000){gpin=  (Math.floor(Math.random()*9999)).toString();}return gpin;}