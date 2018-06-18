/*
MAIN SCRIPT for the Interactive Verb Conjugation board v0.1
By Renoobed Radical
Created on 6th June 2011
Updated on 21 August 2016

This board contains two scripts.
1. The build script
2. The main script (This one)

STEP ONE:
Rez 17 prims and  link them all.
Use this script to build the ineractive board 

STEP TWO:
After that drop the main script into the root prim.

*/

integer Past_btn = 10;
integer Present_btn = 9;
integer Future_btn = 8;

integer simple = 14;
integer cont = 13;
integer perfect = 12;
integer perf_cont = 11;

integer fpsn = 2;
integer fppn = 5;

integer spsn = 3;
integer sppn = 6;

integer tpsn = 4;
integer tppn = 7;

vector grey = <0.5,0.5,0.5>;
vector pink = <1.0,0.5,0.5>;
vector green = < 0,1,0>;

button_glow(integer button)
{
    kid_col(Past_btn,grey,0);
    kid_col(Present_btn,grey,0);
    kid_col(Future_btn,grey,0);
   
    if(button == Past_btn)
    {
        kid_col(Past_btn,pink,.2);
    }
    else if(button == Present_btn)
    {
        kid_col(Present_btn,pink,.2);
    }
    else if (button == Future_btn)
    {
        kid_col(Future_btn,pink,.2);
    }
    else if (button == 0)
    {
        kid_col(Past_btn,grey,0);
        kid_col(Present_btn,grey,0);
        kid_col(Future_btn,grey,0);
    }
    llSetObjectDesc((string)button);
}

kid_text(integer linknum,string text)
{
    llSetLinkPrimitiveParamsFast (linknum,[PRIM_TEXT,text,<0,1,0>,1.0] );
}
   
kid_col(integer linknum, vector col,float glow )
{
    llSetLinkPrimitiveParamsFast (linknum,[PRIM_COLOR,ALL_SIDES,col,1.0,PRIM_GLOW,ALL_SIDES,glow] );
}

kid_col_all_sub_off()
{
    kid_col (simple,grey,0);
    kid_col (cont,grey,0);
    kid_col (perfect,grey,0);
    kid_col (perf_cont,grey,0);
}



