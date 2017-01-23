"use strict";
var _ = require("lodash");
// interface Words {
//     letters: string;
//     dictionaryData: Array<string>;
// }
var ScrabbleFinder = (function () {
    function ScrabbleFinder(input) {
        this.printResults = function () {
            console.log('########');
            console.log(this.getAllPossibleWords(this.letters));
        };
        this.dictionaryData = ['ABC', 'SBA', 'BAS', 'CAB'];
        this.letters = input;
    }
    ScrabbleFinder.prototype.getAllPossibleWords = function (input) {
        var ana = new Anagrams();
        var possibleWords = ana.getAllCombinations(input);
        var filteredWords = [];
        for (var i = 0; i < possibleWords.length; i++) {
            if (isValidWord(this.dictionaryData, possibleWords[i])) {
                filteredWords.push(possibleWords[i]);
            }
        }
        return filteredWords;
        function isValidWord(dict, possibleWord) {
            return _.includes(dict, possibleWord);
        }
    };
    return ScrabbleFinder;
}());
var Anagrams = (function () {
    function Anagrams() {
    }
    Anagrams.prototype.getAllCombinations = function (input) {
        var counter = [], anagrams = [], chars = input.split(''), length = chars.length, i;
        for (i = 0; i < length; i++) {
            counter[i] = 0;
        }
        anagrams.push(input);
        i = 0;
        while (i < length) {
            if (counter[i] < i) {
                this.swap(chars, i % 2 === 1 ? counter[i] : 0, i);
                counter[i]++;
                i = 0;
                anagrams.push(chars.join(''));
            }
            else {
                counter[i] = 0;
                i++;
            }
        }
        return anagrams;
    };
    Anagrams.prototype.swap = function (chars, i, j) {
        var tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    };
    return Anagrams;
}());
var comb = new ScrabbleFinder('ACB');
comb.printResults();
//# sourceMappingURL=scrabble-word-finder.js.map