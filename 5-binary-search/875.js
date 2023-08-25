/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1
    let right = Math.max(...piles)
    let k = 0

    while(left <= right){
        const mid = Math.floor((left + right) / 2)

        let timeToEat = 0
        for(let i = 0; i < piles.length; ++i){
            timeToEat += Math.ceil(piles[i] / mid)
        }

        if(timeToEat <= h){
            k = mid
            right = mid - 1
        }else{
            left = mid + 1
        }
    }

    return k
};