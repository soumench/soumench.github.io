 /* Created by Soumen Chakraborty - 2018 - 
(Strictly for Educational Demonstration, Non-Profit and Strictly Non-Commercial purpose. All Rights Reserved.)*/
var pst="Poll not started."; var pet="Poll not ended."; var firstballotpressed=false;
var pollcleared=true; var delay = 3000;
function storeTheVotes(){display(`<br>Storing polled vote. <br>Please wait....`);
    var repeat = setInterval(dothis,delay); longBeepsound.play(); var i=0;var all=[
    ()=>{allBtnsState(0);},()=>{display(onMsg);allBtnsState(1);}]; var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function clearTheResult(){display(`<br>Clearing polled votes.<br><br>Please wait......`);longBeepsound.play();
    pst=""; pet=""; c1=c2=c3=c4=0; var repeat = setInterval(dothis,delay); var i=0;var all=[
    ()=>{allBtnsState(0);display(`<br>No of candidates : ${BUNAMES.length}`);beep();}
    ,()=>{display(`Poll Start Time:<br>${pst}`);beep();}
    ,()=>{display(pollIsClosed ?`Poll End Time :<br>${pet}`:`Poll End Time :`);beep();}
    ,()=>{display(`Total polled votes: ${storedVotes.length}`);beep();}
    ,()=>{display(`<br>Candidate1=${c1}`);beep();}
    ,()=>{display(`<br>Candidate2=${c2}`);beep();}
    ,()=>{display(`<br>Candidate3=${c3}`);beep();}
    ,()=>{display(`<br>Candidate4=${c4}`);beep();}
    ,()=>{display(onMsg);beep();allBtnsState(1);}]; var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function calculateResult(){display(`Calculating result.<br><br> Please wait....`);
    var repeat = setInterval(dothis,delay); var i=0; var all=[
    ()=>{allBtnsState(0);display(`<br>No of candidates : ${BUNAMES.length}`);beep();}
    ,()=>{display(`Poll Start Time:<br>${pst}`);beep();}
    ,()=>{display(pollIsClosed ?`Poll End Time :<br>${pet}`:`Poll End Time :`);beep();}
    ,()=>{display(`<br>Total polled votes: ${storedVotes.length}`);beep();}
    ,()=>{display(`<br>Candidate1=${c1}`);beep();}
    ,()=>{display(`<br>Candidate2=${c2}`);beep();}
    ,()=>{display(`<br>Candidate3=${c3}`);beep();}
    ,()=>{display(`<br>Candidate4=${c4}`);beep();}
    ,()=>{display(`<br>Press the Clear button.`);beep();allBtnsState(1);}]; var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function closeThePoll(){display(`Closing the poll.<br>Please wait....`);
    var repeat = setInterval(dothis,delay);var i=0; var all=[
    ()=>{allBtnsState(0); display(`<br>No of candidates : ${BUNAMES.length}`);beep();}
    ,()=>{display(`Poll Start Time:<br>${pst}`);beep();}
    ,()=>{display(pollIsClosed ?`Poll End Time :<br>${pet}`:`Poll End Time :`);beep();}
    ,()=>{display(`<br>Total polled votes: ${storedVotes.length}`);beep();}
    ,()=>{display(pollIsClosed ? closedMsg : onMsg);beep();allBtnsState(1);}]; var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){clearInterval(repeat);i=0; return;} all[i](); i++;}}
function powerOnDisplay(){var repeat = setInterval(dothis,delay); var i=0;  var all=[
    ()=>{allBtnsState(0);display(`This is an unofficial, educational demo of an<br>Electronic Voting Machine.`);beep();},()=>{display(`<br>No of candidates : ${BUNAMES.length}`);beep();}
    ,()=>{display(`<br>Poll Start Time:<br>${pst}`);beep();}
    ,()=>{display(pollIsClosed ?`<br>Poll End Time :<br>${pet}`:`<br>Poll End Time :`);beep();}
    ,()=>{display(`<br>Total polled votes: ${storedVotes.length}`);beep();}
    ,()=>{display(pollIsClosed ? closedMsg : onMsg);beep();allBtnsState(1);}];var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function checkTotal(){display(`<br><br>Total polled votes = ${storedVotes.length}`);
    var repeat = setInterval(dothis,delay); var i=0; var all=[()=>{allBtnsState(0);}
    ,()=>{display(pollIsClosed ? closedMsg : onMsg);allBtnsState(1);}]; var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function allBtnsState(bstate){i = btns.length; if(0==bstate){while(i--){btns[i].disabled=true;}}
    else if(1==bstate){while(i--){btns[i].disabled=false;}}}
function beep(){shortBeepSound.play();}