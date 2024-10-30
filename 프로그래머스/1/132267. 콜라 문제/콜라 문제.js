function solution(a, b, n) {
    let cokes = 0;
    
    while(n >= a) {
        let result = ~~(n / a) * b
        let rest = ~~(n % a)
        cokes += result
        n = result + rest
    }
    
    return cokes
}