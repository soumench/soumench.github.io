let participle = {done:1, gone:1, taken:1, driven:1, shaken:1, woven:1, set:1, put:1, dug:1, cut:1,
				 made:1, told:1, said:1, sought:1, bought:1, caught:1, brought:1, build:1, sworn:1,
				 burnt:1, ground:1, frozen:1, hung:1, taught:1, forgotten:1, sung:1, shown:1, sent:1,
				 arisen:1, born:1, borne:1, begotten:1, begun:1, bent:1, bound:1, bitten:1, blown:1,
				 broken:1, bred:1, burst:1, cast:1, chosen:1, cost:1, crept:1, dealt:1, drawn:1,
				 drunk:1, eaten:1, fallen:1, fed:1, felt:1, fought:1, flung:1, flown:1, forbidden:1,
				 gotten:1, given:1, ground:1, hung:1, heard:1, hurt:1, kept:1, knelt:1, hidden:1,
				 known:1, left:1, lent:1, lit:1, lost:1, met:1, made:1, melted:1, molten:1, mowed:1,
				 penned:1, pleaded:1, proven:1, proved:1, quitted:1, quit:1, ridden:1, rung:1, run:1,
				 sawed:1, shaken:1, shed:1, shone:1, shitted:1, shat:1, shot:1, showed:1, shrunk:1,
				 slit:1, smelt:1, smelled:1, smitten:1, sowed:1, sown:1, spoken:1, sped:1, spelt:1, 
				 spelled:1, spun:1, spat:1, spread:1, split:1, spoilt:1, spoiled:1, stood:1, stolen:1,
				 stuck:1, stung:1, stridden:1, swum:1, taken:1, torn:1, thrown:1, worn:1, wed:1,
				 wedded:1, won:1, wound:1, wrung:1, written:1, hit:1};

function isparticiple(word){
	if(word.length<3){return 0;}
	if( participle[word]){return 1;}
	if(/ed$/.test(word) ){ return 1;}
	return 0;
}