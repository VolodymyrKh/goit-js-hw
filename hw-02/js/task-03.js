'use strict'
const findLongestWord = function(string){
    const wordsOfString = string.split(' ');
    let longestWord = wordsOfString[0];

    for(const word of wordsOfString){
        if (word.length > longestWord.length){
            longestWord = word;
        } 
    }

    return longestWord;
}

console.log('Найдовше слово: ', findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log('Найдовше слово: ', findLongestWord('Google do a roll'));
console.log('Найдовше слово: ', findLongestWord('May the force be with you'));