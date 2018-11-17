 /* Created by Soumen Chakraborty - 2018 - 
(Strictly for Educational Demonstration, Non-Profit and Strictly Non-Commercial purpose. All Rights Reserved.)*/
var delay = 2500;function storeTheVotes(){display(`<br>Storing polled vote. <br>Please wait....`);
    var repeat = setInterval(dothis,delay); longBeepsound.play(); var i=0;var all=[
    ()=>{allBtnsState(0);},()=>{display(onMsg);allBtnsState(1);}]; var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function clearTheResult(){display(`<br>Clearing polled votes.<br><br>Please wait......`);longBeepsound.play();
    pst=""; pet=""; c1=c2=c3=c4=0; var repeat = setInterval(dothis,delay); var i=0;var all=[
    ()=>{display(``);},()=>{allBtnsState(0);display(`<br>No of candidates : ${BUNAMES.length}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Poll Start Time:<br>${pst}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Poll End Time :<br>${pet}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Total polled votes: ${storedVotes.length}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Candidate1 = ${c1}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Candidate2 = ${c2}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Candidate3 = ${c3}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Candidate4 = ${c4}`);beep();}
    ,()=>{display(``);},()=>{display(onMsg);beep();allBtnsState(1);}]; var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function calculateResult(){display(`Calculating result.<br><br> Please wait....`);beep();
    var repeat = setInterval(dothis,delay); var i=0; var all=[
    ()=>{display(``);},()=>{allBtnsState(0);display(`<br>No of candidates : ${BUNAMES.length}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Poll Start Time:<br>${pst}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Poll End Time :<br>${pet}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Total polled votes: ${storedVotes.length}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Candidate1 = ${c1}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Candidate2 = ${c2}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Candidate3 = ${c3}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Candidate4 = ${c4}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Press the Clear button.`);beep();allBtnsState(1);}]; var howmanytimes = all.length;function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function closeThePoll(){display(`Closing the poll.<br><br>Please wait....`);beep();
    var repeat = setInterval(dothis,delay);var i=0; var all=[
    ()=>{display(``);},()=>{allBtnsState(0); display(`<br>No of candidates : ${BUNAMES.length}`); beep();}
    ,()=>{display(``);},()=>{display(`<br>Poll Start Time:<br>${pst}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Poll End Time :<br>${pet}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Total polled votes: ${storedVotes.length}`);beep();}
    ,()=>{display(``);},()=>{display(pollIsClosed ? closedMsg : onMsg);beep();allBtnsState(1);}]; var howmanytimes = all.length; function dothis(){if( i>=howmanytimes){clearInterval(repeat);i=0; return;} all[i](); i++;}} function powerOnDisplay(){ var repeat = setInterval(dothis,delay); var i=0;  
    var all=[()=>{allBtnsState(0);display(`<span id="aboutmsg">This is an unofficial & educational EVM demonstration</span><br><span id="aboutcreator">created by<br>Soumen Chakraborty</span>`);beep();}
    ,()=>{display(``);},()=>{display(`<br>No of candidates : ${BUNAMES.length}`);beep();}
    ,()=>{display(``);},()=>{display(`<br>Poll Start Time:<br>${pst}`);beep();}
    ,()=>{display(``);},()=>{display(pollIsClosed ?`<br>Poll End Time :<br>${pet}`:`<br>Poll End Time :`);beep();},()=>{display(``);},()=>{display(`<br>Total polled votes: ${storedVotes.length}`);beep();}
    ,()=>{display(``);},()=>{display(pollIsClosed ? closedMsg : onMsg);beep();allBtnsState(1);}];var howmanytimes = all.length; function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}} function checkTotal(){display(`<br><br>Total polled votes = ${storedVotes.length}`); allBtnsState(0); var repeat = setInterval(dothis,delay); var i=0; var all=[ ()=>{display(``);}
    ,()=>{display(pollIsClosed ? closedMsg : onMsg);allBtnsState(1);}]; var howmanytimes = all.length;
function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}}
function allBtnsState(bstate){i = btns.length; if(0==bstate){while(i--){btns[i].disabled=true;}}
    else if(1==bstate){while(i--){btns[i].disabled=false;}}} function beep(){shortBeepSound.play();}