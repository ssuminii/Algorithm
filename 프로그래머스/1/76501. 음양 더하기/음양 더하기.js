function solution(absolutes, signs) {
    let result = [];
    
    for(i=0; i<signs.length; i++) {
        result.push([absolutes[i], signs[i]])
    }
    
    result.forEach(v => {
        if(v[1] === false) {
            v[0] *= -1
        }
    });
    
    return result.map(v => v[0]).reduce((a, b) => a + b);
}