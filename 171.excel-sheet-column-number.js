
/*
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (49.52%)
 * Total Accepted:    182K
 * Total Submissions: 367.5K
 * Testcase Example:  '"A"'
 *
 * Given a column title as appear in an Excel sheet, return its corresponding
 * column number.
 * 
 * For example:
 * 
 * 
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "A"
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "AB"
 * Output: 28
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "ZY"
 * Output: 701
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var sum = 0;
    var tmp = 0;
    var n = 0;
    var len = s.length;
    for (var i = len; i > 0; i--) {
        tmp = (s[i-1].charCodeAt() - 64) * (Math.pow(26,n));
        sum += tmp;
        n++;
    }
    return sum;
}
