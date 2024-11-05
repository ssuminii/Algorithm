function solution(number, limit, power) {
    let result = [];
    
    for(let i = 1; i <= number; i++) {
        let divisor = 0;
        
        for(let j = 1; j * j <= i; j++) {
            if (i%j === 0) {
                divisor ++
                if(j !== i/j) {
                    divisor ++
                }
            }
        }
        
        result.push(divisor)
    }
    
    return result.map(v => v > limit ? power : v).reduce((a,b) => a + b)
}