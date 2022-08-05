/*
Given the root of a binary tree, invert the tree, and return its root.



Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  // To solve this i would want to traverse through the tree and at each point swap the left and right values
  // the one thing would be to make sure that we only switch each node once
  // would recursivly go through the tree switching each node
  const recuse = (node) => {
    if (node.left || node.right) {
      // if it has ANY children
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.right) {
        recurse(node.right);
      }
      if (node.left) {
        recurse(node.left);
      }
    }
    return;
    // if the node has childern swap them and then recurse into them
    //  here we just swap left and right then call recurse with left and then right
    // otherwise we can return
  };
  recurse(root);
  return root;
};

// Didnt test this one yet beacuse i dont have a binary tree set up, will test later