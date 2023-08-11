/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0
    let right = height.length - 1
    let left = 0

    let maxRight = height[right]
    let maxLeft = height[left]

    while(left <= right){
        if(maxRight < maxLeft){ 
            let temp = maxRight - height[right] > 0 ? maxRight - height[right] : 0
            water += temp
            maxRight = Math.max(maxRight, height[right])
            --right
        }else{
            let temp = maxLeft - height[left] > 0 ? maxLeft - height[left] : 0
            water += temp
            maxLeft = Math.max(maxLeft, height[left])
            ++left
        }
    }
    return water
};