/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = []
    let right = 0
    let left = 0
    const q = []

    while(right < nums.length){
        while(q && nums[right] > nums[q[q.length - 1]]){
            q.pop()
        }
        q.push(right)

        if(left > q[0]){
            q.shift()
        }

        if(right + 1 >= k){
            result.push(nums[q[0]])
            ++left
        }
        ++right
    }
    return result
};