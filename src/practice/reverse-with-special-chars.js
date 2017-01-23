var reverseWithoutSpecialChars = function(str) {
    var resultCounter = 0;
    var finalResult = [];
    var strLength = str.length;
    writeSpecialCharsToResult();

    /// Reverse the characters and start adding to the finalResult
    for(i=strLength-1; i>=0; i--) {
        getAnEmptyArrayItem();
        if(!isSpecialChar(str[i])) {
            finalResult[resultCounter] = str[i];
        }
    }
    return finalResult;

    function getAnEmptyArrayItem() {
        while(finalResult[resultCounter] != undefined && resultCounter <= strLength) {
            resultCounter++;
        }
    }

    function writeSpecialCharsToResult() {
        for (var i=0; i<str.length; i++) {
            if(isSpecialChar(str[i])) {
                finalResult[i] = str[i];
            }
        }
    }

    function isSpecialChar(letter) {
        var validCharsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for(var i=0; i<validCharsArray.length; i++) {
            if(validCharsArray[i] === letter.toLowerCase()) {
                return false;
            }
        }
        return true;
    }
}

console.log(reverseWithoutSpecialChars('ab$AFS#^cdIORE'));