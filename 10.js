/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104


Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let presentSum = 0; // keep track of the total sum
  let maxSumYet = 0; // see what is the highest

  for (let number of nums) {
    presentSum = Math.max(0, presentSum + number);
    maxSumYet = Math.max(maxSumYet, presentSum);
  }

  return maxSumYet; // return the highest one that we find in the array
};

console.log('6:', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log('23:', maxSubArray([5,4,-1,7,8]))