/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for(let i = 0; i < tokens.length; ++i){
        switch(tokens[i]){
            case '+':
                stack.push(stack.pop() + stack.pop())
                break;
            case '-':
                stack.push(- stack.pop() + stack.pop())
                break;
            case '*':
                stack.push(stack.pop() * stack.pop())
                break;
            case '/':
                stack.push(Math.trunc(1 / (stack.pop() / stack.pop())))
                break;
            default:
                stack.push(Number(tokens[i]))
        }
    }
    return stack[0]
};