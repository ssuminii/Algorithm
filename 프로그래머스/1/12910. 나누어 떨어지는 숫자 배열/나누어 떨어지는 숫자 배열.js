function solution(arr, divisor) {
    let result = [];
    for(a of arr) {
        if(a%divisor === 0) {
            result.push(a)
        }
    }
    return !result.length ? [-1] : result.sort((a,b) => a-b);
}