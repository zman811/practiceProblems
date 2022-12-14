/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  let one = s.split("");
  let two = t.split("");
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < one.length; i++) {
    let index = two.indexOf(one[i]);
    if (index === -1) {
      return false;
    } else {
      two.splice(index, 1, "");
    }
  }
  return true;
  // Change them to arrays first
  // itterate throught string s, for each letter check if it is contanied in string t,
  // if its not return false. If it is remove it and keep going if we get to the end we will return true
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));
