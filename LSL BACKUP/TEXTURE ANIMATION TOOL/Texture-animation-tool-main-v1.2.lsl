//TEXTURE ANIMATION TOOL V 1.2 by Renoobed Radical \\
// This is only for educational purpose. Kindly no commercial usage.\\
// REZ 17 PRIMS and LINK then drop this script.

// USER CONFIGURATION START \\
string tiled_texture = "e2ad243f-4485-4ba8-92a3-3acd88c8b3d8"; // OSGRID UUID
integer x = 8; // number of x tiles of your texture (horizontal)→ →
integer y = 2; // number of y tiles of your texture (vertical) ↓ ↓

float userInputTime = 5;

integer communication_channel = 100;

string body_texture = "205cb9d2-143d-43a8-bdf7-aa93e48db385";// OSGRID UUID
string front_plate = "7b8aa5e2-6934-4513-b2a8-53fd91242c7c"; // OSGRID UUID
string help_texture = "a10eedd2-35e1-4fa2-9bae-1d0425258032"; // OSGRID UUID
// USER CONFIGURATION END

float start = 0;
float length;
float rate = 8;

integer SMOOTHS ;
integer LOOPS ;
integer PINGPONG ;
integer ROTATION ;
integer SCALES ;
integer REV;
string help = "To get the latest update of this script and documentation, please visit \n http://forums.osgrid.org/viewtopic.php?f=5&t=5544&start=60";
setup()
{
    llSetStatus(STATUS_PHANTOM,1); llSetObjectName("TEXTURE ANIMATION TOOL");
    ppf(-1,[ PRIM_TEXTURE, ALL_SIDES, body_texture, <1.0, 1.0, 0.0>, <0.0, 0.0, 0.0>, 0.0 ]);
    ppf( 1,[ // display prim on face 0
PRIM_TYPE,0,0,<0, 1, 0>,0,<0, 0, 0>,<0.9, 0.9, 0>,<0, 0, 0>, PRIM_FULLBRIGHT,0,1 ,PRIM_COLOR,-1,<0.5,0.5,0.5>,1,PRIM_COLOR,0,<1,1,1>,1, PRIM_SIZE,<2, 2, 0.091789> ]);
    ppf( 2,[ // body frame, front face = 4
PRIM_TYPE,0,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>,PRIM_COLOR,2,<0,0,0>,1,PRIM_COLOR,4,<1,1,1>,1, PRIM_POSITION,<0, -0.22450, -0.08070>, PRIM_ROT_LOCAL,<-0.5, 0.5, 0.5, 0.5>,PRIM_TEXTURE, ALL_SIDES, front_plate, <1.0, 1.0, 0.0>, <0.0, 0.0, 0.0>, 0.0 ,
PRIM_SIZE,<0.05, 3.5, 4.169472> ]);
    ppf( 3,[// SMOOTH SWITCH
PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<0.4, 0.4, 0>,<0, 0, 0>, PRIM_SLICE,<0,0.5,0>,
PRIM_POSITION,<-1.4713, -1.6232, -0.0792>, PRIM_ROT_LOCAL,<0.6533, -0.65327, 0.2706, 0.27059>,
PRIM_SIZE,<0.075, 0.075, 0.50> ]);
    ppf( 4,[//LOOP SWITCH
PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<0.4, 0.4, 0>,<0, 0, 0>,PRIM_SLICE,<0,0.5,0>,
PRIM_POSITION,<-0.8828, -1.6232, -0.0792>, PRIM_ROT_LOCAL,<-0.65326, 0.6533, 0.2706, 0.2706>,
PRIM_SIZE,<0.075000, 0.075000, 0.50> ]);
    ppf( 5,[// PINGPONG SWITCH
PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<0.4, 0.4, 0>,<0, 0, 0>,
PRIM_POSITION,<-0.26489, -1.6232, -0.0792>,PRIM_SLICE,<0,0.5,0>,
PRIM_ROT_LOCAL,<-0.65326, 0.6533, 0.2706, 0.2706>, PRIM_SIZE,<0.075, 0.075, 0.50> ]);
    ppf( 6,[ //ROTATION SWITCH
PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<0.4, 0.4, 0>,<0, 0, 0>,
PRIM_POSITION,<0.381, -1.6232, -0.0792>,PRIM_SLICE,<0,0.5,0>,
PRIM_ROT_LOCAL,<0.6533, -0.65327, 0.2706, 0.27059>,
PRIM_SIZE,<0.075, 0.075, 0.50> ]);
    ppf( 7,[//SCALE SWITCH
PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<0.4, 0.4, 0>,<0, 0, 0>,
PRIM_POSITION,<0.97459, -1.6232, -0.0792>,PRIM_SLICE,<0,0.5,0>,
PRIM_ROT_LOCAL,<0.6533, -0.65327, 0.2706, 0.27059>, PRIM_SIZE,<0.075, 0.075, 0.50> ]);
    ppf( 8,[ //REVERSE SWITCH
PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<0.4, 0.4, 0>,<0, 0, 0>,
PRIM_POSITION,<1.5062, -1.6232, -0.0792>,PRIM_SLICE,<0,0.5,0>,
PRIM_ROT_LOCAL,<-0.65326, 0.6533, 0.2706, 0.2706>, PRIM_SIZE,<0.075, 0.075, 0.50> ]);
    ppf( 9,[ // TILE X
PRIM_TYPE,5,0,<0, 1, 0>,0,<0, 0, 0>,<1, 0.50, 0>,<0, 0, 0>,<0.49499, 0.735, 0>,<0, 0, 0>,1,0,0,PRIM_COLOR,3,<0,1,0>,1,PRIM_COLOR,2,<1,0,0>,1, PRIM_POSITION,<-1.47086, 1.36595, -0.0349>,
PRIM_ROT_LOCAL,<0.70708, 0.70714, 0.00001, 0>, PRIM_SIZE,<0.7, 0.7, 0.01> ]);
    ppf( 10,[ // TILE Y
PRIM_TYPE,5,0,<0, 1, 0>,0,<0, 0, 0>,<1, 0.50, 0>,<0, 0, 0>,<0.49499, 0.735, 0>,<0, 0, 0>,1,0,0,PRIM_COLOR,3,<0,1,0>,1,PRIM_COLOR,2,<1,0,0>,1, PRIM_POSITION,<-1.0665, 1.3631, -0.0396>,
PRIM_ROT_LOCAL,<-0.70711, -0.70711, 0, 0>, PRIM_SIZE,<0.7, 0.7, 0.01> ]);
    ppf( 11,[ // START FRAME
PRIM_TYPE,5,0,<0, 1, 0>,0,<0, 0, 0>,<1, 0.50, 0>,<0, 0, 0>,<0.49499, 0.735, 0>,<0, 0, 0>,1,0,0,PRIM_COLOR,3,<0,1,0>,1,PRIM_COLOR,2,<1,0,0>,1, PRIM_POSITION,<-0.06931, 1.42066, -0.04803>,
PRIM_ROT_LOCAL,<0.70711, 0.70711, 0, 0>, PRIM_SIZE,<0.7, 0.7, 0.01> ]);
    ppf( 12,[ // END FRAME / LENGTH
PRIM_TYPE,5,0,<0, 1, 0>,0,<0, 0, 0>,<1, 0.50, 0>,<0, 0, 0>,<0.49499, 0.735, 0>,<0, 0, 0>,1,0,0,PRIM_COLOR,3,<0,1,0>,1,PRIM_COLOR,2,<1,0,0>,1, PRIM_POSITION,<0.6662, 1.42066, -0.04803>,
PRIM_ROT_LOCAL,<0.70711, 0.70711, 0, 0>, PRIM_SIZE,<0.7, 0.7, 0.01> ]);
    ppf( 13,[ // FRAME RATE
PRIM_TYPE,5,0,<0, 1, 0>,0,<0, 0, 0>,<1, 0.50, 0>,<0, 0, 0>,<0.494990, 0.735000, 0>,<0, 0, 0>,1,0,0,PRIM_COLOR,3,<0,1,0>,1,PRIM_COLOR,2,<1,0,0>,1, PRIM_POSITION,<1.40450, 1.42066, -0.04803>,
PRIM_ROT_LOCAL,<0.70711, 0.70711, 0, 0>, PRIM_SIZE,<0.7, 0.7, 0.01> ]);
    ppf( 14,[ // AUTO CALCULATE
PRIM_TYPE,0,0,<0, 1, 0>,0,<0, 0, 0>,<0, 0, 0>,<0, 0, 0>, PRIM_POSITION,<1.44650, 0.58510, -0.03831>,
PRIM_ROT_LOCAL,<0, 0, -1, 0>, PRIM_SIZE,<0.3, 0.3, 0.031163> ]);
    ppf( 15,[ // GENERATE CODE
PRIM_TYPE,5,0,<0, 1, 0>,0,<0, 0, 0>,<1, 0.50, 0>,<0, 0, 0>,<0.06, 0.94, 0>,<0, 0, 0>,1,0,0,PRIM_COLOR,3,<.5,1,1>,1,PRIM_COLOR,4,<1,0,0>,1, PRIM_POSITION,<1.4465, -0.4111, -0.0555>,
PRIM_ROT_LOCAL,<0.70711, 0, 0.70711, 0>, PRIM_SIZE,<0.053214, 0.3, 0.3> ]);
    ppf( 16,[ // RESET
PRIM_TYPE,0,0,<0, 1, 0>,0,<0, 0, 0>,<0, 0, 0>,<0, 0, 0>, PRIM_POSITION,<-1.37808, -0.4111, -0.03305>,PRIM_COLOR,-1,<1,1,0.3>,1, PRIM_ROT_LOCAL,<0, 0, 1, 0>, PRIM_SIZE,<0.3, 0.3, 0.031163> ]);
    ppf( 17,[ // POWER BUTTON
PRIM_TYPE,0,0,<0, 1, 0>,0,<0, 0, 0>,<0, 0, 0>,<0, 0, 0>,PRIM_COLOR,-1,<1,0,0>,1,
PRIM_POSITION,<-1.399, 0.6111, -0.03559>, PRIM_ROT_LOCAL,<0, 0, -1, 0>, PRIM_SIZE,<0.3, 0.3, 0.031163> ]);
}

