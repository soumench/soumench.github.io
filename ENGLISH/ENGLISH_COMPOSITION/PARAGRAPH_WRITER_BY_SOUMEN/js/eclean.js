function cleaninput(input) {
	return input.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s\s+$/g, " ").toLowerCase();
}

function e(id) {
	return document.getElementById(id);
}

function firstUpperCase(txt) {
    return txt.substr(0, 1).toUpperCase() + txt.substr(1);
}
		