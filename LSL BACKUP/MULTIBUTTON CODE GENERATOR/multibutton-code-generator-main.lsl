
/*
Automative Button Code Generator v 1.3  ( a bit cleaned up and optimized version)
By Renoobed Radical

Rez 6 prims and link. Then Use the script in the root prim.
This script will build the offset generator tool automatically.
Follow the simple steps as displayed in the hover text and generate your button code effortlessly.

As usual, kindly no commercial usage, no selling blah blah blah... :)
Leave the script open and make it better.
And kindly post your improvement on Osgrid forum.
Find the script and read the documentation here:
http://forums.osgrid.org/viewtopic.php?f=5&t=5544&start=66

known bug so far : If you re-size the tool, it will break. :( Need a fix to it very soon. Just press the reset button to make it work again.


*/


setup()
{
      ppf( -1,[ PRIM_TEXTURE,-1, "fb4691da-dc34-475e-ac01-2e0f7ea19735", <0.7, 0.7, 0.0>, <0.0, 0.0, 0.0>, 0.0, PRIM_TEXT,"",<1,1,1>,1, PRIM_COLOR,-1,<1,1,1>,1]); // OSGRID UUID
      ppf( 1,[
PRIM_TYPE,0,0,<0.000000, 1.000000, 0.000000>,0.000000,<0.000000, 0.000000, 0.000000>,<1.000000, 1.000000, 0.000000>,<0.000000, 0.000000, 0.000000>, PRIM_FULLBRIGHT,4,1, PRIM_TEXTURE,4, "f8091b8d-d090-498b-8e33-8d74c6ecb224", <1.0, 1.0, 0.0>, <0.0, 0.0, 0.0>, 0.0
, PRIM_NAME, "Button Code Generator v 1.3 by Renoobed Radical",
PRIM_SIZE,<0.027771, 1.000000, 1.000000> ]); // the texture here is for Osgrid only. Re-upload or or use your custom texture.
    ppf( 2,[ // code button
PRIM_TYPE,0,0,<0.000000, 1.000000, 0.000000>,0.000000,<0.000000, 0.000000, 0.000000>,<1.000000, 1.000000, 0.000000>,<0.000000, 0.000000, 0.000000>,  PRIM_NAME, "code" ,
PRIM_POSITION,<-0.036102, -0.746948, -0.393099>,
PRIM_ROT_LOCAL,<0.000000, 0.000000, 0.000000, 1.000000>,
PRIM_SIZE,<0.050000, 0.305069, 0.199741> ]);

   ppf( 3,[ //green pin
PRIM_TYPE,1,0,<0.000000, 1.000000, 0.000000>,0.000000,<0.000000, 0.000000, 0.000000>,<0.000000, 0.000000, 0.000000>,<0.000000, 0.000000, 0.000000>, PRIM_COLOR, -1, <0,1,0>,1, PRIM_NAME, "greenpin" ,
PRIM_POSITION,<-0.179993, -0.438736, 0.455067>,
PRIM_ROT_LOCAL,<0.000000, 0.707107, 0.000000, 0.707107>,
PRIM_SIZE,<0.050000, 0.050000, 0.341114> ]);
   ppf( 4,[ // red pin
PRIM_TYPE,1,0,<0.000000, 1.000000, 0.000000>,0.000000,<0.000000, 0.000000, 0.000000>,<0.000000, 0.000000, 0.000000>,<0.000000, 0.000000, 0.000000>, PRIM_COLOR, -1, <1,0,0>,1,  PRIM_NAME, "redpin" ,
PRIM_POSITION,<-0.179993, 0.087814, 0.209265>,
PRIM_ROT_LOCAL,<0.000000, 0.707107, 0.000000, 0.707107>,
PRIM_SIZE,<0.050000, 0.050000, 0.341114> ]);

  ppf( 5,[ // button_guide
PRIM_TYPE,0,0,<0.000000, 1.000000, 0.000000>,0.950000,<0.000000, 0.000000, 0.000000>,<1.000000, 1.000000, 0.000000>,<0.000000, 0.000000, 0.000000>, PRIM_NAME, "button_guide", PRIM_POS_LOCAL,<-0.036102, -0.746948, -0.393099>,  PRIM_ROT_LOCAL,<0.500000, 0.500000, 0.500000, 0.500000>,  PRIM_SIZE,<0.330715, 0.222961, 0.050000>, PRIM_GLOW,-1, 0.12, PRIM_FULLBRIGHT,-1,1 ]);
  ppf( 6,[ // reset button
PRIM_TYPE,0,0,<0.000000, 1.000000, 0.000000>,0.000000,<0.000000, 0.000000, 0.000000>,<1.000000, 1.000000, 0.000000>,<0.000000, 0.000000, 0.000000>,
PRIM_POSITION,<-0.036102, 0.729858, -0.393099>, PRIM_NAME, "reset",
PRIM_ROT_LOCAL,<0.000000, 0.000000, 0.000000, 1.000000>,
PRIM_SIZE,<0.050000, 0.305069, 0.199741> ]);

}

