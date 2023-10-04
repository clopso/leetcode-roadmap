/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let target = null

    inOrderTraversal(root)

    return target.val

    function inOrderTraversal(node){
        if(node){
            inOrderTraversal(node.left)
            k--
            if(k === 0){
                target = node
            }
            inOrderTraversal(node.right)
        }
    }
};