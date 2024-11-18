function solution(s) {
    let result = s.split(' ').map(v => Number(v)).sort((a,b) => a - b)
    return `${result[0]} ${result.at(-1)}`
}