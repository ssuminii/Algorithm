function solution(s){
    s = [...s.toLowerCase()]
    let resultP = '';
    let resultY = '';
    for(i=0; i<=s.length; i++) {
        if(s[i] === 'p') {
            resultP += 'p'
        } else if (s[i] === 'y') {
            resultY += 'y'
        }
    }
    return resultP.length === resultY.length ? true : false
}