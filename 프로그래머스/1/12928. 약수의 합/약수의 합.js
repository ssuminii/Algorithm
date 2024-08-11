function solution(n) {
    let result = [];
    for(i=1; i<=n; i++){
        if(n%i===0) {
            result.push(i)
        }
    }
    return result.reduce((sum,value) => sum+=value,0);
}