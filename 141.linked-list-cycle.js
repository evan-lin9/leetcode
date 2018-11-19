/*
 * [141] Linked List Cycle
 *
 * https://leetcode.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (34.79%)
 * Total Accepted:    285.3K
 * Total Submissions: 820.2K
 * Testcase Example:  '[]\nno cycle'
 *
 * 
 * Given a linked list, determine if it has a cycle in it.
 * 
 * 
 * 
 * Follow up:
 * Can you solve it without using extra space?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // if (head === null || head.next === null) {
    //     return false;
    // }
    // var node = head;
    // while(node) {
    //     if (node.next === head) {
    //         return true;
    //     }
    //     var temp = node.next;
    //     node.next = head;
    //     node = temp;
    // }
    // return false;
    var fast = head; 
    var slow = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
