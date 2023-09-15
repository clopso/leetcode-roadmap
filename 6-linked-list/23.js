/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeLists = function(l1, l2){
    if(!l2){
      return l1
    }
    if(!l1){
      return l2
    }
  
    if(l1.val < l2.val){
      l1.next = mergeLists(l1.next, l2)
      return l1
    }else{
      l2.next = mergeLists(l1, l2.next)
      return l2
    }
};
  
var mergeKLists = function(lists) {
    let res = null
  
    for(let i = 0; i < lists.length; ++i){
      res = mergeLists(res, lists[i])
    }
  
    return res
};