function solution(s){
    let arr = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            arr.push(s[i])
        } else {
            if(arr.length === 0) {
                return false;
            }
            arr.pop()
        }
    }
    
    return arr.length === 0;
}