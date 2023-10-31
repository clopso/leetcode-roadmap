/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    let appendArr = []
    let i = 0

    function recursive(nums, i, appendArr){
        if(i == nums.length){
            res.push(appendArr)
            return
        }

        recursive(nums, i+1, [...appendArr, nums[i]])

        recursive(nums, i+1, appendArr)
    }
    recursive(nums, i, appendArr)

    return res
};