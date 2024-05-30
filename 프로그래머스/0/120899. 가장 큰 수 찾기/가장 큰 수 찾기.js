function solution(array) {
    let answer = [];
    let result = array.reduce((a,b) => a > b ? a : b);
    let index = array.findIndex((item) => item === result);
    answer.push(result, index);
    return answer;
}