/*
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (29.20%)
 * Total Accepted:    168.9K
 * Total Submissions: 578.4K
 * Testcase Example:  '[1,2,3]'
 *
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 * 
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 * 
 * The replacement must be in-place and use only constant extra memory.
 * 
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 * 
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return;
    }
    var len = nums.length,
        i = len - 1;
    while (i > 0) {
        if (nums[i - 1] < nums[i]) {
            break;
        }
        i--;
    }
    var j = len - 1,
        temp;
    if (i > 0) {
        while (j > i - 1) {
            if (nums[j] > nums[i - 1]) {
                temp = nums[i - 1];
                nums[i - 1] = nums[j];
                nums[j] = temp;
                break;
            }
            j--;
        }
    }
    j = 0;
    while (j + i < Math.ceil((i + len - 1) / 2)) {
        temp = nums[len - 1 - j];
        nums[len - 1 - j] = nums[j + i];
        nums[j + i] = temp;
        j++;
    }
    return;
};
