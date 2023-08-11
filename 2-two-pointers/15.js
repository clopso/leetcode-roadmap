/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let returnValue = []
    if (nums.length < 3){
        return returnValue
    }
    nums = nums.sort((a, b) => a - b)

    for(let x = 0; x < nums.length - 2; ++x){
        if( x > 0 && nums[x] === nums[x-1]){
            continue
        }
        let right = nums.length - 1
        let left = x + 1
        while(right > left){
            let sum = nums[x] + nums[right] + nums[left]
            if(sum === 0){
                returnValue.push([nums[x], nums[left], nums[right]])
                while(nums[right]===nums[right+1]){
                    --right
                }
                while(nums[left]===nums[left+1]){
                    ++left
                }
                --right
                ++left
            }else if(sum > 0){
                --right
            }
            else{
                ++left
            }
        }
    }
    return returnValue
};