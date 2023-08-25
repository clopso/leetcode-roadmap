/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length

    let left = 0
    let right = rows * cols - 1

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let midValue = matrix[Math.floor(mid / cols)][mid % cols]

        if(midValue > target){
            right = mid -1
        }
        else if(midValue < target){
            left = mid + 1
        }
        else if(midValue == target){
            return true
        }
    }
    return false
};