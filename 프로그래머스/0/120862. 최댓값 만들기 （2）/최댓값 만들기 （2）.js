function solution(numbers) {
    let result = numbers.sort((a,b) => a-b);
    let sort1 = result[0] * result[1];
    let sort2 = result[result.length-1] * result[result.length-2]
    return sort1 > sort2 ? sort1 : sort2;
}