/*
 * [50] Pow(x, n)
 *
 * https://leetcode.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (26.48%)
 * Total Accepted:    236.8K
 * Total Submissions: 894K
 * Testcase Example:  '2.00000\n10'
 *
 * Implement pow(x, n), which calculates x raised to the power n (xn).
 * 
 * Example 1:
 * 
 * 
 * Input: 2.00000, 10
 * Output: 1024.00000
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 2.10000, 3
 * Output: 9.26100
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 2.00000, -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 * 
 * 
 * Note:
 * 
 * 
 * -100.0 < x < 100.0
 * n is a 32-bit signed integer, within the range [−231, 231 − 1]
 * 
 * 
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    //return Math.pow(x, n);
    if (n < 0) {
        return 1 / power(-n)
    } else {
        return power(n);
    }

    function power(n){
        var temp = 0;
        if(n === 0) {
            return 1;
        }else if(n % 2 === 1) {
            temp = power((n - 1) / 2);
            return temp * temp * x;
        }else if(n % 2 === 0) {  
            temp = power(n / 2);
            return temp * temp;
        }
    }
}; 
