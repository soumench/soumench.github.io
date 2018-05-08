function guessNumber(word){
                                
	let singulars = {geas:1,bias:1,virus:1,nucleus:1,iris:1,focus:1,gas:1,stress:1,bus:1,glass:1,mass:1,series:1,lens:1,ms:1,os:1,axis:1,basis:1,boss:1,species:1,brass:1,cross:1,necrosis:1,analysis:1,hypothesis:1,epidermis:1,locus:1,atlas:1,electrolysis:1,fungus:1,radius:1,arthritis:1,ethics:1,loss:1,meiosis:1,alias:1,genus:1,grass:1,gross:1,hepatitis:1,pancreas:1,witness:1,abscess:1,anus:1,census:1,compass:1,metastasis:1};
	
	let plurals = {mice:1,men:1,women:1,people:1,children:1,geese:1,teeth:1,oxen:1,you:1, "a few":1, them:1,fungi:1,loci:1,radii:1};
	
	let AMBIGUOUS = {deer:1, moose:1, series:1, swine:1, salmon:1, means:1, aircraft:1, offspring:1, species:1, grapefruit:1,sheep:1,fish:1,shrimp:1};
	
	if( plurals[word]){return PLURAL;}
	if( singulars[word]){return SINGULAR;}
		
	if(/[aieou]ss$/.test(word) ) {return SINGULAR;}

	if(/^(few|a few|the few|a group of)\s/.test(word) ) {return PLURAL;}

	if(/^an?\s/.test(word) ) { return SINGULAR;}

	if( AMBIGUOUS[word]){return IDK;}

	if(/s$/.test(word) ){return PLURAL;}

	if(/^(many|most|some|all)\s/.test(word) ){return PLURAL;} 

	return SINGULAR;
}