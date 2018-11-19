/*Created by Soumen Chakraborty - 2018 - Strictly For Educational, Non-profit and Non-Commercial Purpose */
var newvalue; var oldvalue;
var transactionstartmsg=`<br><br><br>Transaction in progress.<br><br>Please wait....`; 
var transactionfinished=`<br><br><br>Transaction complete. <br><br><br> You may want to try again.`;
function nounactivity(){Noun.style.color="red";
const nouns=[`Soumen <br><br><br>Soumen is a teacher.`
             ,"Cat<br><br><br>The cat purrs."
             ,"Horse<br><br><br>The horse runs fast."
             ,"Anger<br><br><br>Anger is not a good thing."
             ,"dog<br><br><br>A barking dog seldom bites."
             ,"Honesty<br><br><br>Honesty is the best policy."
             ,"Adversity<br><br><br>Adversity offers a scope of introspection."
             ,"Kolkata<br><br><br>Kolkata is a very congested city."
             ,"Smoking<br><br><br>Don't smoke please. Smoking kills."
             ,"School<br><br><br>Do you love your school?"
]; wordOutput(nouns);}
function pronounactivity(){ Pronoun.style.color="red";
const pronouns=[`He <br><br><br>He is smart.`
             ,"You<br><br><br>You need a playground."
             ,"She<br><br><br>She likes biryani."
             ,"We<br><br><br>We like to help all."
             ,"I<br><br><br>am from India."
             ,"They<br><br><br>They played really well."
             ,"Those<br><br><br>Soumen devoted himself to music in those days."
             ,"It<br><br><br>It is so small!"
             ,"This<br><br><br>This is the toy I made."
             ,"That<br><br><br>That is our house."
            ,"These<br><br><br>Did you double-check everything?"                
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
             ,"Quickly<br><br><br>He finished his home-task quickly."
             ,"Loudly<br><br><br>My brother sings loudly in the shower."
             ,"Well<br><br><br>Even pet dog can respond well."
             ,"impatiently<br><br><br>We all wait impatiently for the mid-day meal."
            ,"Seriously<br><br><br>Please study seriously and attentively."
            ,"Incredibly<br><br><br>My cat is incredibly happy to see me when I come back home."
];wordOutput(adverbs);}
function adjectiveactivity(){Adjective.style.color="red";
const adjectives=[`Adamant<br><br><br>He is adamant about his point of view.`
             ,"Didactic<br><br><br>His work became didactic after his religious conversion."
             ,"Concomitant<br><br><br>His higher education brought a concomitant positive change in his behaviour."
             ,"Egregious<br><br><br>Some egregious spelling errors completely ruined his composition."
             ,"Insolent<br><br><br>Insolent behaviour will not be tolerated at all."
            ,"Obnoxious<br><br><br>His obnoxious words offended all."
            ,"Judicious<br><br><br>A judicious criticism is always welcome."
]; wordOutput(adjectives);}
function prepositionactivity(){Preposition.style.color="red";
const prepositions=[`badly<br><br><br>She did not run badly.`
             ,"On<br><br><br>My cat loves to sit on the chair."
             ,"Under<br><br><br>My brother hides under the table."
             ,"Over<br><br><br>Daddy drove over the Howrah bridge."
             ,"By<br><br><br>A group of people were sitting by the tree."
            ,"To<br><br><br>This house belongs to my uncle."
            ,"At<br><br><br>I found a nice chank at the beach that day."
            ,"From<br><br><br>I received my order from Amazon yesterday."
            ,"For<br><br><br>Mom cooked two eggs for breakfast."
            ,"Down<br><br><br>He went down the street with his bag."
            ,"Since<br><br><br>I loved the voice of Kishore Kumar since I was a kid."        
]; wordOutput(prepositions);}
function conjunctionactivity(){Conjunction.style.color="red";
const conjunctions=[`Although<br><br><br>Although he is poor he is still honest.`
             ,"And<br><br><br>I like both tea and coffee."
             ,"But<br><br><br>I gave the beggar a piece of bread but he refused it."
             ,"Because<br><br><br>He is sneaking around in the kitchen for cake because he loves it."
             ,"Either<br><br><br>We can either go to a movie or a park."
             ,"In case<br><br><br>Take the mobile with you in case you miss the train."
             ,"Or<br><br><br>Do you like biryani or dosa?"
             ,"Unless<br><br><br>You cannot sleep well unless you stope playing with your phone." 
             ,"Whether<br><br><br>Accept the truth whether you like it or not."
             ,"Even<br><br><br>Grandpa loves to walk in the morning even in winter."
             ,"Even if<br><br><br>Sometimes things do not work even if you try your best."
]; wordOutput(conjunctions);}
function interjectionactivity(){Interjection.style.color="red";
const interjections=[`Aah<br><br><br>Aah, that is so amazing!`
             ,"Alas<br><br><br>Alas! I am undone."
             ,"Hurrah<br><br><br>Hurrah! India has won the match!"
             ,"Oh dear<br><br><br>Oh dear! My cat scratched me in anger."
             ,"Yoo-hoo<br><br><br>Yoo-hoo! Are you there?"
             ,"Blistering bernacles and thundering typhoons<br><br><br>Blistering bernacles and thundering typhoons! Where is Professor?"            
]; wordOutput(interjections);}
function wordOutput(mylist){shuffle(mylist); var len = mylist.length;
    disableBtns(); var repeat = setInterval(dothis,displaydelay); var i=0;
    var all=[()=>{dontRepeat();},()=>{display(transactionfinished);enableBtns();}
    ];  var howmanytimes = all.length;
    function dothis(){if( i>=howmanytimes){ clearInterval(repeat);i=0; return;} all[i](); i++;}
    function dontRepeat(){do {newvalue=Math.floor(Math.random()*len);}while(newvalue===oldvalue);
        display(breaks+mylist[newvalue]); oldvalue=newvalue;}}