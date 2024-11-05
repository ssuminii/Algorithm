function solution(k, score) {
    let arr = [];
    let result = [];
    
    for(let s of score) {
        arr.push(s)
        arr = arr.sort((a,b) => a - b)
        
        if(arr.length > k) {
            arr.shift()
        }
        
        result.push(arr[0])
    }
    
    return result
}