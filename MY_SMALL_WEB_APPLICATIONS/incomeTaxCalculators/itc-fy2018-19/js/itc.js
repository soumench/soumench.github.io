/*Strictly for Non-commercial, Educational and Research Purpose
I wrote this program to teach coding to my students.
For Actual Tax Calculation, refer to the official Site of the IT department. 
Copyright: Soumen Chakraborty - 2018 
All Rights Reserved*/
function update(){
    var Sal = parseInt(sal.value)
    var HBLINT = parseInt(hblInt.value)
    var savint = savInt.value;
    var depoint = parseInt(depoInt.value);
    var C80 = parseInt(c80.value)
    var med = parseInt(medi.value)
    var stdD = parseInt(stdd.value)
    var TDS = parseInt(tds.value);                        
    Sal = Sal ? Sal : 0
    HBLINT = HBLINT?HBLINT:0
    savint = savint? savint :0
    depoint = depoint ? depoint :0
    C80 = C80 ? C80 : 0
    med = med ? med : 0
    TDS=TDS ? TDS :0    
    if(Sal>=120012 && Sal<=180000)ptax.value=1320
    else if(Sal>=180012 && Sal<=300000)ptax.value=1560
    else if(Sal>=300012 && Sal<=480000)ptax.value=1800
    else if(Sal>=480000)ptax.value=2400
    else ptax.value=0            
    var tta80 = 10000;
    savint = savint>tta80 ? savint-tta80 : 0;
    var  totalIncome = Sal- ptax.value - HBLINT + savint + depoint
    totalincome.innerHTML= totalIncome + ' INR'            
    if(C80 >=150000)C80=150000
    med>75000 ? 75000 : med
    var totalDeduction = C80 + med + stdD
    totald.innerHTML = totalDeduction + ' INR'            
    var taxableIncome = totalIncome - totalDeduction            
    taxableincome.innerHTML= taxableIncome + ' INR'
    var tax;
    if(taxableIncome<=300000)tax=0
    else if(taxableIncome>300000 && taxableIncome<=350000)tax=(taxableIncome-300000)*5/100
    else if(taxableIncome>300000 && taxableIncome<=500000)tax=(taxableIncome-250000)*5/100-2500
    else if(taxableIncome>500000 && taxableIncome<=1000000)tax=(taxableIncome-500000)*20/100+12500 
    else if(taxableIncome>1000000 )tax=(taxableIncome-1000000)*30/100+112500
    Tax.innerHTML=Math.round(tax) + ' INR'
    var cess = tax*4/100
    Cess.innerHTML=Math.round(cess) + ' INR'
    var TOTALTAX = tax+cess
    totalTax.innerHTML=Math.round(TOTALTAX) + ' INR'            
    var tbp = Math.round(TOTALTAX-TDS)
    
    tobepaid.innerHTML=tbp<=0 ? `nil, Your Refund: ${(tbp*-1)}<br> ( আর কোনো আয়কর দিতে হবে না, আপনার রিফান্ড হবে ${(tbp*-1)} টাকা )` : `Tax to be paid: Rs.${tbp}<br> ( আপনাকে আরও ${tbp} টাকা আয়কর দিতে হবে )`
    tobepaid.style.color= tbp<=0 ? "green" :"red"
}