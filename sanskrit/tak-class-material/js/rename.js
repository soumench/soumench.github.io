function init() {
    e("header").innerHTML = document.title = title;
    const len = Z.length;

    let c;
    for (c = 0; c < len; ++c) {
        let doertxt = Z[c];
        let objtxt = Ze[c];
     //   e("trace3").innerHTML += doertxt + " -> " + objtxt;
        e((c + 1).toString()).value = doertxt + " > " + objtxt;
        e((c + 7).toString()).value = doertxt + " > " + objtxt;
        e((c + 13).toString()).value = doertxt + " > " + objtxt;
    }

}



 
 



 const etrace2 = e("unsandhi");
        
 var sandhion=true;
        
 var perm = [0, 1, 2];
 const sas = e("sasentence");
 const ens = e("ensentence");


  let doerSanskrit = doerEnglish = verbSanskrit = verbEnglish = objSanskrit = objEnglish = "";
  const doerBtnStart = 1;  const doerBtnEnd = 6;
  const verbBtnStart = 7;  const verbBtnEnd = 12;
  const objBtnStart = 13;  const objBtnEnd = 18;

  getDoer("1");  getVerb("7");  getObj("13");


 function makeBtnWhite(btnStart, btnEnd) {
     let i = btnStart;
     while (i <= btnEnd) {
         e(i.toString()).style.borderColor = "#fff";
         ++i;
     }
 }

 function eraseDoer() {
     doerSanskrit = doerEnglish = "";
     makeBtnWhite(doerBtnStart, doerBtnEnd);
     output();
 }

 function eraseVerb() {
     verbSanskrit = verbEnglish = "";
     makeBtnWhite(verbBtnStart, verbBtnEnd);
     output();
 }

 function eraseObj() {
     objSanskrit = objEnglish = "";
     makeBtnWhite(objBtnStart, objBtnEnd);
     output();
 }




function getObj(clicked_id) {
    makeBtnWhite(objBtnStart, objBtnEnd);
    e(clicked_id).style.borderColor = "blue";

    let doerString = e(clicked_id).value;
    let index = doerString.indexOf(">");
    objSanskrit = doerString.substr(0, index);
    objEnglish = doerString.substr(index + 1);

    output();
}

function getVerb(clicked_id) {
    makeBtnWhite(verbBtnStart, verbBtnEnd);
    e(clicked_id).style.borderColor = "green";

    let doerString = e(clicked_id).value;
    let index = doerString.indexOf(">");
    verbSanskrit = doerString.substr(0, index);
    verbEnglish = doerString.substr(index + 1);

    output();
}

function getDoer(clicked_id) {
    makeBtnWhite(doerBtnStart, doerBtnEnd);
    e(clicked_id).style.borderColor = "red";

    let doerString = e(clicked_id).value;





    let index = doerString.indexOf(">");
    doerSanskrit = doerString.substr(0, index);
    doerEnglish = doerString.substr(index + 1);

    output();
}
        


function output() {
    var A = [doerSanskrit, verbSanskrit, objSanskrit];
    var B = ['<span class="red">' + doerSanskrit + "</span>", '<span class="green">' + verbSanskrit + "</span>", '<span class="blue">' + objSanskrit + "</span>"];
    sas.innerHTML = A[perm[0]] + " " + A[perm[1]] + " " + A[perm[2]];
    ens.innerHTML = doerEnglish + " " + verbEnglish + " " + objEnglish;
    if (sandhion) sas.innerHTML = makesandhi(sas.innerHTML);
    etrace2.innerHTML = B[perm[0]] + " " + B[perm[1]] + " " + B[perm[2]];
}




function swap12(){ swap(perm,0,1);    output(); }
        
function swap23(){ swap(perm,1,2);    output(); }