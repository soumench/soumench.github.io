var N;
var ebar;
var showenglish;
var buttons ;
var idk;
var quiz;
var stopquiz;

let isBlink = false;
let timeoutCounter=0; 
var b0;
var b1;
var b2;
var b3;


const waitclick_timeout=15000;
const delayafterrightanswer = 1500;
const delayafterwronganswer=5000;

var i=0;
var rightbutton = 0;
var good_chosen=false;
var idk_chosen=true;
var wrongbutton;
var cd;
var countdown_timer;
var nextq;

var rightanswersc;
var wronganswersc;
var idkanswersc;
var totalanswers;

const WRONGS=3;
var BUTTONS=WRONGS+1;


const success = new Audio("audio/success.oga");
const failure = new Audio("audio/fail.oga");
const noIdea = new Audio("audio/idk.oga");






function init() {   b0=e("b0");  b1=e("b1"); b2=e("b2"); b3=e("b3"); 
                    (ebar= e("bar")).style.visibility="hidden";
                    showenglish=e("showenglish");
                    idk=e("idk");
                    quiz=e("quiz");
                    stopquiz=e("stopquiz");
                 
                    stopquiz.style.visibility="hidden";
                    gray(stopquiz);
                 
                    buttons=[b0,b1,b2,b3];
                 
                  idk.attr="idk";
                  grayanswerbuttons();
                
                  var z; for(z=0;z<BUTTONS;++z)buttons[z].attr=z;        
            
                  N=englishWords.length; 
                  cleanup();
                
                }