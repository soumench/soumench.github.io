function checkList(p){ 
         e(`d${p}`).checked?chkmsgdisplay(e(`doc${p}Name`).innerHTML+`<br>`):chkmsgdisplay(``);
        function chkmsgdisplay(m){e(`doc${p}`).innerHTML=m;}console.log(p);
    }

    var howdocslost;
    function choose(howlostType){howdocslost=howlostType; update();}  
    update();  
    namex.focus();
    function fUpdate(){
        showLetter1.style.color=showLetter2.style.color=showLetter3.style.color="black";
        update();
    } 

    function update(){ 
    var myname = firstUpperCase(namex.value);
    var today = getCurrentDate(); 
    var day = lostdate.value; day==""?day=today:day=makeReverse(lostdate.value);
    var time = losttime.value; time==""?time="12:30 PM":time=losttime.value;    
    showLetter1.innerHTML =`
            To<br>
            The Officer-in-Charge,<br>
            ....................... Police Station<br>
            <br>

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Subject: <u>Loss of important documents</u> <br><br>

            Dear Sir,<br>
            &ensp;	This is for your kind perusal that I, ${myname}, a resident of ${address.value}, 
            lost the following documents near ${lostplace.value}, ${howdocslost}, on ${day}, at about ${time}. All the documents were kept well organized inside a self-addressed bag.`

    showLetter2.innerHTML=`<br>&emsp;Here is a list of the lost documents : <br>`;
    showLetter3.innerHTML=`				
            &ensp; I shall be highly obliged if you kindly do the needful to recover my lost documents as early as possible. <br>				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Thanking you,<br>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Yours faithfully,<br>
            Dated: ${today}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${myname}<br>`;
    }