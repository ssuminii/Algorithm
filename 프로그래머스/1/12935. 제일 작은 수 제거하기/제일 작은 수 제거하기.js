function solution(arr) {
    let result = [];
    let min = Math.min(...arr)
    
    for(i=0; i<arr.length; i++) {
        if(arr[i] !== min) {
            result.push(arr[i]);
        } else if (arr.length === 1) {
            return [-1]
        }
    }
    return result;
}