function solution(sides) {
    let result = [];
    
    const max = Math.max(sides[0], sides[1]);
    const min = Math.min(sides[0], sides[1]);
    
    for (let i = max - min + 1; i < max + min; i++) {
        result.push(i);
    }
    
    return result.length;
}