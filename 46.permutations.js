/*
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (49.45%)
 * Total Accepted:    268.1K
 * Total Submissions: 542.2K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],   
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var helper = function(nums, i, len) {
        if (i === len - 1) {
            var temp = [];
            for(var j = 0; j < len; j++) {
                temp.push(nums[j])
            }
            res.push(temp)
            return;
        }
    
        for(var j = i; j < len; j++) {
            swap(nums, i, j);
            helper(nums, i + 1, len);
            swap(nums, i, j);
        }
    }
    
    var swap = function(nums, i, j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    if (nums.length === 0) {
        return res;
    }
    var res = [];
    helper(nums, 0, nums.length);
    return res;
};

