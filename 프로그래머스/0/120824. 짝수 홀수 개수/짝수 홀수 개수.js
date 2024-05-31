function solution(num_list) {
    let answer = [];
    let a = 0;
    let b = 0;
    num_list.filter((item) => item%2 === 0 ? a++ : b++);
    answer.push(a,b);
    return answer;
}