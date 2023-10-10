function isPalindrome(word) {
  const lowerCase = word.toLowerCase();
  const reversed = lowerCase.split("").reverse().join("");
  return reversed === word;
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
   This code defines a function isPalindrome that checks if a given word is a palindrome.
   If at any point the characters don't match, it returns false. If the loop completes without 
   finding any mismatches, it returns true, indicating that the word is a palindrome.
*/

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
