function hide_buttons(){
	e("abtn").style.visibility=e("bbtn").style.visibility=e("cbtn").style.visibility="hidden";
	
	e("a").style.color=e("b").style.color=e("c").style.color="white";
	
	e("next").style.visibility=/*e("prev").style.visibility =*/"visible";
	
	e("check").innerHTML=correct_message();
	
	e(ans).style.color="green";
	
	if(WITHAUDIO){correct_audio();}
}       