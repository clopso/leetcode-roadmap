/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = []
    let columns = []
    let squares = []
    for(i = 0;i < 9;i++ ){
        rows[i] = new Set()
        columns[i] = new Set()
        squares[i] = new Set()
    }
    
    for(let x = 0; x < 9; ++x){
        for(let y = 0; y < 9; ++y){
            let value = board[x][y]
            if(value == '.'){
                continue
            }
            let box = Math.floor(x/3) * 3 + Math.floor(y/3)
            
            if(rows[x].has(value) || columns[y].has(value) || squares[box].has(value)){
                return false
            }

            rows[x].add(value)
            columns[y].add(value)
            squares[box].add(value)
        }
    }
    return true
};