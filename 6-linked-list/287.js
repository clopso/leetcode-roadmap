/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[nums[0]]

    while(slow !== fast){
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    let p = 0
    while(slow !== p){
        slow = nums[slow]
        p = nums[p]
    }

    return slow
};