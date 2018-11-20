
"use strict";

function Part(n, e, b, ed, bd) {
	this.name = n
	this.english = e
	this.bengali = b
	this.engdisplay = ed
	this.bendisplay = bd	
	this.init()
}

Part.prototype.displayfun = function() {
		this.engdisplay.innerHTML = this.english[this.index];
		this.bendisplay.innerHTML = this.bengali[this.index];
	};
	
Part.prototype.init = function() {
		if (this.english.length !== this.bengali.length)console.log(this.name + " has a list mismatch");
		this.lengthlessone = this.english.length - 1;
		this.index = Math.floor(Math.random() * this.english.length);
		this.displayfun();
	};
	
Part.prototype.dochange = function() {
		var newvalue;
		newvalue = Math.floor(Math.random() * this.lengthlessone);
		if(newvalue >= this.index)++newvalue;
		this.index = newvalue;
		this.displayfun();		
	};
	

function makebutton(color, f){
	var newbutton;		
	newbutton=document.createElement("input");
	newbuttonbox.appendChild(newbutton);
	newbutton.value=" "
	newbutton.setAttribute("type", "button");
	newbutton.setAttribute("class", "dice");
	newbutton.setAttribute("onclick", "run()");
	newbutton.style.background=color
	newbutton.run=f;			
}
	
function init(title)
{			
	var head = document.getElementsByTagName("HEAD")[0];
	var tit=document.createElement("title");
	head.appendChild(tit);
	tit.innerHTML=title;
	var h1 = document.getElementsByTagName("H1")[0];
	h1.innerHTML=title;
}
	
	
	