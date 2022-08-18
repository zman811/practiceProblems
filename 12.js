/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
@param {TreeNode} root
@return {boolean}
 */
const isBalanced = function(root) {
  // Check the depth of the tree on left and right
  // if one is 2 higher than the other than return false, else return true
  let leftDepth = 1;
  let rightDepth = 1;
  let currentRight = root.right;
  while(currentRight.left || currentRight.left) {
    // need to change to recursion i think
  }
};