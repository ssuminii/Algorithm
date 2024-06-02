function solution(order) {
    return [...order.toString()].map(Number).filter((n) => n === 3 || n === 6 || n === 9).length;
}