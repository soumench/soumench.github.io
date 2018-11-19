/*Created by Soumen Chakraborty - 2018 - Strictly For Educational, Non-profit and Non-Commercial Purpose */
function shuffle(array){var count = array.length, randomnumber;
            while( count>1){randomnumber = Math.floor ( Math.random() * count-- ); 
                if(randomnumber != count){swap(array,count,randomnumber);}}}
function swap(array, a, b){var temp=array[a]; array[a]=array[b]; array[b]=temp;}