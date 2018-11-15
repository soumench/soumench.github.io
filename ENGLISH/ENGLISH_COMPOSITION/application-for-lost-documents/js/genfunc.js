function getCurrentDate() {
            let dd = new Date().getUTCDate();
            let mm = new Date().getUTCMonth() + 1;
            let yy = new Date().getUTCFullYear();
            return dd + "/" + mm + "/" + yy;
        }
function firstUpperCase(txt) {return txt.substr(0, 1).toUpperCase() + txt.substr(1);}        
function makeReverse(str){return str.split('-').reverse().join('-');}
function e(id){return document.getElementById(id);}
