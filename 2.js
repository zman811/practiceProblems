/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const isValid = function (s) {
  const solutions = { "(": ")", "{": "}", "[": "]" };
  // make a storage array
  let storage = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]" || s[i] === "}" || s[i] === ")") {
      if (!(solutions[storage[0]] === s[i])) {
        return false;
      } else {
        storage.shift();
      }
    } else {
      storage.push(s[i]);
    }
  }
  return true;
};

console.log("true", isValid("()[]{}"));
console.log("false", isValid("()[{}"));
console.log("true", isValid("()[[]]{}"));
