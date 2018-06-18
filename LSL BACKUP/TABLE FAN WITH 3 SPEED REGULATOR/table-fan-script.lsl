//Script Starts Here

ppf( integer child, list temp)
{
    llSetLinkPrimitiveParamsFast(child,temp);
}

setup()
{
    ppf( 1,[
PRIM_TYPE,5,0,<0, 1, 0>,0.649980,<0, 0, 0>,<1, 0.5, 0>,<0, 0, 0>,<0.23998, 0.505, 0>,<0, 0, 0>,1,0,0,
PRIM_ROT_LOCAL,<0.70710, 0.00001, 0.70711, 0>,
PRIM_SIZE,<1, 1, 1.5> ]);
    ppf( 2,[
PRIM_TYPE,5,0,<0, 1, 0>,0.24994,<0, 0, 0>,<1, 0.5, 0>,<0, 0, 0>,<0.38, 0.88, 0>,<0, 0, 0>,1,0,0,
PRIM_POSITION,<-0.3, -0.05473, -0.4>,
PRIM_ROT_LOCAL,<0, 0, -1, 0>,
PRIM_SIZE,<0.05, 0.15, 0.15> ]);
    ppf( 3,[
PRIM_TYPE,5,0,<0, 1, 0>,0.24994,<0, 0, 0>,<1, 0.5, 0>,<0, 0, 0>,<0.38, 0.88, 0>,<0, 0, 0>,1,0,0,
PRIM_POSITION,<-0.3, 0.09688, -0.4>,
PRIM_ROT_LOCAL,<0, 0, -1, 0>,
PRIM_SIZE,<0.05, 0.15, 0.15> ]);
    ppf( 4,[
PRIM_TYPE,5,0,<0, 1, 0>,0.249940,<0, 0, 0>,<1, 0.5, 0>,<0, 0, 0>,<0.38, 0.88, 0>,<0, 0, 0>,1,0,0,
PRIM_POSITION,<-0.3, 0.23534, -0.4>,
PRIM_ROT_LOCAL,<0, 0, -1, 0>,
PRIM_SIZE,<0.05, 0.15, 0.15> ]);
    ppf( 5,[
PRIM_TYPE,5,0,<0, 1, 0>,0.24994,<0, 0, 0>,<1, 0.5, 0>,<0, 0, 0>,<0.38, 0.88, 0>,<0, 0, 0>,1,0,0,
PRIM_POSITION,<-0.325, -0.20459, -0.4>,
PRIM_ROT_LOCAL,<0, 0, -1, 0>,
PRIM_SIZE,<0.05, 0.15, 0.15> ]);
    ppf( 6,[
PRIM_TYPE,3,0,<0, 1, 0>,0,<1, -1, 0>,<1, 1, 0>,
PRIM_POSITION,<0.83025, 0.0061, -0.29456>,
PRIM_ROT_LOCAL,<0.60161, -0.37156, 0.60163, 0.37156>,
PRIM_SIZE,<0.01, 1.5, 1.5> ]);
    ppf( 7,[
PRIM_TYPE,0,0,<0.74996, 1, 0>,0,<0, 0, 0>,<0.15, 0.4, 0>,<0.5, 0, 0>,
PRIM_POSITION,<0.185, 0.0061, 0.23651>,
PRIM_ROT_LOCAL,<0, 0.70711, 0, 0.70711>,
PRIM_SIZE,<0.5, 0.5, 1> ]);
    ppf( 8,[
PRIM_TYPE,5,0,<0, 1, 0>,0.09999,<0, 0, 0>,<1, 0.5, 0>,<0, 0, 0>,<0.37994, 0.81998, 0>,<0, 0, 0>,1,0,0,
PRIM_POSITION,<0.83515, 0.00611, 0.01124>,
PRIM_ROT_LOCAL,<-0.70711, 0, -0.70711, 0>,
PRIM_SIZE,<0.546402, 0.75, 0.75> ]);
    ppf( 9,[
PRIM_TYPE,5,0,<0, 1, 0>,0.09999,<0, 0, 0>,<1, 0.5, 0>,<0, 0, 0>,<0.37994, 0.81998, 0>,<0, 0, 0>,1,0,0,
PRIM_POSITION,<0.83515, 0.00610, -0.29431>,
PRIM_ROT_LOCAL,<0.70711, 0, -0.70711, 0>,
PRIM_SIZE,<0.211162, 0.386459, 0.386459> ]);
}

float glow;
float i;

button_action(integer link, float f)
{
   integer l = 2;
   vector off_pos;
   while( l <=5 )
   {
        off_pos =  llList2Vector(llGetLinkPrimitiveParams(l,[PRIM_POS_LOCAL]),0);
        off_pos.x = -0.30; off_pos.z = -0.4;
        ppf(l,[PRIM_POS_LOCAL, off_pos, PRIM_GLOW,-1,0]);
        ++l;
   }
   vector link_pos = llList2Vector(llGetLinkPrimitiveParams(link,[PRIM_POS_LOCAL]),0);
   ppf(link,[PRIM_POS_LOCAL, link_pos-<f,0,0>,  PRIM_GLOW, -1, glow]);
   llTriggerSound("134d85a9-3cfc-456e-988d-d6ce2812da63",1); // your sound uuid
}
   


default
{
    state_entry()
    {
        setup(); // remove this udf when prims are assembled
        ppf(6, [PRIM_OMEGA,<0,0,0>, PI,0]);
    }

    touch_start(integer t)
    {
        integer kid = llDetectedLinkNumber(0);
        if( kid == 1 || kid > 5) return;
        else
        {
            glow = 0.1;
            if( kid == 2) {i = 1.65; }
            else if ( kid == 3) { i = 2;}
            else if ( kid == 4) { i = 3;}
            else if ( kid == 5) { i = 0; glow = 0;}
        }
        button_action(kid, 0.025);   
       
        ppf(6, [PRIM_OMEGA,<0,0,i>,TWO_PI,1]);
    }
}

//Script Ends Here﻿
