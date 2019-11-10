/*"use strict";*/

function init(){
    var pValue = e("pValue"); var bcd = e("bcd"); var cess = e("cess"); var igst = e("igst"); 
    var taxTotal = e("taxTotal"); var totalCost = e("totalCost");
    e("pValue").addEventListener("change", Update);    
} 

function Update(){
    pValue = parseFloat(e("pValue").value); pValue = pValue ? pValue : 0; /*avoid NaN*/
    var bcdPercent = 10;
    var cessPercent = 3;
    var igstPercent = 28;
    var myBcd = roundToTwo(pValue*( bcdPercent/100)); bcd.value= myBcd ;    
    var myCess = roundToTwo(myBcd * ( cessPercent/100));  cess.value = myCess;    
    var myIgst = roundToTwo( (pValue+myBcd+myCess) * (igstPercent/100) ); igst.value = myIgst;    
    var allTax = myBcd+myCess+myIgst;  taxTotal.innerHTML=roundToTwo(allTax) + " INR";
    totalCost.innerHTML = roundToTwo(pValue+allTax) + " INR";
}  
/*
Copyright: Soumen Chakraborty 2019
https://soumen-here.blogspot.com/
Strictly for Educational and Non-commercial Purpose
*/