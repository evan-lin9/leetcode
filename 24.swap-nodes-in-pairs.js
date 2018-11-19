/*
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (40.49%)
 * Total Accepted:    233.9K
 * Total Submissions: 577.6K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * Example:
 * 
 * 
 * Given 1.2.3.4, you should return the list as 2.1.4.3.
 * 
 * Note:
 * 
 * 
 * Your algorithm should use only constant extra space.
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // if (!head || !head.next) {
    //     return head;
    // }
    // var t = head.next;
    // head.next = swapPairs(head.next.next);
    // t.next = head;
    // return t;
    var dummy = new ListNode(-1) 
    var pre = dummy;
    dummy.next = head;

    while (pre.next && pre.next.next) {
        var t = pre.next.next;
        pre.next.next = t.next;
        t.next = pre.next;
        pre.next = t;
        pre = t.next;
    }
    return dummy.next;
};
