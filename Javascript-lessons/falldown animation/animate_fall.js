const fsound = new Audio("anim_sound/fall_sound.oga")
function animate_fall(id){
	fsound.play();
	const elem = e(id);
	t = elem.offsetTop;
	l = elem.offsetLeft;		
	clearInterval(time);
	time= setInterval(function(){ 
		i++; t+=i;
		move(id, t+"px", l+"px");
		if(t>=556){
			clearInterval(time);
			i=0;
			del(id); 
		}	
	}, 15);
}	

/*&copy Made by Soumen Chakraborty - 2018 <br>
Strictly for Educational, Non-commercial and Non-Profit purpose.*/