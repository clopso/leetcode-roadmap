/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const tempLength = temperatures.length
    let stack = []
    let res = Array(tempLength).fill(0)

    for(let i = 0; i < tempLength; ++i){
        while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]){
            let index = stack.pop()
            res[index] = i - index
        }
        stack.push(i)
    }

    return res
};