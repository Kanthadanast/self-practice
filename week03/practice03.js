// // week03

function getFreqOfWords(sentence) {
    if(sentence === null || sentence === undefined || sentence == '') {
        return undefined;
    }
    const arrayOfwords = sentence.toLowerCase().split(' ');
    const keypairfreqword = {}
    for(let i = 0; i < arrayOfwords.length; i++) {
        const word = arrayOfwords[i];
        if (keypairfreqword[word]) {
            keypairfreqword[word]++;
        } else {
            keypairfreqword[word] = 1;
        }
    }
    return keypairfreqword
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));