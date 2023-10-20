/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b) => b-a)

    while(stones.length > 1){
        const [a, b] = [stones.shift(), stones.shift()]

        if(a != b){
            stones.push(a-b)
            stones.sort((a,b) => b-a)
        }
    }
    return stones[0] | 0
};