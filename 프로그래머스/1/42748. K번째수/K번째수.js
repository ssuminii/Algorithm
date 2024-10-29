function solution(array, commands) {
    let result = [];
    
    for(let command of commands) {
        result.push(array.slice(command[0]-1, command[1]).sort((a,b) => a - b)[command[2]-1])
    }
    
    return result
}