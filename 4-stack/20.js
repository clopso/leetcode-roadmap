/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length <= 1 || s[0] == ')' || s[0] == ']' || s[0] == '}'){
        return false
    }

    let stack = []
    let closeAndOpen = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for(let i = 0; i < s.length; ++i){
        if(closeAndOpen[s[i]]){
            if(stack[stack.length-1] === closeAndOpen[s[i]]){
                stack.pop()
            }else{
                return false
            }
        }else{
            stack.push(s[i])
        }
    }
    return stack.length === 0
};