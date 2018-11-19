/*
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (44.21%)
 * Total Accepted:    215.9K
 * Total Submissions: 488.4K
 * Testcase Example:  '3\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * 
 * Above is a 7 x 3 grid. How many possible unique paths are there?
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: m = 7, n = 3
 * Output: 28
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // var num = 1, denom = 1;
    // var small = m > n ? n : m;
    // for (var i = 1; i <= small - 1; ++i) {
    //     num *= m + n - 1 - i;
    //     denom *= i;
    // }
    // return Math.floor(num / denom);
    var dp = [];
    for (var k = 0; k < n; k++) {
        dp.push(1)
    }
    for (var i = 1; i < m; ++i) {
        for (var j = 1; j < n; ++j) {
            dp[j] += dp[j - 1]; 
        }
    }
    return dp[n - 1];
};
