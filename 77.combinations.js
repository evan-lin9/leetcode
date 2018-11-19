/*
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (43.48%)
 * Total Accepted:    162.3K
 * Total Submissions: 373.2K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],                                        
 * ⁠ [1,4],
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(k === 0 || n === 0){
        return [];
    }
    
    var result = [];
    var output = [];
    generate(result, output, n, k, 1);
    
    return result;
};

var generate = function(result, output, n, k, cur){
    if(output.length === k){
        result.push(output.slice());
        return;
    }
    if(cur > n){
        return;
    }
    
    output.push(cur)
    generate(result, output, n, k, cur + 1);
    output.pop();
    generate(result, output, n, k, cur + 1);
}