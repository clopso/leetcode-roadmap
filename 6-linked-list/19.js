/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let res = new ListNode()
    res.next = head

    let left = res
    let right = head

    for(let i = 0; i < n; i++){
        right = right.next
    }

    while(right){
        right = right.next
        left = left.next
    }

    left.next = left.next.next

    return res.next
};