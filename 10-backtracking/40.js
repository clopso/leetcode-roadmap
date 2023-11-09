/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b)
    let res = []

    function iterate(index, sum, temp){
        if(sum > target){
            return
        }
        if(sum == target){
            res.push(temp)
            return
        }

        for(let i = index; i < candidates.length; i++){
            if(i != index && candidates[i] == candidates[i-1]){
                continue
            }
            iterate(i+1, sum+candidates[i], [...temp, candidates[i]])
        }
    }
    iterate(0, 0, [])
    return res
};