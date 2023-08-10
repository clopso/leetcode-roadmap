/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length <= 1){
        return nums.length
    }

    nums.sort(function (a, b){
        return a - b
    })
    let actCon = 1
    let maxCon = 1

    for(let x = 0; x < nums.length; ++x){
        if(nums[x] === nums[x+1]-1){
            ++actCon
        }else if(nums[x] === nums[x+1]){
            // do nothing
        }else{
            actCon = 1;
        }
        maxCon = Math.max(actCon, maxCon)
    }
    return maxCon
};