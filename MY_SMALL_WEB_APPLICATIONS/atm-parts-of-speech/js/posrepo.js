/*Created by Soumen Chakraborty - 2018 - Strictly For Educational, Non-profit and Non-Commercial Purpose */
var newvalue; var oldvalue;
var transactionstartmsg=`<br><br><br>Transaction in progress.<br><br>Please wait....`; 
var transactionfinished=`<br><br><br>Transaction complete. <br><br> Try again.`;
function nounactivity(){Noun.style.color="red";
const nouns=[`Soumen <br><br><br>Soumen is a teacher.`
             ,"cat<br><br><br>The cat purrs."
             ,"horse<br><br><br>The horse runs fast."
             ,"dog<br><br><br>A barking dog seldom bites."
]; wordOutput(nouns);}
function pronounactivity(){ Pronoun.style.color="red";
const pronouns=[`He <br><br><br>He is smart.`
             ,"You<br><br><br>You need a playground."
             ,"She<br><br><br>She likes biryani."
             ,"We<br><br><br>We like to help all."
             ,"I<br><br><br>am from India."
             ,"They<br><br><br>They played really well."
             ,"It<br><br><br>It is so small!"
             ,"This<br><br><br>This is the toy I made."
             ,"That<br><br><br>That is our house."
];wordOutput(pronouns);}
function verbactivity(){Verb.style.color="red";
const verbs=[`Play<br><br><br>Play is the highest form of research.`
             ,"Help<br><br><br>God helps those who help themselves."
             ,"Think<br><br><br>Think before you act."
             ,"Look<br><br><br>Look before you leap."
             ,"Wait<br><br><br>Time and tide wait for no man."
             ,"Make<br><br><br>An empty vessel makes much noise."
             ,"Sow<br><br><br>As you sow, so you will reap."
             ,"Dare<br><br><br>I didn't dare tell my parents."
             ,"Prepare<br><br><br>Hope for the best, prepare for the worst."
             ,"Learn<br><br><br>Learn to walk before you run."
             ,"Speak<br><br><br>Actions speak louder than words."
             ,"Do<br><br><br>When in Rome, do as the Romans do."
             ,"Begin<br><br><br>A journey of a thousand miles begins with a single step."
             ,"Lead<br><br><br>All roads lead to Rome."
             ,"Gather<br><br><br>A rolling stone gathers no moss."
             ,"Glitter<br><br><br>All that glitters is not gold."
             ,"Keep<br><br><br>Keep your mouth shut and your eyes open."
             ,"Save<br><br><br>A stitch in time saves nine."
             ,"Die<br><br><br>Cowards die many times before their death."
             ,"Cross<br><br><br>Cross the stream where it is shallowest."
             ,"Win<br><br><br>Slow and steady wins the race."
             ,"Cast<br><br><br>Don’t cast pearls before swine."
             ,"Judge<br><br><br>Don’t judge a book by its cover."
             ,"Put<br><br><br>Don’t put all your eggs in one basket."
             ,"Catch<br><br><br>Early bird catches the worm."
             ,"Fall<br><br><br>Fall seven times. Stand up eight."
]; wordOutput(verbs);}
function adverbactivity(){Adverb.style.color="red";
const adverbs=[`badly<br><br><br>She did not run badly.`
             ,"Quickly<br><br><br>He finished his hometask quickly."
             ,"Loudly<br><br><br>My brother sings loudly in the shower."
             ,"Well<br><br><br>Even pet dog can respond well."
             ,"impatiently<br><br><br>We all wait impatiently for the mid-day meal."
            ,"Seriously<br><br><br>Please study seriously and attentively."
            ,"Incredibly<br><br><br>My cat is incredibly happy to see me when I come back home."
];wordOutput(adverbs);}
function adjectiveactivity(){Adjective.style.color="red";
const adjectives=[`badly<br><br><br>She did not run badly.`
             ,"Quickly<br><br><br>He finished his hometask quickly."
             ,"Loudly<br><br><br>My brother sings loudly in the shower."
             ,"Well<br><br><br>Even pet dog can respond well."
             ,"impatiently<br><br><br>We all wait impatiently for the mid-day meal."
            ,"Seriously<br><br><br>Please study seriously and attentively."
            ,"Incredibly<br><br><br>My cat is incredibly happy to see me when I come back home."
]; wordOutput(adjectives);}
function prepositionactivity(){Preposition.style.color="red";
const prepositions=[`badly<br><br><br>She did not run badly.`
             ,"Quickly<br><br><br>He finished his hometask quickly."
             ,"Loudly<br><br><br>My brother sings loudly in the shower."
             ,"Well<br><br><br>Even pet dog can respond well."
             ,"impatiently<br><br><br>We all wait impatiently for the mid-day meal."
            ,"Seriously<br><br><br>Please study seriously and attentively."
            ,"Incredibly<br><br><br>My cat is incredibly happy to see me when I come back home."
]; wordOutput(prepositions);}
function conjunctionactivity(){Conjunction.style.color="red";
const conjunctions=[`badly<br><br><br>She did not run badly.`
             ,"Quickly<br><br><br>He finished his hometask quickly."
             ,"Loudly<br><br><br>My brother sings loudly in the shower."
             ,"Well<br><br><br>Even pet dog can respond well."
             ,"impatiently<br><br><br>We all wait impatiently for the mid-day meal."
            ,"Seriously<br><br><br>Please study seriously and attentively."
            ,"Incredibly<br><br><br>My cat is incredibly happy to see me when I come back home."             
]; wordOutput(conjunctions);}
function interjectionactivity(){Interjection.style.color="red";
const interjections=[`badly<br><br><br>She did not run badly.`
             ,"Quickly<br><br><br>He finished his hometask quickly."
             ,"Loudly<br><br><br>My brother sings loudly in the shower."
             ,"Well<br><br><br>Even pet dog can respond well."
             ,"impatiently<br><br><br>We all wait impatiently for the mid-day meal."
            ,"Seriously<br><br><br>Please study seriously and attentively."
            ,"Incredibly<br><br><br>My cat is incredibly happy to see me when I come back home."
]; wordOutput(interjections);}
function wordOutput(mylist){shuffle(mylist); var len = mylist.length;
    disableBtns(); var repeat = setInterval(dothis,displaydelay); var i=0;
    var all=[()=>{display(``);} ,()=>{dontRepeat();},()=>{display(transactionfinished);enableBtns();}
    ];  var howmanytimes = all.length;
    function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}
    function dontRepeat(){do {newvalue=Math.floor(Math.random()*len);}while(newvalue===oldvalue);
        display(breaks+mylist[newvalue]); oldvalue=newvalue;}}