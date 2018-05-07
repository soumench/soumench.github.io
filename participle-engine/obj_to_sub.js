function objToSub(txt) {
	var myText;
	switch (txt) {
		case "me":myText = "I";break;
		case "us":myText = firstUpperCase("we");break;
		case "you":myText = firstUpperCase("you");break;
		case "him":myText = firstUpperCase("he");break;
		case "her":myText = firstUpperCase("she");break;
		case "them":myText = firstUpperCase("they");break;
		default:myText = txt;
	}
	return myText;
}