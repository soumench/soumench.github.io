"use strict";

// var STYLESHEET = 'lsk2'; //  = 'lsk';
	
	
	
var body = document.getElementsByTagName("BODY")[0];
var	head = document.getElementsByTagName("HEAD")[0];	

function css(file)	{
	var link;
	link = document.createElement("LINK");
    link.rel = "stylesheet"
    link.type = "text/css"
    link.href = "css/lsk.css"
	link.title="old style"
    head.appendChild(link);	
	link = document.createElement("LINK");
    link.rel = "alternate stylesheet"
    link.type = "text/css"
    link.href = "css/lsk2.css"
	link.title="experimental style"
    head.appendChild(link);	
console.log("appended two links");	
/*	
<link rel="stylesheet" type="text/css" href="http://example.com/css/blue.css" title="old style">
<link rel="alternate stylesheet" type="text/css" href="http://example.com/css/pink.css" title="experimental style"> 	
*/
	
}

(function()	{	
  /*
	var p=document.createElement("p");	
	body.appendChild(p);
	p.appendChild(document.createTextNode(
	   " .referrer : "+document.referrer+
	   " .URL : "+document.URL+
	   " .documentURI : "+document.documentURI+
	   ""
	  ));		
	  */
	  
// 	css(STYLESHEET); // doing this is not a good idea, we wan styÃ±les for people that deactivated javascript too
	
	
	
})();	

var gcookie={

	set: function(cname,cvalue,exminutes) {
	  document.cookie = cname + "=" + cvalue + ";Max-Age="+exminutes*60 + ";path=/";
	},

	get: function (name) {
	  name += "=";
	  var ca = decodeURIComponent(document.cookie).split(';');  
	  for(var i = 0; i < ca.length; i++) {
		var c = ca[i].replace(/^\s+/,"");
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	  }
	  return "";
	},

	delete: function (name){
		document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	}
}


var jumper={
	flash:function (elem){
		elem.style.borderColor = "red";		
		var stopper=setInterval(
		   (function(){
			   var c=elem.style.color;
			   var b=elem.style.background;
			   var cnt=5;
			   return function(){
				   --cnt;
				   if(cnt<=0){
					elem.style.color=c;
					elem.style.background=b;					   
					clearInterval(stopper);
				   }
				   else
				   {
					elem.style.color=["white", "black"][1-(cnt%2)];
					elem.style.background=["white", "black"][cnt%2];
				   }
			   }
		   })()	
		,150);		
		elem.style.color="white";
		elem.style.background="black";
		elem.style.color="white";
	},
	
	init: function (lbl){	
		var label=gcookie.get('label'); if(label){		
//console.log("when doing init label was "+label);
			var elem=document.getElementById(label);
			if(elem)this.flash(elem);		
//else console.log("we found no element with id === ("+label+")");
		}
		this.modlinkswithclass(lbl);
	},

  when_clicking_link: function (){    
    var label=this.href; 
	label = ( /#/.test(label) ) ?  label.replace(/.*#/,"") : ""; 
	gcookie.set('label', label?encodeURIComponent(label):"" , 1);
	var ele;
//console.log("label is "+label);	
//console.log("getele is "+document.getElementById(label));	
    
	if(label){
		ele=document.getElementById(label);
		if(ele){
// now we should test if the href goes into this same file or not
// if it is not a self link, the script in the next page will make flash and the following two lines are wasteful
//otherwise they are necessary
			// ele.style.borderColor = "red";		
			jumper.flash(ele);
		}
	}
  },

	modlinkswithclass: function (clas){
	  var links=document.getElementsByClassName(clas);   
	  var that=this;
	  for(var i=0;i<links.length;++i){
		 var ele=links[i];
		 ele.addEventListener("click", 
			(function(){
				var el=ele;
				return function(){that.when_clicking_link.call(el)}
			})()
		 );
	  }
	}  
}  

console.log('loaded jumper');