function solution(s) {
    let result = 0;
    let xCount = 0;
    let otherCount = 0;
    let word = s[0]
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === word) {
            xCount += 1;
        } else {
            otherCount += 1;
        }
        
        if (xCount === otherCount) {
            result += 1;
            xCount = 0;
            otherCount = 0;
            word = s[i+1]
        }
    }
    
    return otherCount || xCount ? result + 1 : result
}