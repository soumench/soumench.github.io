/*Strictly for Non-commercial, Educational and Research Purpose
I wrote this program to teach coding to my students.
For Actual Tax Calculation, refer to the official Site of the IT department. 
Copyright: Soumen Chakraborty - 2018 
All Rights Reserved*/
function update(){
            var Sal = parseInt(sal.value)
            if(Sal>=120012 && Sal<=180000)ptax.value=1320
            else if(Sal>=180012 && Sal<=300000)ptax.value=1560
            else if(Sal>=300012 && Sal<=480000)ptax.value=1800
            else if(Sal>=480000)ptax.value=2400
            else ptax.value=0            
            var savint = savInt.value; var tta80 = 10000;
            savint = savint>tta80 ? savint-tta80 : 0;
            var depoint = parseInt(depoInt.value, 10)            
            var  totalIncome = sal.value- ptax.value - hblInt.value + savint + depoint
            totalincome.innerHTML= totalIncome + ' INR'            
            var C80 = parseInt(c80.value)
            if(C80 >=150000)C80=150000
            var med = parseInt(medi.value)
            med>75000 ? 75000 : med
            var stdD = parseInt(stdd.value)
            var totalDeduction = C80 + med + stdD
            totald.innerHTML = totalDeduction + ' INR'            
            var taxableIncome = totalIncome - totalDeduction            
            taxableincome.innerHTML= taxableIncome + ' INR'
            var tax;
            if(taxableIncome<=300000)tax=0
            else if(taxableIncome>300000 && taxableIncome<=350000)tax=(taxableIncome-300000)*5/100
            else if(taxableIncome>300000 && taxableIncome<500000)tax=(taxableIncome-250000)*5/100-2500
            else if(taxableIncome>500000)tax=(taxableIncome-500000)*20/100+12500                        
            Tax.innerHTML=Math.round(tax) + ' INR'
            var cess = tax*4/100
            Cess.innerHTML=Math.round(cess) + ' INR'
            var TOTALTAX = tax+cess
            totalTax.innerHTML=Math.round(TOTALTAX) + ' INR'            
            var TDS = parseInt(tds.value);
            var tbp = Math.round(TOTALTAX-TDS)
            tobepaid.innerHTML=tbp<=0 ? "nil ( আপনাকে আর কোনো tax দিতে হবে না )" : tbp + ' INR'
            tobepaid.style.color= tbp<=0 ? "green" :"red"
}