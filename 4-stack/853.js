/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    if (position.length === 1) {
        return 1;
    }

    const pair = position
    .map((pos, index) => [pos, speed[index]])
    .sort((a, b) => a[0] - b[0])

    const stack = []
    for(let i = pair.length - 1; i >= 0; --i){
        const [pos, speed] = pair[i]
        stack.push((target-pos) / speed)

        let stackLength = stack.length
        if(stackLength >= 2 && stack[stackLength-1] <= stack[stackLength-2]){
            stack.pop()
        }
    }
    return stack.length
};