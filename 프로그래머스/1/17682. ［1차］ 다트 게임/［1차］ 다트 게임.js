function solution(dartResult) {
    let result = [];
    let num = [];
    
    [...dartResult].forEach(v => {
        if (!isNaN(v)) {
            num.push(v)
        } else {
            if(v === 'S') {
                result.push(Number(num.join('')))
                num = [];
            } else if(v === 'D') {
                result.push(Math.pow(Number(num.join('')), 2))
                num = [];
            } else if(v === 'T') {
                result.push(Math.pow(Number(num.join('')), 3))
                num = [];
            } else if (v === '*') {
                if(result.length > 2) {
                    result[1] *= 2
                    result[2] *= 2
                } else {
                    result = result.map(v => v * 2)
                }
            } else if (v === '#') {
                result.push(result.pop() * -1)
            }
        } 
    })

    return result.reduce((a,b) => a + b)
}