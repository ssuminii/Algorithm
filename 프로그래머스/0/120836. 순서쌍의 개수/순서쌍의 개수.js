function solution(n) {
    let result = [];
    for(let i=1; i<=n; i++) {
        if (n%i === 0) {
            result.push(i, n/i) ;
        }
    }
    return result.length / 2;
}