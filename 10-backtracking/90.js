/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    function findSubset(arr, curr){
        res.push([...curr])
        for(let i = 0; i < arr.length; i++){
            if(i == 0 || arr[i] != arr[i-1]){
                curr.push(arr[i])
                findSubset(arr.slice(i+1), curr)
                curr.pop()
            }
        }
    }
    let res = []
    nums.sort((a, b) => {return a-b})
    findSubset(nums, []);
    return res
};