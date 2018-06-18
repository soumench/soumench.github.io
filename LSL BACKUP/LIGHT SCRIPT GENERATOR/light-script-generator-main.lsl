
ppf( integer child, list temp)
{
    llSetLinkPrimitiveParamsFast( child, temp);
}

setup()
{
    ppf( -1, [ PRIM_TEXTURE, ALL_SIDES, TEXTURE_BLANK, <1.0, 1.0, 0.0>, <0.0, 0.0, 0.0>, 0.0]);
    ppf( 1,[ PRIM_TYPE,0,0,<0.125, 0.625, 0>,0.333,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>,
PRIM_ROT_LOCAL,<0, 0, 0, 1>, PRIM_COLOR,7,<1,0,0>,1, PRIM_COLOR,4,<0,1,0>,1, PRIM_COLOR,6,<0,0,1>,1,
PRIM_SIZE,<0.051086, 1.085678, 1> ]);
    ppf( 2,[ PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>, PRIM_SLICE,<0.5,1,0>,
PRIM_POSITION,<-0.00278, 0.34709, 0.70346>, PRIM_COLOR,-1,<1,0,0>,1,
PRIM_ROT_LOCAL,<0, 0, 0, 1>,
PRIM_SIZE,<0.075, 0.075, 0.861256> ]);
    ppf( 3,[ PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>,
PRIM_POSITION,<-0.00278, 0.00043, 0.70346>, PRIM_SLICE,<0.5,1,0>,
PRIM_ROT_LOCAL,<0, 0, 0, 1>, PRIM_COLOR,-1,<0,1,0>,1,
PRIM_SIZE,<0.075, 0.075, 0.487713> ]);
    ppf( 4,[ PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>,
PRIM_POSITION,<-0.00278, -0.35597, 0.70346>, PRIM_SLICE,<0.5,1,0>,
PRIM_ROT_LOCAL,<0, 0, 0, 1>, PRIM_COLOR,-1,<0,0,1>,1,
PRIM_SIZE,<0.075, 0.075, 0.981022> ]);
    ppf( 5,[ PRIM_TYPE,3,0,<0, 1, 0>,0,<0, 0, 0>,<0, 1, 0>,
PRIM_POSITION,<-0.07950, -0.75810, 2.95076>,
PRIM_ROT_LOCAL,<0, 0, 0, 1>,
PRIM_SIZE,<0.5, 0.5, 0.5> ]);
    ppf( 6,[ PRIM_TYPE,0,0,<0.125, 0.625, 0>,0.333,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>,
PRIM_POSITION,<0, -1.49161, 0>, PRIM_COLOR,7,<1, 0.5, 0>,1,PRIM_COLOR,4,<0, 1, 1>,1, PRIM_COLOR,6,<0.5, 0, 1>,1, PRIM_ROT_LOCAL,<0, 0, 0, 1>,
PRIM_SIZE,<0.051086, 1.085678, 1> ]);
   ppf( 7,[ PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>,
PRIM_POSITION,<-0.00278, -1.14182, 0.70346>, PRIM_SLICE,<0.5,1,0>,
PRIM_ROT_LOCAL,<0, 0, 0, 1>,  PRIM_COLOR,-1,<1, 0.5, 0>,1,
PRIM_SIZE,<0.075, 0.075, 0.974828> ]);
    ppf( 8,[ PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>,
PRIM_POSITION,<-0.00278, -1.51588, 0.70346>, PRIM_SLICE,<0.5,1,0>,PRIM_COLOR,-1,<0, 1, 1>,1,
PRIM_ROT_LOCAL,<0, 0, 0, 1>,
PRIM_SIZE,<0.075, 0.075, 0.512096> ]);
    ppf( 9,[ PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>, PRIM_COLOR,-1,<0.5, 0, 1>,1,
PRIM_POSITION,<-0.00278, -1.87511, 0.70346>, PRIM_SLICE,<0.5,1,0>,
PRIM_ROT_LOCAL,<0, 0, 0, 1>,
PRIM_SIZE,<0.075, 0.075, 0.01> ]);
    ppf( 10,[ PRIM_TYPE,1,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>, PRIM_COLOR,-1,<1, 1, 0>,1,
PRIM_POSITION,<-0.00278, -0.75252, 0.70346>, PRIM_SLICE,<0.5,1,0>,
PRIM_ROT_LOCAL,<0, 0, 0, 1>,
PRIM_SIZE,<0.075, 0.075, 0.601822> ]);
   ppf( 11,[ PRIM_TYPE,0,0,<0, 1, 0>,0,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>, PRIM_COLOR,-1,<1, 1, 0>,1,
PRIM_POSITION,<0.01006, -0.74957, 0.00417>,
PRIM_ROT_LOCAL,<0, 0, 0, 1>,
PRIM_SIZE,<0.024429, 0.412796, 0.995762> ]);
   ppf( 12,[ PRIM_TYPE,0,0,<0.125, 0.6250, 0>,0.749960,<0, 0, 0>,<1, 1, 0>,<0, 0, 0>,
PRIM_POSITION,<-0.04635, -0.74609, 0.00610>,
PRIM_ROT_LOCAL,<-0.70711, 0, 0, 0.70711>,
PRIM_SIZE,<0.182993, 1.394699, 2.628757> ]);
}

