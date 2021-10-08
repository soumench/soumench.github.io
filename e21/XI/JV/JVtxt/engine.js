//use strict;
function e(id) {return document.getElementById(id);}

const topicName = " ~ Jimmy Valentine ~ ";
e("pageTitle").innerHTML = topicName;

var path = window.location.pathname;
var page = path.split("/").pop();
var thisPage = page.slice(2,-5);
e("pageNum").innerHTML = "[  Page: " + thisPage + "  ]";



var nextPage= "jv"+ num.toString(thisPage);

e("pageindicator").innerHTML= hello;




/*Programmed by Soumen Chakraborty*/