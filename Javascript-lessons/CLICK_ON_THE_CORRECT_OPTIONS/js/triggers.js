let time; let i=0; let t; let l;
		
function trigger_right(){
	right_sound.play();
	e("pic").src="img/correct_240X60_150ms.gif";
}

function trigger_wrong(id){
	make_red(id);
	animate_fall(id);
}