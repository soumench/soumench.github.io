function pinInput(p){if(pinverified)return;beep.play(); pin+=`${p.value}`; 
 pinmask+=`<span style="color:red;font-size:44px">*</span>`;
 display(atm.pinpromptmsg+breaks+pinmask);
if(pin.length===4 && pin===generatedpin){display(atm.pinverifiedmsg);
        pinverified=true; atm.resetPin(); gpin.innerHTML="";
}else if(pin.length===4 && pin!=generatedpin && pinverified==false){
        display(atm.pinmismatchmsg); atm.resetPin();}}   