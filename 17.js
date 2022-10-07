/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const obj = { 2: ["a", "b", "c"], 3: ["d", "e", "f"], 4: ["g", "h", "i"], /* etc */};
  let results = [];
  let recurse = (current) => {
    for (let i = 0; i < 3; i++) {
      if (current.length >= digits.length) {
        results.push(current);
        return;
      } else {
        //console.log(obj[digits[current.length]][i])
        recurse((current + obj[digits[current.length]][i]));
      }
    }
  };
  recurse("");
  return results;
};

console.log(letterCombinations("23"))
