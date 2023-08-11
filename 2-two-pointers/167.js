/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let right = numbers.length - 1
    let left = 0

    while(right > left){
        let sum = numbers[right] + numbers[left]
        if(sum > target){
            --right
        }else if(sum < target){
            ++left
        }
        else{
            return [left+1,right+1]
        }
    }
};