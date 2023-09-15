/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var getGroupEnd = function(head, k) {
    while(head && k > 1){
        k--
        head = head.next
    }
    return head
}

var reverseList = function(head, stop){
    let prev = stop
    while(head !== stop){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}

var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0)
    dummy.next = head
    let prevTail = dummy

    while(head){
        let start = head
        let end = getGroupEnd(head, k)
        
        if(!end){
            break
        }

        prevTail.next = reverseList(start, end.next)
        prevTail = start
        head = prevTail.next
    }

    let newHead = dummy.next
    return newHead
};