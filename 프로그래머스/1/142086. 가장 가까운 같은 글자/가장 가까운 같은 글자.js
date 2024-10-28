function solution(s) {
    let result = [];
    let words = []; 

    [...s].forEach((v,i) => {
        if(!words.includes(v)) {
            words.push(v)
            result.push(-1)
        } else {
            words.push(v)
            result.push(i - words.indexOf(v))
            words.splice(words.indexOf(v), 1, 0)
        }
    })
    
    return result;
}