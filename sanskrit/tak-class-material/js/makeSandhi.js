
function makesandhi(s){
     return s.
           replace(/\s\s+/g," ").replace( /^\s+/, "") . replace ( /\s+$/ , ""  ).
           replace(/ ai/g," Y").replace(/ au/g," W").
           replace (/i[sr] r/g, "I r").
           replace (/a[sr] r/g, "A r").
           replace (/u[sr] r/g, "U r").
           replace (/[sr] r/g, " r").
          replace(/m ([yvrlhszS])/g,"M $1").
          replace(/m ([ntd])/g,"n· $1").
          replace(/m ([Jczj])/g,"J· $1").
          replace(/m ([NTD])/g,"N· $1").
          replace(/m ([Gkg])/g,"G· $1").          
          replace(/m ([mpb])/g,"m· $1").
          replace(/As ([aeiouAIUYWR])/g,"A:: $1").
          replace(/As ([yrlvnmdgbDjh])/g,"A $1").
          replace(/as a/g,"o '").
          replace(/as ([eiouAIURYW])/g,"a:: $1").
          replace(/as ([yrlvnmdgbDjh])/g,"o $1").
          replace(/s ([pk]|ts)/g,"H $1").
          replace(/s ([zc])/g,"z $1").          
          replace(/s ([TS])/g,"S $1").          
          replace(/s ([nmvdgybDaeiouAIUYWR])/g,"r $1")  .
          replace(/t z/g,"cch")  .
          replace(/t c/g,"c c")  .
          replace(/t j/g,"j j")  .
          replace(/t ([nm])/g,"n: $1")  .
          replace(/t h/g,"d dh")  .
          replace(/t ([yrlvdgbaeiouAIURYW])/g,"d $1")  .          
          replace(/n ([zj])/g,"J $1")  .
          replace(/n c/g,"Mz c")  .
          replace(/n t/g,"Ms t")  .
          replace(/([aiu])n ([aeiouYWAIUR])/g,"$1nn $2")  .
          replace(/i i/gi,"I").
          replace(/a a/gi,"A").
          replace(/u u/gi,"U").
          replace(/[Ii] ([aeouAUYWR])/g,"y $1").
          replace(/[uU] ([aeoiAIYWR])/g,"v $1").
          replace(/Y/g,"ai").
          replace(/W/g,"au").
          replace(/[sr]$/,"H");
 }

/*coding & copyright : Professor Ganapati*/