/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    backtracking(result, '', 0, 0, n)
    return result
};

const backtracking = (result, current, open, close, n) => {
    if(current.length === n * 2){
        result.push(current)
        return
    }

    if(open < n){
        backtracking(result, current + '(', open+1, close, n)
    }

    if(close < open){
        backtracking(result, current + ')', open, close+1, n)
    }
}