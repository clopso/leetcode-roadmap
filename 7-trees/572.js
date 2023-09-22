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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isSameTree = function(l, r){
    if(!l && !r){
        return true
    }
    if(!l || !r){
        return false
    }
    if(l.val != r.val){
        return false
    }
    
    return isSameTree(l.left, r.left) && isSameTree(l.right, r.right)
}

var isSubtree = function(root, subRoot) {
    if(!root){
        return false
    }
    if(isSameTree(root, subRoot)){
        return true
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};