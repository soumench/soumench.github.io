/*"use strict";*/

function init(){
            var cgst = e("cgst"); var sgst = e("sgst"); var total = e("total"); var cost; var gst;
            e("cost").addEventListener("change", gstUpdate);           
            e("gst").addEventListener("change", gstUpdate);
            e("totalPaid").addEventListener("change", gstFind);
            e("gstPaid").addEventListener("change", gstFind);  
    
    
     var totalPaid ;  var gstPaid ;  var cgstPaid ; var sgstPaid;  var costPrice ;  var totalGstPaid;  
} 

function gstUpdate(){
                cost = parseFloat(e("cost").value); 
                gst = parseFloat(e("gst").value);               
                cost = cost ? cost : 0; /*avoid NaN*/
                gst = gst ? gst :0;
                cgst.innerHTML=gst/2+" \%";
                sgst.innerHTML=gst/2+" \%";
                gstTotal.innerHTML=roundToTwo(cost*gst/100)+" INR";
                total.innerHTML=Math.round(cost+cost*gst/100,0)+" INR";
}  



/*
Copyright: Soumen Chakraborty 2019
https://soumen-here.blogspot.com/
Strictly for Educational and Non-commercial Purpose
*/