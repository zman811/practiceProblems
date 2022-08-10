/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  //make a resut var
  let result = -1; // -1 by default if nothing is found
  // current middle
  let start = 0;
  let end = nums.length - 1;
  // edge case
  if (nums[end] === target) {
    return end;
  }
  while (start < end) {
    let middleIndex = Math.floor((end + start) / 2);
    let middle = nums[middleIndex];
    if (middle === target) {
      result = middleIndex;
      return result;
    }
    if (middle < target) {
      start = middleIndex + 1;
    } else if (middle > target) {
      end = middleIndex;
    }
  }
  return result;
  // check if less than or greater than
  // while loop/recurse moving the middle, if it is ever a impossible spot then we return -1 since it is not found
};

console.log("4, :", search([-1, 0, 3, 5, 9, 12, 13], 13));
console.log("-1, :", search([-1, 0, 3, 5, 9, 12], 2));
