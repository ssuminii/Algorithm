function solution(s, skip, index) {
    let char = 'abcdefghijklmnopqrstuvwxyz'
    char = [...char].filter(v => !skip.includes(v))
    let sNum = [...s].map(v => v = char.indexOf(v) + index)
    sNum = sNum.map(v => v >= char.length ? v % char.length : v)
    return sNum.map(v => v = char[v]).join('')
}