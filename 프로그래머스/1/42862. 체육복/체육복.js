function solution(n, lost, reserve) {
    let result = [];
    
    lost = lost.sort((a,b) => a-b)
    reserve = reserve.sort((a,b) => a-b)
    
    let reserveArr = reserve.filter(v => !lost.includes(v))
    let lostArr = lost.filter(v => !reserve.includes(v))
    
    
    for(let i = 0; i < lostArr.length; i++) {
        for(let j = 0; j < reserveArr.length; j++) {
            if(lostArr[i] === reserveArr[j]-1 || lostArr[i] === reserveArr[j]+1) {
                result.push(lostArr[i])
                reserveArr = reserveArr.filter(v => v !== reserveArr[j])
            } 
        }
    }
    
    return lostArr.length >= result.length ? n - (lostArr.length - result.length) : n - lostArr.length   
}