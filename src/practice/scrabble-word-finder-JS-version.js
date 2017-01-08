/*
    Find all allowed words that can be used in scrabble
    Scrabble letters = "[F, A, I, E, K, M]"
    Output = ['WORD1', 'WORD2', 'WORD3']

    It uses dictionary API to get a valid word combinations
*/
var dictionaryData = ['ABC', 'SBA', 'BAS'];
console.log(getAllLettersWords('ABCD'));

function getAllLettersWords(str) {
    var possibleWords = getAllCombinations(str);
    for (var i = 0; i < possibleWords.length; i++) {
        if (isValidWord(possibleWords[i])) {
            return "Word found: " + possibleWords[i];
        }
    }
    return "no word found...";

    function isValidWord(possibleWord) {
        var _ = require('lodash');
        return _.includes(dictionaryData, possibleWord);
    }
}


function getAllCombinations(input) {
    var counter = [],
        anagrams = [],
        chars = input.split(''),
        length = chars.length,
        i;

    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
        } else {
            counter[i] = 0;
            i++;
        }
    }

    return anagrams;
}

function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}