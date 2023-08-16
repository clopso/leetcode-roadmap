/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length){
        return false;
    }

    let s1Map = new Map()


    for (let i = 0; i < s1.length; ++i) {
        const currentChar = s1[i]
        s1Map.set(currentChar, (s1Map.get(currentChar) || 0) + 1)
    }

    for(let start = 0; start <= s2.length - s1.length; ++start){
        let s2Map = new Map()

        for (let i = 0; i < s1.length; ++i) {
            const currentChar = s2[i + start]
            s2Map.set(currentChar, (s2Map.get(currentChar) || 0) + 1)
        }

        let compare = 0;
        for (let [key, val] of s1Map) {
            const currentValue = s2Map.get(key);
            if (currentValue !== val) {
                continue;
            }else{
                ++compare
            }

            if(s1Map.size == compare){
                return true;
            }
        }
    }
    return false;
};