/*
 * [67] add binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (35.31%)
 * Total accepted:    222.2K
 * Total Submissions: 629.3K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addbinary = function(a, b) {
    var len = Math.max(a.length, b.length);
    var res = [];
    var carry = 0;
    while(a.length < b.length){
        a = "0" + a;
    }
    
    while(b.length < a.length){
        b = "0" + b;
    }
    while(len--) {
        var num = 1 * a[len] + 1 * b[len] + carry;
        if (num >= 2) {
            res[len] = num -2;
            carry = 1;
        } else {
            res[len] = num;
            carry = 0;
        }
    }
    if (carry) res.unshift(1);
    return res.join('')
};