ppf( integer kid, list temp)
{
    llSetLinkPrimitiveParamsFast( kid, temp);
}

button_sound()
{
    llTriggerSound("134d85a9-3cfc-456e-988d-d6ce2812da63",1.0);
}

text( string str)
{
    ppf( button, [PRIM_TEXT, str, <1,1,1>,1]);
}

rotation rot_off = <0.65330, -0.65327, 0.27060, 0.27059>;
rotation rot_on  = <-0.65326, 0.6533, 0.2706, 0.27060>;

ini_button_pos()
{
    integer i = 3;
    while (  i <= 8 )
    {
        list lt1 = ["SMOOTH\nOFF","LOOP\nOFF", "PINGPONG\nOFF", "ROTATION\nOFF","SCALE\nOFF","REVERSE\nOFF"];
        string hover = llList2String( lt1, i-3);
        ppf(i,[PRIM_ROT_LOCAL,rot_off, PRIM_GLOW,-1,0, PRIM_TEXT, hover, <0.7,0.7,0.7>,1]);
        ++i;
    }
    i = 9;
    list lt2 = ["TILE X", "TILE Y", "START FRAME", "END FRAME", "FRAME RATE"];
    list lt3 = [x, y, start, length, rate];
    while( i <=13)
    {
        string hover2 = llList2String( lt2, i-9);
        string hover3 = (string)llList2Integer( lt3, i-9);
        ppf(i,[PRIM_TEXT, hover2+"\n "+ hover3, <1,1,1>,1]);
        ++i;
    }
    ppf(14,[PRIM_TEXT,"AUTO\nCALCULATE\n★★★★★★★", <1,0.7,0>,1]);
    ppf(15,[PRIM_TEXT,"〖GENERATE〗\n〖  CODE  〗", <1,0.7,0>,1]);
    ppf(16,[PRIM_TEXT,"RESET\n⊂ ⊃", <1,0.5,1>,1]);
    ppf(17,[PRIM_TEXT,"STOP\n■□", <1,0.75,0>,1]);
}

