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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 0

    diameterCalc(root)

    return res

    function diameterCalc(node, level){
        if(!node) return 0

        const left = diameterCalc(node.left)
        const right = diameterCalc(node.right)

        res = Math.max(res, left+right)

        return Math.max(left, right) + 1
    }
};