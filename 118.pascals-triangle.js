/*
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (41.56%)
 * Total Accepted:    188.4K
 * Total Submissions: 452.7K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * [1,5,10,10,5,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
    if (numRows == 0) {
        return res;
    }  
    for(var j = 0; j < numRows; j++){
        row = [];
        row.push(1);
        for(var i = 1; i < j; i++) {
            //除去第一、第二行才进这个循环
            //当前行的上一行
            var prevRow = res[j-1];
            var temp = prevRow[i-1] + prevRow[i];
            row.push(temp);
        }
        if (j!=0) {
            //除了第一行，末尾接个1
            row.push(1);
        }
        res.push(row);
    }
    return res;
};