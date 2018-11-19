/*
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (32.58%)
 * Total Accepted:    154K
 * Total Submissions: 472.8K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (
        obstacleGrid === null || 
        obstacleGrid.length === 0 || 
        obstacleGrid[0].length === 0
    ) {
        return 0;
    }

    var dp = [];
    for (var k = 0; k < obstacleGrid[0].length; k++) {
        dp.push(0)
    }
    dp[0] = 1;
    
    for(var i = 0; i < obstacleGrid.length; i++) {
        for(var j = 0; j < obstacleGrid[0].length; j++) {
            if(obstacleGrid[i][j] === 1) {
                dp[j]=0;
            } else {
                if(j > 0) {
                    dp[j] += dp[j-1];
                }
            }
        }
    }
    return dp[obstacleGrid[0].length - 1];
};
