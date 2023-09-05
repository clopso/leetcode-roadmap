/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head
    let fast = head
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null
    let cur = slow.next
    while(cur){
        const temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }

    slow.next = null

    let head1 = head
    let head2 = prev

    while(head2){
        let temp = head1.next
        head1.next = head2
        head1 = head2
        head2 = temp
    }
};