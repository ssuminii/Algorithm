function solution(d, budget) {
    let result = 0
    d = d.sort((a,b) => a-b);
    for(i=0; i<d.length; i++) {
        if(budget - d[i] >= 0) {
            budget -= d[i]
            result += 1
        } else {
            break;
        }
    }
    return result;
}