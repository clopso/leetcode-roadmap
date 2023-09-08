/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head){
        return null
    }

    const newCopy = new Map()

    let curr = head
    while(curr){
        newCopy.set(curr, new Node(curr.val))
        curr = curr.next
    }

    curr = head
    while(curr){
        newCopy.get(curr).next = newCopy.get(curr.next) || null
        newCopy.get(curr).random = newCopy.get(curr.random) || null
        curr = curr.next
    }

    return newCopy.get(head)
};