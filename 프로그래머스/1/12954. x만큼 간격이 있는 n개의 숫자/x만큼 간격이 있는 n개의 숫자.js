function solution(x, n) {
    let result = [];
    if(x > 0) {
        for(i=x; i<=n*x; i+=x) {
            result.push(i);
        }
    } else if (x < 0) {
        for(i=x; i>=n*x; i+=x) {
            result.push(i);
        }
    } else if (x === 0) {
        for(i=0; i<n; i++) {
            result.push(0);
        }
    }
    return result;
}