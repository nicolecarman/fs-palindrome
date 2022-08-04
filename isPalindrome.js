/*

A palindrome is a word that is spelled the same backwards and forwards. Return true if the word is a palindrome, false if it is not. Treat spaces and uppercase letters normally. “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter.

For example:

isPalindrome("noon")
returns true

isPalindrome("Racecar")
returns false

isPalindrome("racecar")
returns true

*/


// Write your code below
function isPalindrome(word) {
    let j = word.length - 1;

    for (let i = 0; i < (word.length - 1) / 2; i++) {
        if (word[i] !== word[j]) {

        return false
      }
      j--
    }
    return true
  }
