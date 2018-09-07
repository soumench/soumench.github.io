/*<script>*/
        let text = "Never - কখনও নয় <br>(I will never shop at that store again.) <br>আমি আর কখনও ওই দোকানে কিনবো না ।";
        const display = e("trace");
        display.innerHTML=text;
        const snd = new Audio("sound/knob_sound.oga");
        function barVal(x){
            snd.play();
            let i=0;
            let time = setInterval(progress,20);
            function progress(){
                if(i>=x){
                    clearInterval(time);
                }
                e("bar").value=i;
                i++;
            }
                        
            switch (x) {
            case 100:
                text = "Always -সবসময় ; <br> (He always wins.) <br> সে সবসময় জেতে ।";
                break;
            case 90:
                text = "  Usually - সাধারণতঃ <br> (Usually I get up at 6 a.m.)<br>সাধারনতঃ আমি সকাল ছটায় উঠি ।" ;
                break;
            case 80:
                text = "Frequently - ঘনঘন <br>(The dog frequently comes for food.) <br>কুকুরটি খাবারের জন্যে ঘনঘন আসে ।";
                break;
            case 70:
                text = "Often - প্রায়ই <br> (The poor man often starves.) <br>গরীব লোকটি প্রায়ই অনাহারে থাকে ।";
                break;
            case 50:
                text = "Sometimes - কখনো কখনো <br> (Sometimes we all make mistakes.) <br>কখনও কখনও আমরা সবাই ভুল করি ।";
                break;
            case 10:
                text = "Seldom - প্রায় না <br>( We seldom go to the movies.)<br>আমরা মুভি দেখতে প্রায় যাই না বললেই চলে ।";
                break;
            case 5:
                text = "Rarely - কচিৎ/কালে ভদ্রে <br> (He rarely talks about his past.) <br> সে তার অতীত নিয়ে কালেভদ্রে কথা বলে ।";
                break;
            default:
                text = "Never - কখনও নয় <br>(I will never shop at that store again.) <br>আমি আর কখনও ওই দোকানে কিনবো না ।";
            } 
            display.innerHTML=text;
        }
        e("year").innerHTML = creation_year;
   /* </script>*/

/*Copyright &copy; Program written by Soumen Chakraborty 2018*/