integer toggle;
integer button;
integer mode;

integer switch;

mode_button_action( integer value, string s1, string s2)
{
    rotation rot; float glow; string tex; vector col;
    integer desc = !(integer)llList2String(llGetLinkPrimitiveParams(button,[PRIM_DESC]),0);
    if( desc)
    {
       rot = rot_on;  glow = 0.2;  mode =  value; tex = s1; col = <1,1,0>;
    }
    else
    {
       rot = rot_off; glow = 0;  mode = 0; tex = s2; col = <0.7,0.7,0.7>;
    }
    ppf( button, [PRIM_DESC,(string)desc, PRIM_ROT_LOCAL, rot, PRIM_TEXT, tex, col,1, PRIM_GLOW,-1,glow]);
    button_sound();
}


animation()
{
    llSetTextureAnim(ANIM_ON | SMOOTHS | LOOPS|PINGPONG|ROTATION|SCALES|REV,
        0 // face
        ,x,y // number of x y tiles
        ,start // start frame
        , length // length ( end frame ) x * y
        ,rate // frame rate
    );
}

key toucher;
integer listenHandle;

message( string ss)
{
    llInstantMessage( toucher, ss);
}

default
{
    state_entry()
    {
        setup();
        length = x * y;
        ini_button_pos();
        state active;
    }
}

