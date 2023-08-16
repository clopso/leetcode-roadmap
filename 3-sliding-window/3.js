/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let set = new Set()
    let maxSequence = 0;

    for(let right = 0; right < s.length; ++right){
        while(set.has(s[right])){
            set.delete(s[left])
            ++left
        }
        set.add(s[right])
        maxSequence = Math.max(maxSequence, set.size);
    }
    return maxSequence
};