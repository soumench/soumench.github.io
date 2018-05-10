function addING(word){
		   let exceptions = {recur:"recurring",slur:"slurring",bar:"barring",par:"parring",star:"starring",tar:"tarring",war:"warring",jar:"jarring",occur:"occurring",pur:"purring"/*,guess:"guessing",bash:"bashing"*/};
		   
		   if( exceptions[word]){return exceptions[word];}
		   		   
		   if(/[aeiou][aeiou]$/.test(word) ){return word+"ing" ;}
		   if(/e$/.test(word) ) {return word.replace( /e$/,"ing" );}
		   if(/panic$/.test(word) ) { return word+ "king" ; }
			/*if(/hope$/.test (word) ){ return "hoping" ; }
						*/
			if(/[wxyr]$/.test (word) ){ return word+"ing" ; }
		   
		   if(/[aeiou][aeiou][^aeiou]$/.test(word) ){ return word+"ing" ; }
			
			if(/[aeiou][^aeiou]$/.test(word) ){return word.replace( /(.)$/,"$1$1ing" );}
		    
		   
		    /*if(/[^aeiouy]/.test(word) ){return "(...ing)" ;}*/
			
			return word+"ing";
		}
       