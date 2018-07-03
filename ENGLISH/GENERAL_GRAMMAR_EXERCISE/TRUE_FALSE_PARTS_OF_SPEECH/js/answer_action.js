function correct_answer_action(){
	changetrueIMG(); trueFX.play();
	e("trace").innerHTML = "You are right!";
	e("question").innerHTML = "You are right!";
	truecount++;
}

function wrong_answer_action(){
	changefalseIMG(); falseFX.play();
	e("trace").innerHTML = "You are wrong!";
	e("question").innerHTML = "You are wrong!";
}