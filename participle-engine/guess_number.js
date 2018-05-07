function guessNumber(word){
                                
	let singulars = {ass:1,mass:1,pass:1,bass:1,class:1,glass:1,brass:1,grass:1,kvass:1,bypass:1,morass:1,camass:1, admass:1,compass:1,biomass:1, cuirass:1,canvass:1,carcass:1,jackass:1,cutlass:1,trespass:1,overpass:1,subclass:1};
	let plurals = {mice:1,men:1,women:1,people:1,children:1,geese:1,teeth:1,oxen:1,you:1};
	let AMBIGUOUS = {deer:1, moose:1, series:1, swine:1, salmon:1, means:1, aircraft:1, offspring:1, species:1, grapefruit:1,sheep:1,fish:1,shrimp:1};
	
	if( singulars[word]){return SINGULAR;}
	
	if(/ass$\s/.test(word) ) { return SINGULAR;}

	if(/^(few|a few|the few|a group of)\s/.test(word) ) {return PLURAL;}

	if(/^an?\s/.test(word) ) { return SINGULAR;}

	if( AMBIGUOUS[word]){return IDK;}

	if(/s$/.test(word) ){return PLURAL;}

	if(/^(many|most|some|all)\s/.test(word) ){return PLURAL;} 

	if( plurals[word]){return PLURAL;}

	return SINGULAR;
}