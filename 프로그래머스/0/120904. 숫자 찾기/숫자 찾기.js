function solution(num, k) {
    const index = [...num.toString()].findIndex((n) => Number(n) === k);
    return index !== -1 ? index + 1 : -1;
}