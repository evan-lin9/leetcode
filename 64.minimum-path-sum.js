 /*
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (42.78%)
 * Total Accepted:    172.3K
 * Total Submissions: 402.8K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (
        grid === null || 
        grid.length === 0 || 
        grid[0].length === 0
    ) {
        return 0;
    }

    var dp = [];
    for (var k = 0; k < grid[0].length; k++) {
        dp.push(0)
    }
    dp[0] = grid[0][0];
    for(var k = 1; k < grid[0].length; k++) {
        dp[k] = dp[k-1] + grid[0][k];
    }

    for(var i = 1; i < grid.length; i++) {
        for(var j = 0; j < grid[0].length; j++) {
            if(j === 0) {
                dp[j] += grid[i][j];
            } else {
                dp[j] = Math.min(dp[j-1], dp[j]) + grid[i][j];
            } 
        }
    }
    return dp[grid[0].length - 1];
};
