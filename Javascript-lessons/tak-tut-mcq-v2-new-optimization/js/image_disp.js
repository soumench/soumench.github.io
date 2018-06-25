function show_default_pic(){
	e("pic").src="img/blank_210X165.png";
	e("bar2").src = "img/progressbar_Blank_400X20.png";
	e("quiz_board").style.backgroundImage="url('img/quiz_bg_img_480X200.jpg')";
	e("message_box").style.backgroundImage="url('img/LCD_BACKGROUND-min.jpg')";
}
function show_wrong_pic(){
	/*e("pic").src = "img/wrong.gif";*/
	e("bar2").src="img/progressbar_RED-5s-500X10steps_400X20_.gif";
}
function show_correct_pic(){
	e("pic").src = "img/correct.gif";
	e("bar2").src = "img/progressbar_green_400X20_3s_300X10steps.gif";
}
function clear_bar2(){
	e("bar2").src = "img/progressbar_Blank_400X20.png";
}