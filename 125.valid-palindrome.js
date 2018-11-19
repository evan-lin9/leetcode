/*
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (28.18%)
 * Total Accepted:    254.7K
 * Total Submissions: 903.8K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = s.replace(/[^a-z0-9]/gi, '').toLocaleLowerCase();
    var len = str.length - 1;
    var mid = Math.ceil(len / 2);
    for(var i = 0; i < mid; i++) {
        if(str[i] !== str[len - i]) {
            return false;
        }
    }
    return true;
};
