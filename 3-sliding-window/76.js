/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(!s || !t || s.length < t.length){
        return ""
    }

    const tMap = {}
    for (const currentChar of t) {
        tMap[currentChar] = (tMap[currentChar] || 0) + 1
    }

    let right = 0
    let left = 0

    let tMapLength = Object.keys(tMap).length
    let result = ''

    while(right < s.length){
        const rightChar = s[right]
        --tMap[rightChar]

        if(tMap[rightChar] === 0){
            --tMapLength
        }

        while(tMapLength == 0){
            if(!result || result.length > right - left + 1){
                result = s.slice(left, right + 1)
            }

            const leftChar = s[left]
            if(tMap[leftChar] == 0){
                ++tMapLength
            }

            ++tMap[leftChar]
            ++left
        }
        ++right
    }
    return result
};