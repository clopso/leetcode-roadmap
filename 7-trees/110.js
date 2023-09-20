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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root == null){
        return true
    }

    if(treeHeight(root) == -1){
        return false
    }

    return true
};

var treeHeight = function(root) {
    if(root == null){
        return 0
    }

    let leftHeight = treeHeight(root.left)
    let rightHeight = treeHeight(root.right)

    if(leftHeight == -1 || rightHeight == -1){
        return -1
    }

    if(Math.abs(leftHeight - rightHeight) > 1){
        return -1
    }

    return Math.max(leftHeight, rightHeight) + 1
}