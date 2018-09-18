 

function zeroto(range) {return Math.floor(range*Math.random())}
function e(id){ return document.getElementById(id);  } 
function gray(ele){ 
    ele.disabled=true;    
}

function ungray(ele){ 
    ele.disabled=false;
}

function grayanswerbuttons(){
        var z; for(z=0;z<BUTTONS;++z){           
        gray(buttons[z]);
    }
    gray(idk);
}

function whiteanswerbuttons(){
    var z; for(z=0;z<BUTTONS;++z)   buttons[z].value="";            
    gray(idk);
    idk.value="";
}
function ungrayanswerbuttons(){
    var z; for(z=0;z<BUTTONS;++z)   ungray(buttons[z]);            
    ungray(idk);
}



function shuffleSynch(){
        var count = N, randomnumber, temp;
        while( count > 1 ){
            randomnumber = Math.floor ( Math.random() * count-- ); 
            if(randomnumber != count){
                swap(englishWords,count,randomnumber);
                swap(bengaliWords,count,randomnumber);
            }
        }
    }
    
    function swap(array, a, b){
       var temp=array[a];
       array[a]=array[b];
       array[b]=temp;
    }

    
    var f;
    var flashcontrol;
    function flashenglish(){
        --f;
        showenglish.style.backgroundColor = (f%2)?"purple":"white" ;
        showenglish.style.color = (f%2)?"white":"purple" ;
        if(f<1){
            clearTimeout(flashcontrol);
            showenglish.style.backgroundColor = "white"; 
            showenglish.style.color = "black"; 
        }
    }
    
    function choosewrongs(N,i){
        var k=[], j, u;
        for (j=0;j<WRONGS;++j){            
            do u=zeroto( N );
            while ( i==u ||  k.includes(u) );
            k.push(u);
        }
        return k;
    }

function greenon(){showenglish.style.border="3px solid lime";}
function greenoff(){showenglish.style.border="3px solid white";}

function asknextquestion(){
        isBlink=false; 
        greenoff();
        ++i;
        if( i>=N ){ 
            dostopquiz();
            showenglish.innerHTML=`
                ${Math.round(rightanswersc-wronganswersc/WRONGS)} points out of ${totalanswers}`;
        }else{
           askquestion();
        }
    }

function user_answer(ans){
        isBlink=true;
        grayanswerbuttons();                
        showenglish.innerHTML=englishWords[i] + " &rarr; " +bengaliWords[i];
                                
        if("good"==ans){
            rightanswersc++;
            success.play();
        }
        else if("bad"==ans){ 
            wronganswersc++;
            failure.play();
        }
        else{ 
            idkanswersc++;
            noIdea.play();
        }
        ++totalanswers;
                
        nextq=setTimeout(asknextquestion, "good"==ans? delayafterrightanswer:delayafterwronganswer);
        greenon();
    }


function usclick(ele)
    {
        stopcountdown();  
        ebar.style.visibility="hidden"; 
        var userchose=ele.attr;
        idk_chosen = "idk"==userchose ;
        if(idk_chosen)
        {            
            good_chosen = false;
        }else{                
            wrongbutton = ele;
            good_chosen = (userchose == rightbutton);
            buttons[rightbutton].style.border="3px solid green";
            if( ! good_chosen )buttons[userchose].style.border="3px solid red";   
        }
        user_answer(idk_chosen?"idk":good_chosen? "good":"bad");
    }


function stopcountdown(){
       clearTimeout(countdown_timer);       
    }

function countdown(){
       ebar.value=150-cd;          
        cd -= 2;
 
        if(cd<1){
            stopcountdown();
            user_answer("timeout"); 
            noIdea.play(); 
            ebar.style.visibility="hidden";
            timeoutCounter++;  
            if(timeoutCounter>=3){
                dostopquiz();
                showenglish.style.border= "3px solid white";
     //           showenglish.innerHTML="You timeouted three times, so you don't get a score.";
                showenglish.innerHTML="তিন বারের বেশী টাইম আউট হয়ে যাবার জন্য কোনও স্কোর দেখানো হল না ।"
                setTimeout(cleanup, 10000);  
                return;
            }
        }                    
    } 


function askquestion(){            
        var z; 
        cleanup();            
        showenglish.innerHTML=englishWords[i];            
        f=7; flashcontrol=setInterval(flashenglish, 100);
        ungrayanswerbuttons();
        rightbutton=zeroto(BUTTONS);
        var answers= choosewrongs(N,i);            
        answers.splice(rightbutton,0,i);
        for(z=0;z<BUTTONS;++z)buttons[z].value=bengaliWords[answers[z]];        
        idk.value="আমি জানি না";
        cd=Math.round(waitclick_timeout/100);
        
        countdown_timer=setInterval(countdown, 200);
        ebar.style.visibility="visible";
    }        
    

function cleanup(){        
        showenglish.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";    
        buttons[rightbutton].style.border="3px solid white";
        if( ! idk_chosen && ! good_chosen ) wrongbutton.style.border = "3px solid white";
        stopcountdown();
        grayanswerbuttons();
    }

function dostopquiz(){
        quiz.style.visibility="visible"; 
        stopquiz.style.visibility="hidden";
        stopcountdown();
        clearTimeout(nextq);
        gray(stopquiz);
        ungray(quiz);
        
        cleanup();
        whiteanswerbuttons();
        showenglish.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; 
    
        ebar.style.visibility="hidden";
        isBlink=false;
    }


function x(){if(isBlink){clearTimeout(nextq);asknextquestion();}}
    
    function startquiz(){ 
        quiz.style.visibility="hidden";  
        stopquiz.style.visibility="visible";
        timeoutCounter=0;
        ebar.value="100"; success.play();
        shuffleSynch();    
         
        i=-1; 
        
        ungray(stopquiz);
        gray(quiz); 
        totalanswers=rightanswersc=    wronganswersc=    idkanswersc=0;
        
        stopcountdown();
        asknextquestion();
    }


