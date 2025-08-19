// week01

function longestWord(sentence) {
  let result = ''
  if (typeof sentence === 'string'){
    let word = sentence.split(' ') 
    for (let i of word) {
      if (i.length > result.length){
        result = i
      }
    }
  }
  return result
}
module.exports = longestWord

console.log(longestWord(null));
console.log(longestWord("The quick brown fox jumped over the lazy dog"))
console.log(longestWord("this test-case is tricky!"))