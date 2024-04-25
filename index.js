function isPalindrome(word) {
  // Write your algorithm here
    for (let i = 0; i < word.length / 2; i++) {
      const j = word.length - 1 - i;
      if (word[i] !== word[j]) return false;
    }

    return true;
}
/*
  Add your pseudocode here
*/
// iterate from the beginning to the middle
// check each letter to the correponding letter from the end
// if any letters don't match, return false
// return true





/*
  Add written explanation of your solution here
*/
// means if the word is the same as the word in reverse, I should return true.

// reverse the input string

// if the input is the same as the reversed input
//   return true
// else
//   return false



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
