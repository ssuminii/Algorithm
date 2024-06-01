function solution(n) {
    let num = n.toString();
    return [...num].map(Number).reduce((sum, value) => sum += value, 0);
}