/*
Example 1:


Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.


Constraints:

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 216
0 <= sr < m
0 <= sc < n
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  // First we want to check if the first spot is already the color of new one, if it we do nothing
  const first = image[sr][sc]; // this is the orignal one we will store to check later
  if (first === color) {
    return image; // Return if there is nothing to change
  }
  const recurse = (row, col) => {
    image[row][col] = color;
    console.log(image)
    if(image[row + 1]) {
      if (image[row + 1][col] === first) {
        recurse(row + 1, col);
      }
    }
    if(image[row - 1]) {
      if (image[row - 1][col] === first) {
        recurse(row - 1, col);
      }
    }
    if (image[row][col + 1] === first) {
      recurse(row, col + 1);
    }
    if (image[row][col - 1] === first) {
      recurse(row, col + 1);
    }
    //check all suroding squares
  };
  recurse(sr, sc);
  return image;
  // If its not we will change that one then itterate 4 times checking all ones next to it
  //   if any of them are the same as the origanal one then we recursivly call on that one so that each one gets checked
};

console.log('test',
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
