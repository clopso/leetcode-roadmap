/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0)
    let curr = res
    let carry = 0

    while(l1 || l2 || carry){
        const a = l1 && l1.val
        const b = l2 && l2.val
        const sum = a + b + carry

        carry = Math.floor(sum/10)
        curr.next = new ListNode(sum%10)

        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null

        curr = curr.next
    }

    return res.next
};