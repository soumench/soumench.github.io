"use strict";
    
(function()    {
    
    var body = document.getElementsByTagName("BODY")[0];
    var p=document.createElement("p");
    var a=document.createElement("a");
    
    p.appendChild(a);
    a.innerHTML="back to index"
    a.href="index.html"
    
    var elemDiv = document.createElement('div');
    elemDiv.className="bottomdiv"
      
    body.append(elemDiv)
    elemDiv.appendChild(p)    
})(); 

