						/*TENSE-DETECTOR SCRIPT */

let pastverbs = {went:1,did:1,came:1,had:1,was:1,heard:1,sawed:1,hopped:1,hoped:1, knew:1, got:1, made:1, thought:1, sang:1, slept:1, arose:1, awoke:1, bore:1, became:1, began:1, bound:1, bought:1, could:1,
		chose:1, dug:1, ate:1, fell:1, fought:1, found:1, fled:1, got:1, grew:1, paid:1, ran:1, sold:1, said:1,
		shook:1, sat:1, spoke:1, told:1, wore:1, wrote:1, wound:1, won:1, stood:1, understood:1, sent:1
		};
        
		let presentverbs = {
		speed:1, bed:1, seed:1, feed:1, weed:1, bleed:1, shed:1, need:1, sled:1, breed:1, succeed:1, 
		proceed:1, wed:1, heed:1, embed:1, exceed:1, shred:1, pretend:1, tend:1, tender:1,	
			
		go:1,do:1,come:1,have:1,costs:1,reads:1,sees:1,look:1,hear:1,goes:1,does:1,is:1,comes:1,has:1, eats:1,eat:1,hears:1, saws:1, hopes:1,hops:1, know:1,knows:1, get:1, uses:1, think:1, want:1, find:1,
		tell:1, work:1, call:1, ask:1, need:1, feel:1, keep:1, let:1, help:1, talk:1, turn:1, show:1, play:1,
		bring:1, sit:1, pay:1, stand:1, meet:1, lead:1, watch:1, add:1, grow:1, open:1, walk:1, learn:1,
		understand:1, follow:1, stop:1, win:1, offer:1, remember:1, consider:1, appear:1, buy:1, wait:1,
		expect:1, build:1, stay:1, fall:1, reach:1, kill:1, remain:1, suggest:1, pass:1, sell:1, report:1,
		pull:1, push:1, finds:1, send:1, throw:1, 
		};
        
		let both = {hit:1,cost:1,saw:1,read:1,cut:1,hurt:1,spread:1, cast:1, quit:1, shed:1, set:1, put:1};
        
        /*let IDK=0;
        let PRESENT=1;
        let PAST=2;
        let BOTH=3;
        let pretty=["IDK","PRESENT","PAST","BOTH"];*/
		
		const ID=0; const PR = 1; const PA=2; const BO=3;
		let pretty=["ID","PR","PA","BO"];        
        function tensedetector(word){
            
            if(/^aeiou$/.test(word) ) {return ID;}
            if(presentverbs[word]){return PR;}
			 if(word.length<=2){ return ID;}
			if( pastverbs[word]){return PA;}
			if(/s$/.test(word) ) {return PR;}
			if(/ed$/.test(word) ) {return PA;}
            if(both[word]){ return BO;}
                       
            if(/[^ed]$/.test(word) ) {return PR;}
                    
            return PR;
        }