list tense = [
"act","acted","x","acting",
"agree","agreed","x","agreeing",
"arrive","arrived","x","arriving",
"ask","asked","x","asking",
"accept","accepted","x","accepting",
"add","added","x","adding",
"allow","allowed","x","allowing",
"avoid","avoided","x","avoiding",
"beg","begged","x","begging",
"begin","began","begun","beginning",
"believe","believed","x","believing",
"build","built","x","building",
"buy","bought","x","buying",
"burn","burned","burnt","burning",
"bring","brought","x","bringing",
"care","cared","x","caring",
"call","called","x","calling",
"carry","carried","x","carrying",
"change","changed","x","changing",
"clean","cleaned","x","cleaning",
"clear","cleared","x","clearing",
"climb","climbed","x","climbing",
"cut","cut","x","cutting",
"come","came","come","coming",
"compare","compared","x","comparing",
"convert","converted","x","converting",
"control","controlled","x","controlling",
"cook","cooked","x","cooking",
"copy","copied","x","copying",
"cover","covered","x","covering",
"crash","crashed","x","crashing",
"create","created","x","creating",
"cry","cried","x","crying",
"count","counted","x","counting",
"dance","danced","x","dancing",
"do","did","done","doing",
"die","died","x","dying",
"deliver","delivered","x","delivering",
"deny","denied","x","denying",
"depend","depended","x","depending",
"demand","demanded","x","demanding",
"disappear","disappeared","x","disappearing",
"destroy","destroyed","x","destroying",
"discover","discovered","x","discovering",
"discuss","discussed","x","discussing",
"divide","divided","x","dividing",
"decide","decided","x","deciding",
"drive","drove","driven","driving",
"drink","drank","drunk","drinking",
"drag","dragged","x","dragging",
"draw","drew","drawn","drawing",
"dream","dreamt","dreamt","dreaming",
"drop","dropped","x","dropping",
"eat","ate","eaten","eating",
"enjoy","enjoyed","x","enjoying",
"explain","explained","x","explaining",
"express","expressed","x","expressing",
"expect","expected","x","expecting",
"examine","examined","x","examining",
"face","faced","x","facing",
"fall","fell","fallen","falling",
"find","found","x","finding",
"fit","fitted","x","fitting",
"fill","filled","x","filling",
"fold","folded","x","folding",
"feel","felt","x","feeling",
"fry","fried","x","frying",
"fly","flew","flown","flying",
"flash","flashed","x","flashing",
"flirt","flirted","x","flirting",
"force","forced","x","forcing",
"forget","forgot","forgotten","forgetting",
"fight","fought","x","fighting",
"fix","fixed","x","fixing",
"forgive","forgave","x","forgiving",
"follow","followed","x","following",
"grab","grabbed","x","grabbing",
"grow","grew","grown","growing",
"get","got","gotten","getting",
"go","went","gone","going",
"give","gave","given","giving",
"have","had","x","having",
"happen","happened","x","happening",
"hit","hit","x","hitting",
"hope","hoped","x","hoping",
"hold","held","x","holding",
"hurt","hurt","x","hurting",
"hear","heard","x","hearing",
"help","helped","x","helping",
"have","had","x","having",
"hate","hated","x","hating",
"invite","invited","x","inviting",
"inform","informed","x","informing",
"imagine","imagined","x","imagining",
"join","joined","x","joining",
"jump","jumped","x","jumping",
"keep","kept","x","keeping",
"kick","kicked","x","kicking",
"knock","knocked","x","knocking",
"know","knew","known","knowing",
"kill","killed","x","killing",
"keep","kept","x","keeping",
"laugh","laughed","x","laughing",
"learn","learned","learnt","learning",
"leave","left","x","leaving",
"lag","lagged","x","lagging",
"live","lived","x","living",
"like","liked","x","liking",
"log","logged","x","logging",
"love","loved","x","loving",
"lose","lost","x","losing",
"look","looked","x","looking",
"link","linked","x","linking",
"lie","lied","x","lying",
"lay","laid","x","laying",
"make","made","x","making",
"mark","marked","x","marking",
"mess","messed","x","messing",
"meet","met","x","meeting",
"move","moved","x","moving",
"miss","missed","x","missing",
"need","needed","x","needing",
"notice","noticed","x","noticing",
"own","owned","x","owning",
"pay","paid","x","paying",
"push","pushed","x","pushing",
"protect","protected","x","protecting",
"promise","promised","x","promising",
"praise","praised","x","praising",
"pick","picked","x","picking",
"point","pointed","x","pointing",
"prefer","preferred","x","preferring",
"present","presented","x","presenting",
"prove","proved","x","proving",
"pull","pulled","x","pulling",
"put","put","x","putting",
"plan","planned","x","planning",
"play","played","x","playing",
"prepare","prepared","x","preparing",
"press","pressed","x","pressing",
"read","read","x","reading",
"record","recorded","x","recording",
"report","reported","x","reporting",
"receive","received","x","receiving",
"roll","rolled","x","rolling",
"refer","referred","x","referring",
"refine","refined","x","refining",
"reflect","reflected","x","reflecting",
"release","released","x","releasing",
"remain","remained","x","remaining",
"regard","regarded","x","regarding",
"reply","replied","x","replying",
"replace","replaced","x","replacing",
"return","returned","x","returning",
"reveal","revealed","x","revealing",
"ride","rode","ridden","riding",
"run","ran","run","running",
"ring","rang","rung","ringing",
"save","saved","x","saving",
"see","saw","seen","seeing",
"sell","sold","x","selling",
"set","set","x","setting",
"serve","served","x","serving",
"sink","sank","sunk","sinking",
"sip","sipped","x","sipping",
"sing","sang","sung","singing",
"sit","sat","x","sitting",
"seek","sought","x","seeking",
"seem","seemed","x","seeming",
"speak","spoke","spoken","speaking",
"smile","smiled","x","smiling",
"show","showed","x","showing",
"sleep","slept","x","sleeping",
"stand","stood","x","standing",
"start","started","x","starting",
"stop","stopped","x","stopping",
"sort","sorted","x","sorting",
"shut","shut","x","shutting",
"state","stated","x","stating",
"suffer","suffered","x","suffering",
"suggest","suggested","x","suggesting",
"suppose","supposed","x","supposing",
"survive","survived","x","surviving",
"spend","spent","x","spending",
"succeed","succeeded","x","succeeding",
"support","supported","x","supporting",
"say","said","x","saying",
"share","shared","x","sharing",
"talk","talked","x","talking",
"tell","told","x","telling",
"take","took","taken","taking",
"tie","tied","x","tying",
"trap","trapped","x","trapping",
"see","saw","seen","seeing",
"teach","taught","x","teaching",
"thank","thanked","x","thanking",
"think","thought","x","thinking",
"treat","treated","x","treating",
"trap","trapped","x","trapping",
"touch","touched","x","touching",
"toil","toiled","x","toiling",
"travel","travelled","x","travelling",
"try","tried","x","trying",
"torture","tortured","x","torturing",
"want","wanted","x","wanting",
"wait","waited","x","waiting",
"warn","warned","x","warning",
"wash","washed","x","washing",
"watch","watched","x","watching",
"win", "won","x","winning",
"wear","wore","worn","wearing",
"wonder","wondered","x","wondering",
"work","worked","x","working",
"worry","worried","x","worrying",
"write","wrote","written","writing",
"use","used","x","using",
"walk","walked","x","walking",
"work","worked","x","working",
"vote","voted","x","voting",
"visit","visited","x","visiting"
//"is","was","",
//"are","were","",
];



