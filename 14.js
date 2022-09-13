/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // this may be slow but it should work, what we could do it check every substring and keep track of the largerst one then return that at the end
  let longest = s[0];
  let current;
  for (let i = 0; i < s.length; i++) {
    current = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (current.indexOf(s[j]) === -1) {
        current += s[j];
        if (longest.length < current.length) {
          longest = current;
        }
      } else break;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbb'))
