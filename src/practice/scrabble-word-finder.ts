import _ = require('lodash');

// interface Words {
//     letters: string;
//     dictionaryData: Array<string>;
// }

class ScrabbleFinder {
    dictionaryData: Array<string>;
    letters: string;
    constructor(input: string) {
        this.dictionaryData = ['ABC', 'SBA', 'BAS', 'CAB'];
        this.letters = input;
    }

    public printResults = function (): void {
        console.log('########');
        console.log(this.getAllPossibleWords(this.letters));
    }

    public getAllPossibleWords(input: string): Array<string> {
        var ana = new Anagrams();
        var possibleWords = ana.getAllCombinations(input);
        var filteredWords = [];
        for (var i = 0; i < possibleWords.length; i++) {
            if (isValidWord(this.dictionaryData, possibleWords[i])) {
                filteredWords.push(possibleWords[i]);
            }
        }
        return filteredWords;

        function isValidWord(dict, possibleWord): boolean {
            return _.includes(dict, possibleWord);
        }
    }
}


class Anagrams {

    constructor() {
        
    }

    public getAllCombinations(input: string): Array<string> {
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
                this.swap(chars, i % 2 === 1 ? counter[i] : 0, i);
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

    private swap(chars, i, j) {
        var tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }
}


var comb = new ScrabbleFinder('ACB');
comb.printResults();
