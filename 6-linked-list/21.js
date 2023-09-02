/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let result = new ListNode()
    let ptr = result
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            result.next = new ListNode(list1.val)
            list1 = list1.next
        }else{
            result.next = new ListNode(list2.val)
            list2 = list2.next
        }
        result = result.next
    }
    result.next = list1 || list2

    return ptr.next
};