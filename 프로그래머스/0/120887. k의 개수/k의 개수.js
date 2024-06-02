function solution(i, j, k) {
    let result = [];
    for(let a = i; a <= j; a++) {
        result.push(a);
    }
    return [...result.join('')].map(Number).filter((v) => v === k).length;
}