function solution(n, k) {
    let result = [];
    for(i=1; i<=n; i++) {
        if (i*k <= n) {
            result.push(i*k)
        }
    }
    return result;
}