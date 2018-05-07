function objToSub(txt) {
	var myText;
	switch (txt) {
		case "me":myText = "I";break;
		case "us":myText = "we";break;
		case "you":myText = "you";break;
		case "him":myText = "he";break;
		case "her":myText = "she";break;
		case "them":myText = "they";break;
		default:myText = txt;
	}
	return myText;
}