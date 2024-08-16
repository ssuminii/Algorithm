function solution(N, stages) {
    let count = {};
    let result = [];
    
    
    stages.forEach(v => {
        if(count[v] === undefined) {
            count[v] = 0;
        }
        count[v] += 1;
    })
    
    for(i=1; i<=N; i++) {
        let n = 0;
        if(count[i] !== undefined) {
            n = count[i]
        }
        let failRate = n/stages.length;
        result.push([i,failRate])
        stages.length -= n
    }
    return result.sort((a,b) => b[1] - a[1]).map(v => v[0]);
    
}