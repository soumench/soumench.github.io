function form(x){
	if(x<10)return "0"+x;
	return x;	
}

(function(){
	var filename = location.pathname.split("/").slice(-1)
    var matches = /^(.+?)(\d+)\.html/.exec(filename)
    if ( !matches || matches[2] <= 0) return;
    var filenumber = parseInt(matches[2], 10)
	var name=matches[1]
	var body = document.getElementsByTagName("body")[0];
	var prevnext=document.createElement("p");
	body.appendChild(prevnext);
	var prev = document.createElement("a");
	prevnext.appendChild(prev);
	prevnext.appendChild(document.createTextNode(" (this is step "+form(filenumber) + ") "));
	var next = document.createElement("a");
	prevnext.appendChild(next);
	prev.innerHTML=`back to step ${form(filenumber-1)} &larr;`
	next.innerHTML=`&rarr; forward to step ${form(filenumber+1)}`
	prev.href=name+form(filenumber-1)+".html"
	next.href=name+form(filenumber+1)+".html"		
	 
} )();