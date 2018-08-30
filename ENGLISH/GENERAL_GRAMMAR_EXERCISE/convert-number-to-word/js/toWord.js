function NumToWord(inputNumber) {
            let str = new String(inputNumber);
            let splt = str.split("");
            let rev = splt.reverse();
            const once = ['ZERO', ' ONE', ' TWO', ' THREE', ' FOUR', ' FIVE', ' SIX', ' SEVEN', ' EIGHT', ' NINE'];
            const twos = ['TEN', ' ELEVEN', ' TWELVE', ' THIRTEEN', ' FOURTEEN', ' FIFTEEN', ' SIXTEEN', ' SEVENTEEN', ' EIGHTEEN', ' NINETEEN'];
            const tens = ['', 'TEN', ' TWENTY', ' THIRTY', ' FORTY', ' FIFTY', ' SIXTY', ' SEVENTY', ' EIGHTY', ' NINETY'];

            numLength = rev.length;
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

                            /*This is optional. 

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
        document.getElementById("trace").innerHTML = finalOutput;
    }