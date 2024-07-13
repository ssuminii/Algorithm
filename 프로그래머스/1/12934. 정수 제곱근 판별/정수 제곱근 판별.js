function solution(n) {
    return n % Math.sqrt(n) === 0 ? (Math.sqrt(n)+1) * (Math.sqrt(n)+1) : -1 ;
}