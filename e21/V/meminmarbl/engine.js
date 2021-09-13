

var topicName = "~ Memory in Marble ~";
document.getElementById("pageTitle").innerHTML = topicName;

var path = window.location.pathname;
var page = path.split("/").pop();
var thisPage = page.slice(3,-5); 
document.getElementById("pageNum").innerHTML = "[  Page: " + thisPage + "  ]";