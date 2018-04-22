   
        /*Made by Soumen Chakraborty 18-April-2018  this is tempV
        Only for Educational, Research and strictly Non-commercial Purpose.*/
        var participles = {"go" : "gone", "goes": "gone", "went": "gone",
                           "eat": "eaten", "eats": "eaten", "ate":"eaten",
                           "speak":"spoken","speaks":"spoken","spoke":"spoken"
                          }
        var number; 
        var tense ;
        function buttonUpdate(){
            var ppInput = e("3rdForm1");
            if(ppInput.value===""|| number===undefined|| tense===undefined){
                alert("Please provide all the following information\n 1. Number\n 2. Tense \n 3. Past Paticiple Form of the main verb!");
                ppInput.style.backgroundColor="rgba(255, 8, 8, 0.3)";
                return;
            }
            ppInput.style.backgroundColor="white";
            update();
        }
        function update() {
            
            e("subPassive").value = subToObj(subActive.value);
            e("objPassive").value = objToSub(objActive.value);
           
            e("vrbActive").value=e("vrbActive").value.toLowerCase();
            e("punc2").value = punc1.value;
            
            detectNumberTense();
            
            var pastParticiple= e("3rdForm1").value;
            e("3rdForm2").value= pastParticiple.toLowerCase();
            
            if(pastParticiple==="known"){/*exception*/
                e("by").value="to";      /*exception*/
            }else{e("by").value="by";}  /*exception*/
        }
        
        function detectNumberTense(){
            
            var msg;
            if(number == "singular" && tense == "present"){
                if(objPassive.value=="i"){msg="am";}
                else if(objPassive.value==="You"){msg="are";}
                else{msg="is";}                
            }else if(number == "plural" && tense == "present"){
               msg = "are"; 
            }else if(number == "singular" && tense == "past"){
                if(objPassive.value=="You"){msg="were";}
                else{msg="was";}
            }else if(number == "plural" && tense == "past"){
               msg = "were"; 
            }else if(tense=="future"){
                msg="will be";
            }
            
            e("aux-verb").value= msg;
        }
        
        function selectNumber(Number){  /*called at radio buttton check event*/
           number = Number;
        }
        
        function selectTense(Tense){/*called at radio buttton check event*/
           tense =Tense;           
        }

        function subToObj(txt) {
            var myText;
            switch (txt) {
                case "i": myText = "me"; break;
                case "We":myText = "us";break;
                case "He":myText = "him";break;
                case "She":myText = "her";break;
                case "They":myText = "them";break;
                
                default:myText = txt;   
            }
            return myText.toLowerCase();
        }

        function objToSub(txt) {
            var myText;
            switch (txt) {
                case "me":myText = "I";break;
                case "us":myText = "we";break;
                case "you":myText = "you";break;
                case "him":myText = "he";break;
                case "her":myText = "she";break;
                case "them":myText = "they";break;
                default:myText = txt;    
            }
            return myText.toLowerCase();
        }

       
        
        function firstLowerCase(txt) {
            return txt.substr(0, 1).toLowerCase() + txt.substr(1);
        }        
        
        function selectSubAct(){
            e("subActive").value = eName("subject")[0].value;
        }
        function selectVerbAct(){
            var myText = e("subActive").value;
                        
            if(myText==="He" || myText==="She"){
               e("vrbActive").value = eName("verb")[0].value +"s"; 
            }
            else{
               e("vrbActive").value = eName("verb")[0].value; 
            }
        }
        function selectObjAct(){
            e("objActive").value = eName("object")[0].value;
        }

        function eName(name){return document.getElementsByName(name);}
        function e(id) {return document.getElementById(id);}
    