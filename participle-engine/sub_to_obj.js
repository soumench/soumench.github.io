function subToObj(txt) {
	var myText;
	switch (txt) {
		case "i": myText = "me"; break;
		case "we":myText = "us";break;
		case "he":myText = "him";break;
		case "she":myText = "her";break;
		case "they":myText = "them";break;

		default:myText =  txt; /*-a name should not change the capitalization--*/
	}
	/*e("whatever").innerHTML = "my input was "+txt+ " and my output is "+myText;*/
	return myText;
}      