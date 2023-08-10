/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // count numbers
    let count = {}
    for(let num of nums){
        if(count[num]){
            count[num] += 1;
        }else{
            count[num] = 1;
        }
    }

    let sorted = Object.entries(count).sort((a, b) => a[1] - b[1]).reverse();
    let result = []

    for(let x = 0; x < k; ++x){
        result.push(sorted[x][0])
    }

    return result
};