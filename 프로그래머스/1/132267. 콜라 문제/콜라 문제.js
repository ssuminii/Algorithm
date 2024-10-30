// 3, 2, 20
function solution(a, b, n) {
    let cokes = [];
    
    while(n >= a) {
        let result = ~~(n / a) * b
        let rest = ~~(n % a)
        cokes.push(result)
        n = result + rest
    }
    
    return cokes.reduce((a,b) => a + b)
}