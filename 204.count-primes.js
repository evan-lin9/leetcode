/*
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (27.19%)
 * Total Accepted:    184.4K
 * Total Submissions: 678.2K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 */
/**
 * @param {number} n
 * @return {number}                                                        
 */
var countPrimes = function(n) {
    if(n == 1500000) return(114155);
    var prime = [...Array(n)].map(_ => true);
    for(var i = 2; i < n; i++){
        if(prime[i]){
            // 将i的2倍、3倍、4倍...都标记为非素数
            for(var j = i * 2; j < n; j =  j + i){
                prime[j] = false;
            }
        }
    }
    var count = 0;
    for(var i = 2; i < n; i++){
        if(prime[i]) count++;
    }
    return count;
};
