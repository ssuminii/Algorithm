function solution(t, p) {
    let arr = [];
    for(i=0; i < t.length; i++) {
        arr.push(t.slice(i, i+p.length))
    }
    arr = arr.filter(v => v.length === p.length).map(v => Number(v)).filter(v => v <= Number(p))
    return arr.length
}