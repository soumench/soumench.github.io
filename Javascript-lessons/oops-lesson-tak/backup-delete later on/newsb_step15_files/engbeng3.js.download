
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
	