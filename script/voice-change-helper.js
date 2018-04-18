   /* <script>*/
        
        var number; 
        var tense ;
        function buttonUpdate(){
            var ppInput = e("3rdForm1");
            if(ppInput.value== ""|| number===undefined|| tense===undefined){
                alert("Please provide all the following information\n 1. Number\n 2. Tense \n 3. Past Paticiple Form of the main verb!");
                ppInput.style.backgroundColor="red";
                return;
            }
            ppInput.style.backgroundColor="white";
            update();
        }
        function update() {
            subActive.value=firstUpperCase(subActive.value);
            e("subPassive").value = subToObj(subActive.value);
            e("objPassive").value = firstUpperCase(objToSub(objActive.value));
            e("punc2").value = punc1.value;
            
            detectNumberTense();
            
            var pastParticiple= e("3rdForm1").value;
            e("3rdForm2").value= pastParticiple;
            
            if(pastParticiple==="known"){/*exception*/
                e("by").value="to";      /*exception*/
            }else{e("by").value="by";}  /*exception*/
        }
        
        function detectNumberTense(){
            
            var msg;
            if(number == "singular" && tense == "present"){
                if(objPassive.value=="I"){msg="am";}
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
                case "I" || "i": myText = "me"; break;
                case "We":myText = "us";break;
                case "He":myText = "him";break;
                case "She":myText = "her";break;
                case "They":myText = "them";break;
                default:myText = firstLowerCase(txt);
            }
            return myText;
        }

        function objToSub(txt) {
            var myText;
            switch (txt) {
                case "me":myText = "I";break;
                case "us":myText = firstUpperCase("we");break;
                case "you":myText = firstUpperCase("you");break;
                case "him":myText = firstUpperCase("he");break;
                case "her":myText = firstUpperCase("she");break;
                case "them":myText = firstUpperCase("they");break;
                default:myText = txt;
            }
            return myText;
        }

        function firstUpperCase(txt) {
            return txt.substr(0, 1).toUpperCase() + txt.substr(1);
        }
        
        function firstLowerCase(txt) {
            return txt.substr(0, 1).toLowerCase() + txt.substr(1);
        }

        function e(id) {
            return document.getElementById(id);
        }
    /*</script>*/