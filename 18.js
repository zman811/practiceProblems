/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // check through the ransomNote and remove the letter that matches in the magazine, if one is not found then stop
  magazine = magazine.split('')
  ransomNote = ransomNote.split('')
  for (let i = 0; i < ransomNote.length; i++) {
    console.log(magazine)
    let index = magazine.indexOf(ransomNote[i]);
    if (index === -1) {
      return false;
    } else {
      magazine.splice(index, 1)
    }
  }
  return true;
};


console.log('true', canConstruct('aa', 'aba'))
console.log('false', canConstruct('aa', 'ba'))