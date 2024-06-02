function solution(n) {
    let answer = [];
    for(i=1; i<=n; i++) {
        let result = [];
        for(j=1; j<=i; j++) {
            if(i%j === 0) {
                result.push(j);
            }
        }
        answer.push(result);
    }
    return answer.filter((v)=> v.length > 2).length;
}