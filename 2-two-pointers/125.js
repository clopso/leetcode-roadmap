/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    s = s.replace(/[^a-z0-9]/g, "")

    console.log(s)

    let right = s.length - 1 
    let left = 0
    while(left < right){
        if(s[left++] == s[right--]){
            continue
        }else{
            return false
        }
    }
    return true
};