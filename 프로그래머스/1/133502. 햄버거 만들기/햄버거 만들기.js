function solution(ingredient) {
    let count = 0;
    let arr = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i])
        if(arr.length >= 4 && arr.slice(-4).join('') === '1231') {
            arr.splice(-4)
            count += 1
        }
    }
    
    return count
}