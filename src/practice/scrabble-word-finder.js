/*
    Find all allowed words that can be used in scrabble
    Scrabble letters = "[F, A, I, E, K, M]"
    Output = ['WORD1', 'WORD2', 'WORD3']

    It uses dictionary API to get a valid word combinations
*/
var scrabbleLetters = ['S', 'B', 'A'];
var dictionaryData = ['ABS', 'SBA', 'BAS'];

this.getAllLettersWords = function() {
    for(var i=0; i<scrabbleLetters.length; i++) {
        var currentLetter = scrabbleLetters[i];
        var possibleWord = currentLetter + getForwardLetters(currentLetter);
        if(isValidWord(possibleWord)) {
            return "Word found: " + possibleWord;
        }
    }

function getForwardLetters(currentLetter) {
    return scrabbleLetters.slice(currentLetter, scrabbleLetters.length);
}

function isValidWord(possibleWord) {
    return dictionaryData.includes(possibleWord);
}
};
console.log('test')
this.getAllLettersWords();