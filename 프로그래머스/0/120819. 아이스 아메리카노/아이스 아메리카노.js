function solution(money) {
    let answer = [];
    let num = ~~(money/5500);
    let rest = money%5500;
    answer.push(num, rest);
    return answer;
}