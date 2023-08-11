/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0

    let right = height.length - 1
    let left = 0

    while(left < right){
        result = Math.max(result, Math.min(height[right], height[left]) * (right - left))
        if(height[right] > height[left]){
            ++left
        }
        else{
            --right
        }
    }
    return result
};