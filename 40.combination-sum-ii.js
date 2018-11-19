/*
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (37.45%)
 * Total Accepted:    167.9K
 * Total Submissions: 448.3K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(candidates.length <= 0){
        return [];
    }
    var result = [];
    // 1.先排序
    candidates.sort(function(a,b){
    return a - b;
    });
    // 2.递归查找
    var eachResult = [];
    searchCombinationSum(0,candidates,target,eachResult,result);

    return result;
};
var searchCombinationSum = function(index,candidates,leftSum,eachResult,result){
    for(var i = index;i < candidates.length;i++){
        if(i >= index + 1 && (candidates[i] === candidates[i - 1])){
            continue;
        }
        var tempEachResult = eachResult.slice(0);
        if(leftSum < candidates[i]){
            return;
        }else if(leftSum === candidates[i]){
            tempEachResult.push(leftSum);
            result.push(tempEachResult);
            return;
        }

        tempEachResult.push(candidates[i]);
        searchCombinationSum(i + 1,candidates,leftSum - candidates[i],tempEachResult,result);
    }
};
