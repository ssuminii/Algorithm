function solution(numbers) {
    let sum = 0;
    numbers.forEach((item) => sum += item);
    return sum/numbers.length;
}