state active
{
    state_entry()
    {
        llSetTexture(tiled_texture,0); // set your texture
        animation();
    }

    touch_start(integer t)
    {
        button = llDetectedLinkNumber(0); integer face = llDetectedTouchFace(0);
        toucher = llDetectedKey(0);
        if( toucher != llGetOwner()){message( "You are not the owner!\n To get your copy of this tool\n
Visit\n http://forums.osgrid.org/viewtopic.php?f=5&t=5544&start=60"); return;}
        if( 1 == button && face == 0)
        {
            state set_tex;
        }
       
        if( 2 == button && face == 4)
        {
            vector switch = llDetectedTouchST(0); // use this only once in your code
                       
            if( switch.y > 0.529237 &&  switch.y < 0.637808 )
            {
                if(  switch.x > 0.051734 && switch.x <0.175543 )
                {
                   llSay(0,help);
                   ppf( 14,[ PRIM_TYPE,0,0,<0, 1, 0>,0,<0, 0, 0>,<0, 0, 0>,<0, 0, 0>
                             ,PRIM_POS_LOCAL,<3.433609, -0.190475, -0.093170>
                             ,PRIM_ROT_LOCAL,<1, 0, 0, 0>
                             ,PRIM_SIZE,<3.408856, 4.173810, 0.031163>
                             ,PRIM_TEXTURE, 5, help_texture, <1.0, 1.0, 0.0>, <0.0, 0.0, 0.0>, 0.0
                             ,PRIM_FULLBRIGHT,5,1
                             ,PRIM_TEXT,"Please wait.....", <1,1,1>,1
                   ]);
                   llSleep(10);
                   ppf( 14,[ // AUTO CALCULATE
                            PRIM_TYPE,0,0,<0, 1, 0>,0,<0, 0, 0>,<0, 0, 0>,<0, 0, 0>
                            ,PRIM_POS_LOCAL,<1.44650, 0.58510, -0.03831>
                            ,PRIM_ROT_LOCAL,<0, 0, -1, 0>
                            ,PRIM_SIZE,<0.3, 0.3, 0.031163>
                            ,PRIM_TEXT,"AUTO\nCALCULATE\n★★★★★★★", <1,0.7,0>,1
                    ]);
                }
            }
        }
           
           
                       
        /// MODE SELECTION FUNCTION STARTS
        else if( 3 == button)
        {
            mode_button_action( SMOOTH, "SMOOTH\nON", "SMOOTH\nOFF"); SMOOTHS = mode;
        }
       
        else if( 4 == button)
        {
            mode_button_action( LOOP, "LOOP\nON", "LOOP\nOFF"); LOOPS = mode;
        }
       
        else if( 5 == button)
        {
            mode_button_action( PING_PONG, "PINGPONG\nON", "PINGPONG\nOFF"); PINGPONG = mode;
        }
       
        else if( 6 == button)
        {
            mode_button_action( ROTATE, "ROTATION\nON","ROTATION\nOFF"); ROTATION = mode;
        }
       
        else if( 7 == button)
        {
            mode_button_action( SCALE, "SCALE\nON", "SCALE\nOFF"); SCALES = mode;
        }
       
        else if( 8 == button)
        {
            mode_button_action( REVERSE, "REVERSE\nON", "REVERSE\nOFF");  REV = mode;
        }
        //// END OF MODE SELECTION FUNCTION
       
       
        else if ( 9 == button) // TILE X
        {
            if ( face == 3) { ++x;} else if ( face == 2){ --x;} text("TILE X\n"+ (string)x); if( x<1) x= 0;
        }
       
        else if ( 10 == button) //TILE Y
        {
            if ( face == 3) { ++y;} else if ( face == 2){ --y;} text("TILE Y\n"+ (string)y); if( y<1) y= 0;
        }
       
        else if ( 11 == button) //START FRAME BUTTON
        {
            if ( face == 3) { ++start;} else if ( face == 2){ --start;} text("START FRAME\n"+ (string)llRound(start));
        }
       
        else if ( 12 == button) // END FRAME-LENGTH BUTTON
        {
            if ( face == 3) { ++length;} else if ( face == 2){ --length;} text("END FRAME\n"+ (string)llRound(length));
        }
       
        else if ( 13 == button) // FRAME RATE BUTTON
        {
            if ( face == 3) { ++rate;} else if ( face == 2){ --rate;} text("FRAME RATE\n"+ (string)llRound(rate));
        }
       
        else if ( 14 == button) // AUTO CALCULATE BUTTON
        {
             length = x * y; rate = 8.0;
             ppf(12,[PRIM_TEXT, "END FRAME\n"+ (string)llRound(length), <0.7,0.7,0.5>,1]);
             ppf(13,[PRIM_TEXT,"FRAME RATE\n"+ (string)llRound(rate), <0.7,0.7,0.5>,1]);
        }
       
        else if ( 15 == button) // generate code
        {
            text( "GENERATE\nCODE");
            string display = "\n \n llSetTextureAnim("+(string)ANIM_ON +"|"+(string) SMOOTHS +"|"+(string) LOOPS+"|"+(string)PINGPONG+"|"+(string)ROTATION+"|"+(string)SCALES+"|"+(string)REV+",ALL_SIDES,"+(string)x+","+(string)y+"," +(string) start +","+ (string) length + ","+ (string) rate + ");";
            message( display);
            llSleep(1);
            llSay(0,help);
        }
   
       
        else if ( 16 == button) { llResetScript();} // RESET BUTTON
       
        else if ( 17 == button) // POWER BUTTON
        {
            if( switch = switch^1){ rate = 0;  ppf(17, [PRIM_TEXT,"START", <0,1,0>,1]);}
            else { rate = 8.0; ppf(17, [PRIM_TEXT,"STOP", <1,0.1,0>,1]); }
        }
       
        if( 2 != button){ button_sound();}
         
        animation();
    }
}

state set_tex
{
    state_entry()
    {
        llTextBox( toucher," Paste the Texture uuid!", communication_channel);
        listenHandle = llListen( communication_channel,"", toucher, "");
        llSetTimerEvent(userInputTime);
    }
   
    listen( integer c, string n, key k, string m)
    {
        tiled_texture = m;
        llListenRemove(listenHandle);
        message( "Texture applied. Now set the X and Y number of tiles.");
        state active;
    }
   
    timer()
    {
        llListenRemove(listenHandle);
        llSetTimerEvent(0);
        message("Operation Timed out");
        state active ;
    }
}