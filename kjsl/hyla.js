"use strict";
    
(function()    {
    
    var body = document.getElementsByTagName("BODY")[0];
    var p=document.createElement("p");
    var a=document.createElement("a");
    /*body.appendChild(p);*/
    p.appendChild(a);
    a.innerHTML="back to index"
    a.href="index.html"
    
    var elemDiv = document.createElement('div');
    elemDiv.className="bottomdiv"
    elemDiv.style.cssText = 'position:absolute; width:30%;height:5%; opacity:0.7; z-index:100; background:#b2fd96; border: 1px solid black; padding: 2%; border-radius:16px; margin:2%;'; 
   
    body.append(elemDiv)
    elemDiv.appendChild(p)    
})(); 






/*
Home task
1. add a div at the end of the body
2. give a class to that div, such as for instance bottomdiv
3. add the p to that div, not to the body
4. add a stylesheet so that tthe div appears with a nice margin around it






 we added a <p> at the end of the body
  we added an <a> at the end of the <p>
 we gave to that <a> </a> the contrnts and the href we wanted
so that user sees back to index
and when clicking goes to index,htm


line 1:var body = document.getElementsByTagName("BODY")[0];
this the line fetches the body elerment and stores inside the variable body

line2: var p=document.createElement("p");
it creates an element "p" and stores inside var p


line 3: var a=document.createElement("a");
it creates an element "a" and stores inside var a


line 4: body.appendChild(p);
this adds a child element p to body



line 5:  p.appendChild(a);
this adds the hyperlink element  we made earlier as the last child of p



line 6: a.innerHTML="back to index"
it adds the clickable  text to the hyperlink element "a"

line 7: a.href="index.html"
it adds the target, or the destination, or the href 




*/
