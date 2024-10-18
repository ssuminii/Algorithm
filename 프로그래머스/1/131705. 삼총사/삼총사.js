function solution(number) {
    let result = []
    for (let i = 0; i < number.length; i++) {
        for(let j = i+1; j < number.length; j++) {
            for(let k = j+1; k < number.length; k++) {
                result.push([number[i], number[j], number[k]])
            }
        }
    }
    return result.map(v => v.reduce((a,b) => a+b, 0)).filter(v => v ===0).length
}