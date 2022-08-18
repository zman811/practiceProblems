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
const isBalanced = function (root) {
  if (root === null) return true;
  let flag = true;
  function helper(root) {
    //base case of recursion - tree with no nodes return height 0
    if (root.left === null && root.right === null) {
      return 0;
    }
    let leftHeight = 0,
      rightHeight = 0;
    if (root.left !== null) {
      //height of left subtree is one plus the height of child sub tree
      leftHeight = 1 + helper(root.left);
    }
    if (root.right !== null) {
      //height of right subtree is one plus the height of child sub tree
      rightHeight = 1 + helper(root.right);
    }
    let actualHeight = Math.max(leftHeight, rightHeight);

    if (Math.abs(leftHeight - rightHeight) > 1) flag = false;

    return actualHeight;
  }

  helper(root);

  return flag;
  // Check the depth of the tree on left and right
  // if one is 2 higher than the other than return false, else return true
  // let leftDepth = 1;
  // let rightDepth = 1;
  // let currentRight = root.right;
  // while(currentRight.left || currentRight.left) {
  //   // need to change to recursion i think
  // }
};
