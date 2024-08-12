function solution(numbers) {
    let result= [];
    
    for(i=0; i<10; i++) {
        if(!numbers.includes(i)) {
            result.push(i)
        }
    }
    return result.reduce((a,b) => a+b);
}