vector v;

bar(integer link, string s )
{
    v = llDetectedTouchST(0);
   
    ppf( link, [PRIM_SIZE,<0.075,0.075,v.y>,PRIM_TEXT,s + (string)llRound(v.y * 100)+ "%", <1,1,1>,1]);
}

float r = 1; float g = 1; float b = 1;

float glow = 0.02;

float intensity = 0.5;  float radius = 10;  float falloff = 1 ;

light()
{
   ppf( 5,[ PRIM_COLOR,-1, <r,g,b>,1, PRIM_GLOW, -1, glow
    ,PRIM_POINT_LIGHT,1, <r,g,b>, intensity, radius, falloff
    ,PRIM_TEXT,"TOUCH HERE\n TO\n GENERATE\n THE SCRIPT", <1,1,0>,1
   ]);
}

code()
{
    key toucher = llDetectedKey(0);
    string name = llKey2Name(toucher);
    llInstantMessage(toucher, "\nHello "+ name +"!\n Rez a prim and paste the following script. \nUse Touch or type on or off on channel 1 to use the light.\n Thank you for using the tool!");
    llSleep(1);
    llInstantMessage(toucher,"
    integer on;
    light( integer on, float gl)
    {
       llSetLinkPrimitiveParamsFast( LINK_THIS,[
              PRIM_GLOW,-1, gl
              ,PRIM_FULLBRIGHT,-1,1
              ,PRIM_COLOR,-1, "+(string)<r,g,b> +", 1
              ,PRIM_POINT_LIGHT, on, "
              +(string)<r,g,b>
              +", "+ (string)intensity + ", "+ (string)radius+ ", "+ (string)falloff +" ]);
    }
   
    default
    {
        state_entry()
        {
            llListen(1,\"\",\"\",\"\");
        }
       
        listen( integer c, string n, key k, string m)
        {
            if( \"on\" == m) { light(1,"+(string) glow +");}
            else if( \"off\" == m) { light(0,0);}
        }
       
        touch_start( integer t)
        {
            if( on= on^1){ light(1,"+ (string) glow +"); }
            else { light(0,0);}
        }
    }
    ");
}
   


default
{
    state_entry()
    {
       setup();
       light();
    }
   
    touch(integer t)
    {
        integer face = llDetectedTouchFace(0);
        integer kid = llDetectedLinkNumber(0);
       
        if ( 1 == kid && 7 == face)     { bar(2, "▲ Red ▼\n "); r = v.y; }
        else if( 1 == kid && 4 == face) { bar(3, "▲ Green ▼\n "); g = v.y; }
        else if ( 1 == kid && 6 == face){ bar(4, "▲ Blue ▼\n "); b = v.y; }
       
        else if ( 6 == kid && 7 == face){ bar(7, "▲ intensity ▼\n "); intensity = v.y; }
        else if ( 6 == kid && 4 == face){ bar(8, "▲ radius ▼\n "); radius = v.y * 20; }
        else if ( 6 == kid && 6 == face){ bar(9, "▲ falloff ▼\n "); falloff = v.y*2; }
       
        else if ( 11 == kid && 4 == face){ bar(10, "▲ Glow ▼\n "); glow = v.y; }
       
        else if ( 5 == kid ){ code(); }
       
        light();
    }
}
