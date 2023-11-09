/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    backtrack(nums, res, 0)
    return res
};

var backtrack = function(nums, res, n){
    if(n == nums.length - 1){
        res.push(nums.slice(0))
        return
    }
    for(let i = n; i < nums.length; i++){
        [nums[i], nums[n]] = [nums[n], nums[i]];
        backtrack(nums, res, n+1);
        [nums[i], nums[n]] = [nums[n], nums[i]];
    }
}