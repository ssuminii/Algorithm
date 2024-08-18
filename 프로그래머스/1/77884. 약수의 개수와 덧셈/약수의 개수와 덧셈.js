function solution(left, right) {
    let result = [];
    
    for(i=left; i<=right; i++) {
        let arr = [];
        
        for(j=0; j<=i; j++) {
            if(i%j===0) {
                arr.push(j);
            }
        }
        
        arr.length%2 === 0 ? result.push(i) : result.push(i*-1)
    }
    
    return result.reduce((a,b) => a+b);
}