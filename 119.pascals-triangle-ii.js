/*
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (39.50%)
 * Total Accepted:    158.2K
 * Total Submissions: 400.2K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [] 
    for (var i = 0; i <= rowIndex; i++) {  
        result.push(0);  
    }  
    result[0] = 1;  
    for (var i = 1; i <= rowIndex; i++) {  
        result[i] = 1;  
        for (var j = i - 1; j > 0; j--) {  
            result[j] = result[j] + result[j - 1];  
        }  
    }  
    return result;
};
