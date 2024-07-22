function solution(a, b) {
    let result = [];
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
    for(i=min; i<=max; i++) {
        result.push(i);
    }
    return result.reduce((sum,value) => sum+=value);
}