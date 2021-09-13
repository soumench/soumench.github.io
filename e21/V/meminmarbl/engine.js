

const topicName = "~ Memory in Marble ~";
e("pageTitle").innerHTML = topicName;

const path = window.location.pathname;
const page = path.split("/").pop();
var thisPage = page.slice(3,-5); 
e("pageNum").innerHTML = "[  Page: " + thisPage + "  ]";

function e(id) {return document.getElementById(id);
}
/*Programmed by Soumen Chakraborty*/