/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const length = nums.length;
    let result = new Array(length)
    
    let left = 1
    let right = 1

    for(let x = 0; x < length; ++x){
        result[x] = left
        left *= nums[x]
    }
    for(let x = length-1; x >= 0; x--){
        result[x] *= right
        right *= nums[x]
    }
    return result
};