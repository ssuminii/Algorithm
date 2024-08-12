function solution(numbers) {
    const arr = [0,1,2,3,4,5,6,7,8,9]
    let result= [];
    
    for(i=0; i<10; i++) {
        if(!numbers.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result.reduce((a,b) => a+b);
}