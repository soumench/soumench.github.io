/*Created by Soumen Chakraborty - 2018 - Strictly For Educational, Non-profit and Non-Commercial Purpose */
function cardanimseq(){if(pinverified)return;
    var aseq=[()=>{display("");cardAnim(0);},()=>{cardAnim(1);},()=>{cardAnim(2); }]; var s=aseq.length; 
    //var speed=1500;// origianl speed
    var speed=1000;//debug speed
    var myTime = setInterval(myTimer, speed);
    function myTimer(){if(s==0){clearInterval(myTime);}s--;cardAnim(s);}}
function cardAnim(p){// slideSound.play();
var inipos=500; var endpos=310; var speed=10;
if(0==p){var myTime = setInterval(myTimer, speed); var m=endpos;
    function myTimer(){if(m>=inipos){clearInterval(myTime);} 
        m+=2; card.style.top=m+"px";} card.style.pointerEvents="none";}
else if(1==p){display("");
    var time = setTimeout(myTime,1500);
              gpin.innerHTML=`Use ${generatedpin} as PIN.`;
    function myTime(){display(atm.pinpromptmsg);} 
}else if(2==p){var myTime = setInterval(myTimer, speed); var m=inipos; 
    function myTimer(){if(m<=endpos){clearInterval(myTime);} 
        m-=1; card.style.top=m+"px";}}}