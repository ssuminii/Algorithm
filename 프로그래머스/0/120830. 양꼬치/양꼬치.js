function solution(n, k) {
    let result = (12000 * n) + (2000 * k)
    if (n >= 10) {
        result = result - (2000 * Math.trunc(n/10));
    }
    return result;
}