let participle = {done:1, gone:1, taken:1, driven:1, shaken:1, woven:1, set:1, put:1, dug:1, cut:1,
				 made:1, told:1, said:1, sought:1, bought:1, caught:1, brought:1, build:1};

function isparticiple(word){
	if(word.length<3){return 0;}
	if( participle[word]){return 1;}
	if(/ed$/.test(word) ){ return 1;}
	return 0;
}