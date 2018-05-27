let lastauxiliary;
let lastparticiple;

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
    