function solution(N, stages) {
    let count = {};
    let result = [];

    stages.forEach(v => {
        if (count[v] === undefined) {
            count[v] = 0;
        }
        count[v] += 1;
    }); 
    // {"1":1,"2":3,"3":2,"4":1,"6":1}
    
    
    for (let i = 1; i <= N; i++) {
        let n = 0;
        if (count[i] !== undefined) {
            n = count[i]
        }
        let failRate = n / stages.length;
        result.push([i, failRate]);
        stages.length -= n;
    }
    // [[1,0.125],[2,0.42857142857142855],[3,0.5],[4,0.5],[5,0]
    // [[1,0],[2,0],[3,0],[4,1]]
    
    result.sort((a, b) => b[1] - a[1])
    
    return result.map(stage => stage[0]);
}