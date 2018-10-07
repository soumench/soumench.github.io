function cleaninput(input) {
	return input.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s\s+$/g, " ").toLowerCase();
}

function e(id) {
	return document.getElementById(id);
}

function write(id, txt){e(id).innerHTML = txt;}

/*copyright- Soumen Chakraborty 2018*/