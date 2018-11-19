/*
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (42.91%)
 * Total Accepted:    186.8K
 * Total Submissions: 435.4K
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 
 * 
 * 
 * Input: 19
 * Output: true
 * Explanation: 
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while (n != 1 && n != 4) {
        var t = 0;
        while (n) {
            t += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        n = t;
    }
    return n == 1;
};
