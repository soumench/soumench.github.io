let lastauxiliary;
let lastparticiple;

 const goodauxiliaries={"": 1,has:2,have:2,had:3,"will have":4,"shall have":4, 
                           "am":5, "is":5, "are":5, "was":6, "were":6};

    const testmessages=["NOTHING DETECTED (by bad auxiliary)",
         "just a participle",
         "(has|have) + participle",
         "had +  participle",
         "(will|shall) + have + participle",
         "(am|is|are) + participle",
         "(was|were) + participle"         
        ];
        
    const BARE_P=1;
    const HASHAVE_P=2;
    const HAD_P=3;
    const WILLSHALLHAVE_P=4;
    const AMISARE_P=5;
    const WASWERE_P=6;






function detectP(userinput)
    {
        let auxiliary="";    
        let ispart=0;    
        let lastword="";   
		
		
		
        if(userinput){
            auxiliary=userinput.replace(/\s*\S+$/,"");
            lastword=userinput.replace(/^.*?\s*(\S+)$/,"$1");
        }
						
        let auxnumber= goodauxiliaries[auxiliary];
        if(!auxnumber)return 0; 
        ispart= isparticiple(lastword);
        if(!ispart)return 0;
        lastparticiple=lastword;
        lastauxiliary=auxiliary;
       
      /*  e("vardisplay").innerHTML=`
${auxnumber?"good":"bad"}  auxiliary (${auxiliary}) <br/> 
${ispart?"good":"bad"}  participle (${lastword}) <br/>         
The auxiliary is: (${auxiliary}) <br/> 
auxnumber: (${auxnumber}) <br/> 
The lastword is : (${lastword}) <br/>
ispart: (${ispart}) <br/>
`; */
        return auxnumber;
    }
    