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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root){
        return []
    }
    let q = [root]
    let ans = []

    while(q.length){
        const size = q.length
        ans.push(q[size-1].val)
        for(let i = 0; i < size; i++){
            const node = q.shift()
            node.left && q.push(node.left)
            node.right && q.push(node.right)
        }
    }
    return ans
};