string root_word;
string past ;
string past_participle ;
string present_participle;

string toucherName;


set_display (string tense)
{
    integer linkNum ;
    for(linkNum=2;linkNum<=7;++linkNum)
    {
        kid_text(linkNum,tense);
        kid_col(linkNum,grey,0);
    }
}

present_tense()
{
    kid_col_all_sub_off();
    string root_word_tp;
    string new_root = root_word;
       
    set_display (root_word);
   
    string char1 = llGetSubString(new_root,-1,-1);
    string char2 = llGetSubString(new_root,-2,-2);
   
    list vowels = ["a","e","i","o","u"];
               
    if( char1 =="z")
    {
        root_word_tp= root_word+"es";
    }
    else if( char1 == "h" && char2 == "s" || char1 == "s" && char2 == "s"  )
    {
        root_word_tp= root_word+"es";
    }
    else if( char1 == "h" && char2 == "c")
    {
        root_word_tp= root_word+"es";
    }
    else if( char1 == "x" || char1 == "o")
    {
        root_word_tp= root_word+"es";
    }
    else if(char1 == "y" && llListFindList(vowels,[char2])==-1)
    {
         root_word_tp = llDeleteSubString(new_root,-1,-1)+ "ies" ;
    }
    /*else if(char1 == "o")
    {
         root_word_tp = new_root + "es" ;
    }*/
    else if(root_word == "have")
    {
         root_word_tp = "has" ;
    }
    else root_word_tp = new_root + "s";
   
    kid_text(tpsn,root_word_tp);
    kid_col(tpsn,pink,.2);                       
    button_glow(Present_btn);           
   // kid_col(fpsn,grey,0);           
    kid_col (simple,green,.2);
}
   
future_tense ()
{
    kid_col_all_sub_off();
    set_display ( " will  "+ root_word);
    kid_text(fpsn," shall  "+ root_word);
    kid_text(5," shall  "+ root_word);
    button_glow(Future_btn);
    kid_col(fppn,pink,.2);
    kid_col(fpsn,pink,.2);
    kid_col (simple,green,.2);
}

past_tense()
{
    kid_col_all_sub_off();
    set_display ( past);                       
    button_glow(Past_btn);
   // kid_col(tpsn,<.5,.5,.5>,0);
   // kid_col(fpsn,<.5,.5,.5>,0);           
    kid_col (simple,green,.2);   
}

process(string s )
{
    s = llToLower(s);
   
    integer index = llListFindList(tense,[s] );
    if(index==-1 || index % 4)
    {
        llSay(0, s +" Not found.\nPlease Touch the New Verb Button and say another verb.");
        state Listen;
    }
                         
    root_word = s;
    //llSay(0,"Now displaying the verb \""+ s+"\"");
   
    past = llList2String(tense,index+1);   
         
    past_participle = llList2String(tense,index+2);
    if(past_participle == "x")
    {
        past_participle = past;
    }
    else
    {
        past_participle = llList2String(tense,index+2);
    }
   
    present_participle = llList2String(tense,index+3);
     
    if(1) { state next;}
}




default
{
    state_entry()
    {
        llSetColor(<1,1,1>,ALL_SIDES);
       
        button_glow(0);
        kid_col_all_sub_off();
       
//      llSetText( "Touch the Green Button and say the base form (root) of a Verb.\nOr\n the Blue button to choose a verb at random.",<1,1,1>,1.0);
       
//      llSay(0,"Free mem : "+(string)llGetFreeMemory() );//debug
        string s = llList2String(tense,4*(integer)llFrand(llGetListLength(tense)/4) );
        process (s);
    }
   
    on_rez(integer r) { llResetScript(); }

    touch_end(integer t)
    {
        //llSay(0,(string)llDetectedLinkNumber(0) ); return;//debug
        string button = llGetLinkName(llDetectedLinkNumber(0) );
        if(button == "random")
        {
            string s = llList2String(tense,4*(integer)llFrand(llGetListLength(tense)>>2) );
            llMessageLinked(LINK_ROOT,1,s,llGetKey() );
        }
        else if (button == "new_verb")
        {
            toucherName = llDetectedName(0);
            state Listen;
        }
       
        else if( button == "reset") { llResetScript(); }
    }
   
    link_message(integer sender_num, integer num, string msg, key id)
    {
        process( msg );
        state next;
    }
}

