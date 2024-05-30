function solution(numbers) {
    let answer = numbers.sort((a,b) => b - a);
    return answer?.[0] * answer?.[1];
}