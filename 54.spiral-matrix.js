/*
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (28.04%)
 * Total Accepted:    164.5K
 * Total Submissions: 586.7K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * Example 2:
 * 
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res = [];
    if (!matrix.length) {
        return res;
    }
    var m = matrix.length, n = matrix[0].length;
    var c = m > n ? (n + 1) / 2 : (m + 1) / 2;
    var p = m, q = n;
    for (var i = 0; i < Math.floor(c); ++i, p -= 2, q -= 2) {
        for (var col = i; col < i + q; ++col) {
            res.push(matrix[i][col]);
        } 
        for (var row = i + 1; row < i + p; ++row) {
            res.push(matrix[row][i + q - 1]);
        }  
        if (p == 1 || q == 1) break;
        for (var col = i + q - 2; col >= i; --col) {
            res.push(matrix[i + p - 1][col]);
        }
        for (var row = i + p - 2; row > i; --row) {
            res.push(matrix[row][i]);
        }
    }
    return res;
};
