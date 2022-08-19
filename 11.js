/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
@param {TreeNode} root
@param {TreeNode} p
@param {TreeNode} q
@return {TreeNode}
*/
const lowestCommonAncestor = (root, p, q) => {
  // itterate through one and keep track of all the parents then compare the other till match is found
  // let par = []
  // let curr = root
  // while(curr.val !== root.val) {
  //   par.push(curr)
  //   if(curr < root) {
  //     curr = curr.left
  //   } else {
  //     curr = curr.right
  //   }
  // }

  // go down the tree till the are both not less than or greater than the current node
  let current = root;
  while ((p < current && q < current) || (p > current && q > current)) {
    if (p < current) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return current;
};