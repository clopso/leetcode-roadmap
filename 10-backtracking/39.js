/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []

    function permutation(arr, sum, index){
        if(sum > target){
            return
        }
        if(sum === target){
            res.push(arr)
        }

        for(let i = index; i < candidates.length; i++){
            permutation([...arr, candidates[i]], sum+candidates[i], i);
        }
    }
    permutation([], 0, 0)

    return res
};