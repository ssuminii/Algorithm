function solution(sizes) {
    sizes = sizes.map(v => v = v.sort((a,b) => b-a))
    
    const x = Math.max(...sizes.map(v => v = v[0]));
    const y = Math.max(...sizes.map(v => v = v[1]));
    
    return x * y
}