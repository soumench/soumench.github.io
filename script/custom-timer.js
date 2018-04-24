
            /*var sound = new Audio("sounds/ting-16bit.mp3");*/
            const sound = new Audio("sounds/ting-128kbps.ogg");
			let i = 0;  
            let time = 0; // time variable
            let trigger;
            
            initialDisplay();
            
            function initialDisplay(){
                trigger = 3 ; i = 0;
                e("timeDurationMsg").innerHTML= "Current Timer duration: "+ trigger +" seconds";
                e("setTime").value = trigger; // the textbox to enter time in senconds
                e("progressBar").max = trigger;
                e("progressBar").value=0;
            }
            
            function update(){
                i=0;
                e("progressBar").value=i;
                trigger = e("setTime").value;
                e("progressBar").max = trigger;
                let msg;
                if(trigger <=1){
                    msg = "Set a different value."
                }else{
                    msg = "Timer is set to "+trigger+" seconds";
                }
                e("timeDurationMsg").innerHTML= msg;
            }
            
            function preset(num){
                reset();
                e("setTime").value = num;
                update();
                start_timer();
                write();
            }           

            button_state("stop_btn", 1, "start_btn", 0);            

			function stop_timer(){
                clearInterval(time);
                button_state("stop_btn", 1,"start_btn", 0);
            }			

			function start_timer(){
                time = setInterval(write,1000);
                button_state("stop_btn", 0, "start_btn", 1);
            }
			
			function reset(){
				stop_timer(); 
				
                timeUp();
                
               // i = 0;
                initialDisplay();
            }
            
            function timeUp(){
                e("d").innerHTML ="<<----Time Up!---->>";
            }

            function button_state(id1, state1, id2, state2){
                e(id1).disabled = state1;
                e(id2).disabled = state2;
            } 
					
			function write(){
				e("d").innerHTML =(i++)+1 ;
                e("progressBar").value= i;
				// Just a check point here to do stuff
				if(i >= trigger){ 
                   // e("progressBar").value= 0;
                    sound.play();                    
                    reset();
                }
			}
			function e(id){
				return document.getElementById(id);
			}
		
