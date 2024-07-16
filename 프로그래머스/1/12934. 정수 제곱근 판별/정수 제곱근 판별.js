function solution(n) {
    return n % Math.sqrt(n) === 0 ? Math.pow(Math.sqrt(n)+1, 2) : -1 ;
}