integer findbutton ( string button){
    integer i;  list l;       
    for( i = 1; i <= llGetNumberOfPrims(); ++i){
       l += [ llGetLinkName( i )];
    }
    return llListFindList(l, [button]) + 1 ;
}

ppf( integer l, list temp)
{
    llSetLinkPrimitiveParamsFast( l, temp);
}

say( string m)
{
    llInstantMessage(llDetectedKey(0), m) ;
}

btn( integer kid, vector col, float gl, string txt)
{
    ppf(kid , [PRIM_COLOR, -1, col ,1, PRIM_GLOW, -1, gl, PRIM_TEXT, txt, col, 1]);
}

string tf( string f)
{
    return ( llGetSubString ( f, 0, 3 ));
}

integer link;

vector size; vector mod1; vector mod2;

string record;
vector redpos;
vector greenpos;
integer glow;
integer glowprim;

default
{
    state_entry()
    {
        setup();
       
        btn( 1, <1,1,1>, 0,  "STEP ONE\n Touch the RED PIN \nand set position\n \n STEP TWO\n Touch the GREEN PIN\n and set position \n \n STEP THREE\nPRESS the CODE button\n to generate the code." );
        btn(findbutton("code") , <1,1,1>, 0.1 ," Get Code");
        btn(findbutton("reset") , <1,1,0>, 0.1 ," Reset");
        btn(findbutton("redpin") , <1,0,0>, 0.1 ," Record red pin");
        btn(findbutton("greenpin") , <0,1,0>, 0.1 ," Record green pin");
        state active;
    }
}
state active
{
    state_entry()
    {
        llSetTimerEvent(0);
    }
   
    touch_start( integer t)
    {
        link = llDetectedLinkNumber(0);
               
        size = llGetScale();
       
        if( link == findbutton("redpin"))
        {
            btn(findbutton("redpin") , <1,0,0>, 0.0 ," Touch the lower left part of your button");
            record = "red"; glowprim = findbutton("redpin");
            state record_pinpos;
        }
        else if( link == findbutton("greenpin"))
        {
            btn(findbutton("greenpin") , <0,1,0>, 0.0 ," Touch the upper right part of your button");
            record = "green"; glowprim = findbutton("greenpin");
            state record_pinpos; 
        }
       
        else if ( link == findbutton("reset") )  { llResetScript();}
       
        else if ( link == findbutton("code") )
        {
            if( redpos.x > greenpos.x || redpos.y > greenpos.y)
            {
                say("Improper placement. Set Red marker at the bottom left part first");
                return;
            }
           
            else if( redpos.x == 0 || greenpos.x == 0)
            {
                say(" Set the markers first. then press the code button");
                return;
            }
           
           
            vector setpos = <0,(mod1.y + mod2.y)/2, (mod1.z + mod2.z)/2>;
            ppf( findbutton("button_guide"), [ PRIM_POS_LOCAL, setpos, PRIM_SIZE, <greenpos.x-redpos.x , greenpos.y-redpos.y, 0.05   >  ]);
           
            say("Use this code inside the touch event
            // Button code starts
           
            vector switch = llDetectedTouchST(0); // use this only once in your code
           
           
            if( switch.y > "+ (string) redpos.y +" &&  switch.y < "+ (string) greenpos.y +" )
            {
                if(  switch.x > "+ (string)redpos.x +" && switch.x <"+ (string) greenpos.x +" )
                {
                    llSay(0, \" btn  clicked\"); // do whatever you like
                }
            }
            // Button code ends
            ");
        }
       
            vector switch = llDetectedTouchUV(0);
            if( switch.y > redpos.y && switch.y < greenpos.y )
            {
                if(  switch.x > redpos.x  && switch.x < greenpos.x )
                {
                    say(" button clicked by " + llKey2Name(llDetectedKey(0)) );
                }
            }
    }
}

state record_pinpos
{   
    state_entry()
    {
        llSetTimerEvent(0.5);
    }
   
    touch_start( integer t)
    {
        link = llDetectedLinkNumber(0);
        if ( link == 1)
        {
            vector pos = llDetectedTouchUV(0);
            if( record == "red")
            {
                redpos = pos;
                mod1 = < -0.180, -redpos.x + size.y/2, redpos.y-size.z/2  > ;
                ppf( findbutton("redpin") , [PRIM_POS_LOCAL, mod1 ]);
                btn(findbutton("redpin") , <1,0,0>, 0.5 , "Recorded\n x = "+ tf((string)redpos.x) + "\n y = "+ tf((string)redpos.y));
            }
           
            else if( record == "green")
            {
                greenpos = pos;
                mod2 = < -0.180, -greenpos.x + size.y/2, greenpos.y-size.z/2  > ;
                ppf( findbutton("greenpin") , [PRIM_POS_LOCAL, mod2 ]);
                btn(findbutton("greenpin") , <0,1,0>, 0.5 , "Recorded\n x = "+ tf((string)greenpos.x) + "\n y = "+ tf((string)greenpos.y));
            }
            state active;
        }
    }
   
    timer()
    {
        float gl;
        if(glow = glow^1) { gl = 0.8;}
        else{ gl = 0;}
        ppf(glowprim, [ PRIM_GLOW, -1, gl]);
    }
}