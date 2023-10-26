/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let map = new Map()
    let maxVal = 0
    let maxValCount = 0

    for(tsk of tasks){
        let tVal
        if(map.has(tsk)){
            tVal = map.get(tsk) + 1
        } else{
            tVal = 1
        }

        map.set(tsk, tVal)

        if(tVal > maxVal){
            maxVal = tVal
            maxValCount = 1
        } else if(tVal === maxVal){
            maxValCount++
        }
    }

    return Math.max(tasks.length, (maxVal-1) * (n+1) + maxValCount)
};