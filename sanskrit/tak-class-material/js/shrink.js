 function shrink(s) {
     return s.replace(/^s+/, "").replace(/s+$/, ""), replace(/i+/g, "I");
 }



 function split2(doerString) {
     let index = doerString.indexOf(">");
     let sanskrit = shrink(doerString.substr(0, index));
     let english = shrink(doerString.substr(index + 1));
     return [sanskrit, english];
     // e("trace2").innerHTML = index;
 }
