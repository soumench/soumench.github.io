function getCurrentDate() {
	let dd = new Date().getUTCDate();
	let mm = new Date().getUTCMonth() + 1;
	let yy = new Date().getUTCFullYear();
	return dd + "/" + mm + "/" + yy;
}