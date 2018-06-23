function animate_fall(id){
	const elem = e(id);
	t = elem.offsetTop;
	l = elem.offsetLeft;		
	clearInterval(time);
	time= setInterval(function(){ 
		i++; t+=i;
		move(id, t+"px", l+"px");
		if(t>=556){
			clearInterval(time);
			i=0;
			del(id); 
		}	
	}, 15);
}	
function move(id, t, l){
	e(id).style.position="absolute";
	e(id).style.top=t;
	e(id).style.left=l;
}
function del(id){e(id).parentNode.removeChild(e(id));}	
function e(id){return document.getElementById(id);}