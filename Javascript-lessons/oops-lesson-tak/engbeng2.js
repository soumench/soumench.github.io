
"use strict";

function Part(n, e, b, ed, bd) {
	this.name = n
	this.english = e
	this.bengali = b
	this.engdisplay = ed
	this.bendisplay = bd	
	this.check()
}

Part.prototype.displayfun = function() {
		this.engdisplay.innerHTML = this.english[this.index];
		this.bendisplay.innerHTML = this.bengali[this.index];
	};
	
Part.prototype.check = function() {
		if (this.english.length == this.bengali.length) console.log(this.name + " passed the check");
		else console.log(this.name + " has a list mismatch");
		this.lengthlessone = this.english.length - 1;
		this.index = this.old = Math.floor(Math.random() * this.english.length);
		this.displayfun();
	};
	
Part.prototype.dochange = function() {
		var newvalue;
		do newvalue = Math.floor(Math.random() * this.english.length);
		while (newvalue === this.old);
		this.index = newvalue;
		this.displayfun();
		this.old = newvalue;
	};
	