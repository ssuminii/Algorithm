function solution(array) {
    const result = array.sort((a,b) => a - b);
    const mid = ~~(result.length / 2 + 1) -1;
    return result[mid];
}