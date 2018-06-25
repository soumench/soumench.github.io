
function correct_message(){
	const cm = ["You are right!", "Well done!", " Very good!", 
				"Nice job! I’m impressed!", "That's great!",
				"Correct answer !"
			   ];
	let e_msg = cm[Math.floor(Math.random()*cm.length)];
	return e_msg;
}

function wrong_message(){
	const wm = ["Sorry, wrong answer.", "Incorrect!", "You made a mistake!", 
				"I am afraid you are wrong.", "Try again please.",
				"Your answer is not correct."
			   ];
	let w_msg = wm[Math.floor(Math.random()*wm.length)];
	return w_msg;
}
