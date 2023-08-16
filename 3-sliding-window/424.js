/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map()
    let left = 0
    let maxSequence = 0
    let maxResult = 0

    for(let right = 0; right < s.length; ++right){
        const currentChar = s[right]
        map.set(currentChar, (map.get(currentChar) || 0) + 1)
        maxSequence = Math.max(maxSequence, map.get(currentChar))

        if((right - left + 1) - maxSequence > k){
            const leftChar = s[left++]
            map.set(leftChar, (map.get(leftChar) - 1))
        }else{
            maxResult = Math.max(maxResult, (right - left + 1))
        }
    }

    return maxResult
};