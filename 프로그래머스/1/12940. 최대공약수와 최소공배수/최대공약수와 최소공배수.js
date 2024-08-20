function solution(n, m) {
    let max = [];
    let result = [];
    
    for(i=1; i<=m; i++) {
        if(n%i===0 && m%i===0) {
            max.push(i)
        }
    }
    let min = (n * m) / max.at(-1)
    
    result.push(max.at(-1));
    result.push(min);
    return result;
}