state Listen
{
    state_entry()
    {
        llListen(0,toucherName,"","");
        llSetText("Listening to "+ toucherName+".",<1,0,0>,1.0);
        llSay(0, toucherName + ", please say the base form ( root) of a  verb.");
        llSetTimerEvent(30.0);
        llSetColor(<.75,.5,.5>,ALL_SIDES);
       
    }
   
    listen (integer c, string n, key id, string m )
    {
        process( m ); state next;       
    }
   
    timer()
    {
        llSetTimerEvent(0.0);
        llSay(0,"/me Sorry, operation timed out");
        state default;
    }
}

state next
{
    state_entry()
    {
        llSetTimerEvent(0.0);
        llSetColor(<.5,.75,.5>,ALL_SIDES);
        kid_col (simple,green,.2);
        present_tense();
        llSetText( "Explore the buttons !",<1,1,1>,1.0);
    }
   
    touch_end(integer x)
    {
        kid_col_all_sub_off();
        toucherName = llDetectedName(0);
        string button = llGetLinkName(llDetectedLinkNumber(0) );
        integer desc = (integer)llGetObjectDesc();
                       
        if(button == "future") { future_tense (); return; }
       
        else if(button == "present"){ present_tense(); return;}
       
        else if(button == "past") { past_tense(); return; }
               
        else if(button == "reset") {llResetScript(); }
           
        else if(button == "new_verb")
        {
            state Listen;
        }
       
        else if(button == "random")
        {
            state default;
        }
       
        else if( button == "cont")
        {
            if(desc == Present_btn )
            {
                set_display (" are "+ present_participle );
                kid_text(fpsn," am "+ present_participle);
                kid_text(tpsn," is "+ present_participle);
                kid_col(fpsn,pink,.2);
                kid_col(tpsn,pink,.2);
            }
            else if(desc == Past_btn )
            {
                set_display (" were "+ present_participle );
                kid_text(tpsn," was "+ present_participle);
                kid_text(fpsn," was "+ present_participle);
                kid_col(fpsn,pink,.2);
                kid_col(tpsn,pink,.2);
               
            }
            else if(desc == Future_btn )
            {
                set_display (" will be "+ present_participle );
                kid_text(fpsn," shall be "+ present_participle);
                kid_text(fppn," shall be "+ present_participle);
                kid_col(fpsn,pink,.2);
                kid_col(fppn,pink,.2);
               
            }
            kid_col (cont,<0,1,0>,.2);
        }
           
        else if( button == "perfect")
        {
            if(desc == Present_btn )
            {
                set_display (" have "+ past_participle );               
                kid_text(tpsn," has "+ past_participle);               
                kid_col(tpsn,pink,.2);
            }
            else if(desc == Past_btn )
            {
                set_display (" had "+ past_participle );
            }
            else if(desc == Future_btn )
            {
                set_display (" will have "+ past_participle );
                kid_text(fpsn," shall have "+ past_participle);
                kid_text(fppn," shall have "+ past_participle);
                kid_col(fpsn,pink,.2);
                kid_col(fppn,pink,.2);
            }
            kid_col (perfect,<0,1,0>,.2);
        }
       
        else if( button == "perf_cont")
        {
            if( desc == Present_btn )
            {
                set_display (" have been "+ present_participle );
                kid_text(tpsn," has been "+ present_participle);
                kid_col(tpsn,pink,.2);
            }
            else if(desc == Past_btn )
            {
                set_display (" had been "+ present_participle );
            }
            else if(desc == Future_btn )
            {
                set_display (" will have been "+ present_participle );
                kid_text(fpsn," shall have been "+ present_participle);
                kid_text(fppn," shall have been "+ present_participle);
                kid_col(fpsn,pink,.2);
                kid_col(fppn,pink,.2);
            }
            kid_col (perf_cont,<0,1,0>,.2);
        }
       
        else if( button == "simple")
        {
            if(desc == Past_btn ) { past_tense(); }
            else if(desc == Present_btn ) { present_tense(); }
            else if( desc ==  Future_btn ) { future_tense(); }
        }   
    }
}