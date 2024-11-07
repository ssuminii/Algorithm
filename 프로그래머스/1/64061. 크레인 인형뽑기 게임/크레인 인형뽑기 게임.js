function solution(board, moves) {
    let arr = [];
    let result = [];
    let bomb = [];
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            arr.push(board[j][i])
        }
        result.push(arr)
        arr = []
    }
    
    result = result.map(v => v.filter(v => v !== 0))

    for(let move of moves) {
        if(arr.at(-1) === result[move-1][0]) {
            arr.pop()
            bomb.push(result[move-1][0], result[move-1][0])
            result[move-1].shift()
        } else {
            arr.push(result[move-1][0])
            result[move-1].shift()
        }
    }
    
    return bomb.filter(v => v).length
}