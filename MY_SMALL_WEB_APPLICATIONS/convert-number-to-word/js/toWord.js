
function NumToWord(inputNumber) {
            let str = new String(inputNumber);
    
            e("trace2").innerHTML= numToWords_int(str); // new addition
    
            str = new String(inputNumber);
            let splt = str.split("");
            let rev = splt.reverse();
            const once = ['ZERO', ' ONE', ' TWO', ' THREE', ' FOUR', ' FIVE', ' SIX', ' SEVEN', ' EIGHT', ' NINE'];
            const twos = ['TEN', ' ELEVEN', ' TWELVE', ' THIRTEEN', ' FOURTEEN', ' FIFTEEN', ' SIXTEEN', ' SEVENTEEN', ' EIGHTEEN', ' NINETEEN'];
            const tens = ['', 'TEN', ' TWENTY', ' THIRTY', ' FORTY', ' FIFTY', ' SIXTY', ' SEVENTY', ' EIGHTY', ' NINETY'];

            let numLength = rev.length;
            if(numLength>9){e("trace").innerHTML="Please enter a smaller number."; return;}
            let word = new Array();
            let j = 0;
            for (i = 0; i < numLength; i++) {
                switch (i) {
                case 0:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {word[j] = '';}
                    else {word[j] = '' + once[rev[i]];}
                    word[j] = word[j];
                    break;
                case 1:
                    aboveTens(); break;
                case 2:
                    if (rev[i] == 0) {word[j] = '';}
                    else if ((rev[i - 1] == 0) || (rev[i - 2] == 0)) {
                        word[j] = once[rev[i]] + " HUNDRED ";
                    }
                    else {word[j] = once[rev[i]] + " HUNDRED AND";}
                    break;
                case 3:
                    if (rev[i] == 0 || rev[i + 1] == 1) {word[j] = '';}
                    else {word[j] = once[rev[i]];}
                    if ((rev[i + 1] != 0) || (rev[i] > 0)) {
                        word[j] = word[j] + " THOUSAND";
                    }
                    break;
                case 4:
                    aboveTens(); break;
                case 5:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {word[j] = '';}
                    else {
                        word[j] = once[rev[i]];
                    }
                    if (rev[i + 1] !== '0' || rev[i] > '0') {
                        word[j] = word[j] + " LAKH";
                    }
                    break;
                case 6:
                    aboveTens(); break;
                case 7:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)) {word[j] = '';}
                    else {
                        word[j] = once[rev[i]];
                    }
                    if (rev[i + 1] !== '0' || rev[i] > '0') {
                        word[j] = word[j] + " CRORE";
                    }                
                    break;
                case 8:
                    aboveTens(); break;
                /*Optional. 
                case 9:
                    if ((rev[i] == 0) || (rev[i + 1] == 1)){word[j] = '';}
                    else {word[j] = once[rev[i]];}
                    if (rev[i + 1] !== '0' || rev[i] > '0') {
                        word[j] = word[j] + " Arab";
                    }
                    break;
                case 10:
                    aboveTens(); break;*/
                default: break;
            }
            j++;
        }

        function aboveTens() {
            if (rev[i] == 0) { word[j] = ''; }
            else if (rev[i] == 1) { word[j] = twos[rev[i - 1]]; }
            else { word[j] = tens[rev[i]]; }
        }

        word.reverse();
        let finalOutput = '';
        for (i = 0; i < numLength; i++) {
            finalOutput = finalOutput + word[i];
        }
        e("trace").innerHTML = finalOutput;
    
        
        
    }

/*ACKNOWLEDGEMENT : 
        script source: https://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
Modded by Soumen, August 2018*/


const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const str = x => String(x);
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0,n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f (g (x));
const not = x => !x;
const chunk = n => xs =>
  isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];

// numToWords :: (Number a, String a) => a -> String
let numToWords_int = n => {
  
  let a = [    
    '', 'ONE', 'TWO', 'THREE', 'FOUR',		
    'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE',		
    'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN',		
    'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN'		
  ];
  
  let b = [
    '', '', 'TWENTY', 'THIRTY', 'FORTY',
    'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'
  ];
  
  let g = [
    '', 'THOUSAND', 'MILLION', 'BILLION', 'TRILLION', 'QUADRILLION',
    'QUINTILLION', 'SEXTILLION', 'SEPTILLION', 'OCTILLION', 'NONILLION'
  ];
  
  // this part is really nasty still
  // i might edit this again later to show how Monoids could fix this up
  let makeGroup = ([ones,tens,huns]) => {
    return [
      num(huns) === 0 ? '' : a[huns] + ' HUNDRED ',
      num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
      a[tens+ones] || a[ones]
    ].join('');
  };
  
  let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;
  
  if (typeof n === 'number')
    return numToWords(String(n));
  else if (n === '0')
    return 'ZERO';
  else
    return comp (chunk(3)) (reverse) (arr(n))
      .map(makeGroup)
      .map(thousand)
      .filter(comp(not)(isEmpty))
      .reverse()
      .join(' ');
};