/* examples
    "aabbcc", "a", "b" => "bbaacc"
*/
function doubleCharacterSwap(sentence, c1, c2) {
    // basic validation
    if (!sentence || !c1 || !c2 || sentence.length < 2 || c1.length !== 1 || c2.length !== 1) {
        return "Error"
    }

    // Create output variable
    let output = ""

    // loop through each character
    // building the output sentence
    for (let c of sentence) {
        if (c === c1) output += c2
        else if (c === c2) output += c1
        else output += c
    }

    return output
}

function doubleSwap(str, c1, c2) {
    if (c1 === c2) return str;
    return [...str].map(char => (char === c1 ? c2 : char === c2 ? c1 : char)).join('');
}

function doubleSwap(str, c1, c2) {
    return str
      .split("")
      .map((char) => {
        if (char === c1) {
          return c2;
        } else if (char === c2) {
          return c1;
        }
        return char;
      })
      .join("");
  }












console.log(doubleSwap("aabbccc", "a", "b")); // "bbaaccc"
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&")); // "random w&rds writt#n h#r#"
console.log(doubleSwap("128 895 556 788 999", "8", "9"));

// valid inputs
console.log(doubleCharacterSwap("aabbcc", "a", "b"))
console.log(doubleCharacterSwap("random w#rds writt&n h&r&", "#", "&"))
console.log(doubleCharacterSwap("128 895 556 788 999", "8", "9"))

// bad inputs
// console.log(doubleCharacterSwap(null, "aa", "b"))
// console.log(doubleCharacterSwap("aabbcc", null, null))
// console.log(doubleCharacterSwap("aabbcc", "aa", "b"))
// console.log(doubleCharacterSwap("aabbcc", "a", "bb"))
// console.log(doubleCharacterSwap("a", "a", "b"))