/*Past Participle Generator Engine Version: 1.0*/

let participleof = {
 awake: "awoken", burn: "burnt", burned: "burnt", wake: "woken", woke: "woken", bite: "bitten", bit: "bitten", put: "put", cut: "cut", set: "set",
 let: "let", read: "read", bet: "bet", burst: "burst", burst: "burst", cost: "cost", feel: "felt", felt: "felt", hit: "hit", shut: "shut", hurt: "hurt", hurt: "hurt", shed: "shed", shed: "shed", slit: "slit", spread: "spread", thrust: "thrust", wet: "wet", lead: "led", led: "led", do :"done", did: "done", go: "gone", went: "gone", take: "taken", took: "taken", shake: "shaken", shook: "shaken", give: "given", gave: "given", drive: "driven", drove: "driven", say: "said", said: "said", pay: "paid", paid: "paid", know: "known", knew: "known", grow: "grown", grew: "grown", flies: "flown", fly: "flown", flew: "flown", do :"done", did: "done", does: "done", go: "gone", goes: "gone", breed: "bred", bred: "bred", split: "split", buy: "bought", bought: "bought", bring: "brought", brought: "brought",
 catch: "caught", caught: "caught", think: "thought", thought: "thought", make: "made", made: "made", say: "said", said: "said", come: "come", came: "come", see: "seen", saw: "seen", give: "given", gave: "given", drive: "driven", drove: "driven", get: "got/gotten", got: "got/gotten", write: "written", wrote: "written", wear: "worn", wore: "worn", tear: "torn", tore: "torn", bear: "borne/born", bore: "borne/born", find: "found", found: "found", bind: "bound", bound: "bound", choose: "chosen", chose: "chosen", speak: "spoken", spoke: "spoken", draw: "drawn", drew: "drawn", show: "shown", showed: "shown", rise: "risen", rose: "risen", fall: "fallen", fell: "fallen",
 break: "broken", broke: "broken", ring: "rung", rang: "rung", spring: "sprung", sprang: "sprung", send: "sent", sent: "sent", spend: "spent", spent: "spent", sell: "sold", sold: "sold", tell: "told", told: "told", feel: "felt", felt: "felt", deal: "dealt", dealt: "dealt", stand: "stood", stood: "stood", understand: "understood", understood: "understood", lose: "lost", lost: "lost", meet: "met", met: "met", run: "run", ran: "run", lie: "lain", lay: "lain", lay: "laid", laid: "laid", mean: "meant", meant: "meant", keep: "kept", kept: "kept", hold: "held", held: "held", build: "built", built: "built", hear: "heard", heard: "heard", sit: "sat", sat: "sat", begin: "begun", began: "begun", beat: "beaten", beat: "beaten", eat: "eaten", ate: "eaten", become: "become", became: "become", blow: "blown", blew: "blown", drink: "drunk", drank: "drunk", feed: "fed", fed: "fed", hang: "hung", hung: "hung", hide: "hidden", hid: "hidden", leave: "left", left: "left", light: "lit", lit: "lit", steal: "stolen", stolen: "stolen", shoot: "shot", shot: "shot", shine: "shone", shone: "shone", sleep: "slept", slept: "slept", stick: "stuck", stuck: "stuck", teach: "taught", taught: "taught", weave: "woven", wove: "woven", win: "won", won: "won", sweep: "swept", swept: "swept",
 throw :"thrown", threw: "thrown", swing: "swung", swung: "swung", swear: "sworn", swore: "sworn", slide: "slid", slid: "slid", sink: "sunk", sank: "sunk", ride: "ridden", rode: "ridden", lend: "lent", lent: "lent", freeze: "frozen", froze: "frozen", fight: "fought", fought: "fought", forget: "forgotten", forgot: "forgotten", sing: "sung", sang: "sung", swim: "swum", swam: "swum", learn: "learnt", learnt: "learnt", burn: "burnt", burned: "burnt", wake: "woken", woke: "woken", bite: "bitten", bit: "bitten", breed: "bred", bred: "bred", bleed: "bled", bled: "bled", broadcast: "broadcast", broadcast: "broadcast", forecast: "forecast", forecast: "forecast", cast: "cast", cast: "cast", dug: "dug", dug: "dug", forbid: "forbidden", forbade: "forbidden", flee: "fled", fled: "fled", fling: "flung", flung: "flung", forsake: "forsaken", forsook: "forsaken", grind: "ground", ground: "ground", overtake: "overtaken", overtook: "overtaken", prove: "proven", proved: "proven", seek: "sought", sought: "sought", slay: "slain", slew: "slain", slink: "slunk", slunk: "slunk", sow: "sown", sowed: "sown", spin: "spun", spun: "spun", stink: "stunk", stank: "stunk", stride: "stridden", strode: "stridden", strike: "struck", struck: "struck", strive: "striven", strove: "striven", swear: "sworn", swore: "sworn", swell: "swollen", swelled: "swollen", wind: "wound", wound: "wound", tread: "trodden", trod: "trodden", weep: "wept", wept: "wept", wring: "wrung", wrung: "wrung", string: "stung", stung: "stung", /*some regular verbs exceptions*/ refer: "referred", prefer: "preferred", defer: "deferred", pen: "penned", visit: "visited", offer: "offered", suffer: "suffered", gather: "gathered", hammer: "hammered", whisper: "whispered", water: "watered", shelter: "sheltered", enter: "entered", scatter: "scattered", matter: "mattered", shiver: "shivered", deliver: "delivered", cover: "covered", discover: "discovered", hover: "hovered", flower: "flowered", answer: "answered", lower: "lowered", higher: "highered", need: "needed", proceed: "proceeded", succeed: "succeeded", totter: "tottered", sharpens: "sharpened", happens: "happened", loiters: "loitered", saunters: "sauntered", listens: "listened", saws: "sawed", rows:"rowed"
        };
       
    function makeparticiple(verb) { let withouts; let part;
           
        if(participleof[verb]){return participleof[verb];}
        if(/s$/.test(verb) ){
            withouts = verb.replace(/s$/,"");
            part=participleof[withouts] ;
            if( part ){return part;}
        }
        if(/ed$/.test(verb) ){return verb;}
        if(/ys$/.test(verb) ){return verb.replace (/ys$/,"yed");}
        if(/[^aeiou][aeiou][^aeiou]s$/.test(verb) ){return verb.replace(/(.)s$/,"$1$1ed");}
        if(/[^aeiuo]er$/.test(verb) ){return verb + "ed";}
        if(/en$/.test(verb) ){return verb+"ed";}
        if(/[aeiou]y$/.test(verb) ){return verb + "ed";}
        if(/y$/.test(verb) ){return verb.replace (/y$/,"ied");}
        if(/e$/.test(verb) ){return verb.replace (/e$/,"ed");}
        if(/es$/.test(verb) ){return verb.replace (/es$/,"ed");}
        if(/ss$/.test(verb) ){return verb.replace (/ss$/,"ssed");}
        if(/s$/.test(verb) ){return verb.replace (/s$/,"ed" );}
        if(/[wx]$/.test(verb)){return verb+"ed";}
        if(/[^aeiou][aeiou][^aeiou]$/.test(verb) ){return verb.replace(/(.)$/,"$1$1ed");}
        if(/^(.+)([aeiou])(.)$/.test(verb) ){return verb+"ed";}

        return verb+"ed";
    }        
    
      